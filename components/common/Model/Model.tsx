
import { animate, useReducedMotion, useSpring } from "framer-motion";
import { createRef, useCallback, useEffect, useRef, useState } from "react";
import {
  AmbientLight,
  Color,
  DirectionalLight,
  Group,
  LinearFilter,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshDepthMaterial,
  OrthographicCamera,
  PerspectiveCamera,
  PlaneBufferGeometry,
  Scene,
  ShaderMaterial,
  TextureLoader,
  Vector3,
  WebGLRenderTarget,
  WebGLRenderer,
  sRGBEncoding,
} from "three";
import { HorizontalBlurShader, VerticalBlurShader } from "three-stdlib";
import { resolveSrcFromSrcSet } from "utils/image";
import { classes, cssProps, numToMs } from "utils/style";
import {
  cleanRenderer,
  cleanScene,
  modelLoader,
  removeLights,
} from "utils/three";
import s from "./Model.module.css";
import { ModelAnimationType } from "./deviceModels";
import { useInViewport } from "../../../hooks/use-inviewport";

const MeshType = {
  Frame: "Frame",
  Logo: "Logo",
  Screen: "Screen",
};

const rotationSpringConfig = {
  stiffness: 40,
  damping: 20,
  mass: 1.4,
  restSpeed: 0.001,
};

export const Model = ({
  models,
  show = true,
  showDelay = 0,
  cameraPosition = { x: 0, y: 0, z: 8 },
  style,
  className,
  alt,
  ...rest
}: any) => {
  const [loaded, setLoaded] = useState(false);
  const container: any = useRef();
  const canvas: any = useRef();
  const camera: any = useRef();
  const textureLoader: any = useRef();
  const modelGroup: any = useRef();
  const scene: any = useRef();
  const renderer: any = useRef();
  const shadowGroup: any = useRef();
  const renderTarget: any = useRef();
  const renderTargetBlur: any = useRef();
  const shadowCamera: any = useRef();
  const depthMaterial: any = useRef();
  const horizontalBlurMaterial: any = useRef();
  const verticalBlurMaterial: any = useRef();
  const plane: any = useRef();
  const lights: any = useRef();
  const blurPlane: any = useRef();
  const fillPlane: any = useRef();
  const isInViewport = useInViewport(container, false, { threshold: 0.4 });
  const reduceMotion = useReducedMotion();
  const rotationX = useSpring(0, rotationSpringConfig);
  const rotationY = useSpring(0, rotationSpringConfig);

  useEffect(() => {
    const { clientWidth, clientHeight } = container.current;

    // @ts-ignore
    renderer.current = new (WebGLRenderer as any)({
      canvas: canvas.current,
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });

    renderer.current.setPixelRatio(2);
    renderer.current.setSize(clientWidth, clientHeight);
    renderer.current.outputEncoding = sRGBEncoding;
    renderer.current.physicallyCorrectLights = true;

    camera.current = new PerspectiveCamera(
      36,
      clientWidth / clientHeight,
      0.1,
      100
    );
    camera.current.position.set(
      cameraPosition.x,
      cameraPosition.y,
      cameraPosition.z
    );
    scene.current = new Scene();

    // @ts-ignore
    textureLoader.current = new TextureLoader();
    modelGroup.current = new Group();
    scene.current.add(modelGroup.current);

    // Lighting
    const ambientLight = new AmbientLight(0xffffff, 1.2);
    const keyLight: any = new DirectionalLight(0xffffff, 1.1);
    const fillLight: any = new DirectionalLight(0xffffff, 0.8);

    fillLight.position.set(-6, 2, 2);
    keyLight.position.set(0.5, 0, 0.866);
    lights.current = [ambientLight, keyLight, fillLight];
    lights.current.forEach((light: any) => scene.current.add(light));

    // The shadow container, if you need to move the plane just move this
    shadowGroup.current = new Group();
    scene.current.add(shadowGroup.current);
    shadowGroup.current.position.set(0, 0, -0.8);
    shadowGroup.current.rotateX(Math.PI / 2);

    const renderTargetSize = 512;
    const planeWidth = 8;
    const planeHeight = 8;
    const cameraHeight = 1.5;
    const shadowOpacity = 0.8;
    const shadowDarkness = 3;

    // The render target that will show the shadows in the plane texture
    renderTarget.current = new WebGLRenderTarget(
      renderTargetSize,
      renderTargetSize
    );
    renderTarget.current.texture.generateMipmaps = false;

    // The render target that we will use to blur the first render target
    renderTargetBlur.current = new WebGLRenderTarget(
      renderTargetSize,
      renderTargetSize
    );
    renderTargetBlur.current.texture.generateMipmaps = false;

    // Make a plane and make it face up
    const planeGeometry = new PlaneBufferGeometry(
      planeWidth,
      planeHeight
      // @ts-ignore
    ).rotateX(Math.PI / 2);

    const planeMaterial = new MeshBasicMaterial({
      map: renderTarget.current.texture,
      opacity: shadowOpacity,
      transparent: true,
    });

    plane.current = new Mesh(planeGeometry, planeMaterial);
    // The y from the texture is flipped!
    plane.current.scale.y = -1;
    shadowGroup.current.add(plane.current);

    // The plane onto which to blur the texture
    blurPlane.current = new Mesh(planeGeometry);
    blurPlane.current.visible = false;
    shadowGroup.current.add(blurPlane.current);

    // The plane with the color of the ground
    const fillMaterial = new MeshBasicMaterial({
      color: 0xffffff,
      opacity: 0,
      transparent: true,
    });

    fillPlane.current = new Mesh(planeGeometry, fillMaterial);
    fillPlane.current.rotateX(Math.PI);
    fillPlane.current.position.y -= 0.00001;
    shadowGroup.current.add(fillPlane.current);

    // The camera to render the depth material from
    shadowCamera.current = new OrthographicCamera(
      -planeWidth / 2,
      planeWidth / 2,
      planeHeight / 2,
      -planeHeight / 2,
      0,
      cameraHeight
    );
    // Get the camera to look up
    shadowCamera.current.rotation.x = Math.PI / 2;
    shadowGroup.current.add(shadowCamera.current);

    // Like MeshDepthMaterial, but goes from black to transparent
    depthMaterial.current = new MeshDepthMaterial();
    depthMaterial.current.userData.darkness = { value: shadowDarkness };
    depthMaterial.current.onBeforeCompile = (shader: {
      uniforms: { darkness: any };
      fragmentShader: string;
    }) => {
      shader.uniforms.darkness = depthMaterial.current.userData.darkness;
      shader.fragmentShader = `
        uniform float darkness;
        ${shader.fragmentShader.replace(
          "gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );",
          "gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );"
        )}
      `;
    };
    depthMaterial.current.depthTest = false;
    depthMaterial.current.depthWrite = false;

    horizontalBlurMaterial.current = new ShaderMaterial(HorizontalBlurShader);
    horizontalBlurMaterial.current.depthTest = false;

    verticalBlurMaterial.current = new ShaderMaterial(VerticalBlurShader);
    verticalBlurMaterial.current.depthTest = false;

    const unsubscribeX = rotationX.onChange(renderFrame);
    const unsubscribeY = rotationY.onChange(renderFrame);

    return () => {
      removeLights(lights.current);
      cleanScene(scene.current);
      cleanRenderer(renderer.current);
      unsubscribeX();
      unsubscribeY();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const blurShadow = useCallback((amount) => {
    blurPlane.current.visible = true;

    // Blur horizontally and draw in the renderTargetBlur
    blurPlane.current.material = horizontalBlurMaterial.current;
    blurPlane.current.material.uniforms.tDiffuse.value =
      renderTarget.current.texture;
    horizontalBlurMaterial.current.uniforms.h.value = amount * (1 / 256);

    renderer.current.setRenderTarget(renderTargetBlur.current);
    renderer.current.render(blurPlane.current, shadowCamera.current);

    // Blur vertically and draw in the main renderTarget
    blurPlane.current.material = verticalBlurMaterial.current;
    blurPlane.current.material.uniforms.tDiffuse.value =
      renderTargetBlur.current.texture;
    verticalBlurMaterial.current.uniforms.v.value = amount * (1 / 256);

    renderer.current.setRenderTarget(renderTarget.current);
    renderer.current.render(blurPlane.current, shadowCamera.current);

    blurPlane.current.visible = false;
  }, []);

  // Handle render passes for a single frame
  const renderFrame = useCallback(() => {
    const blurAmount = 5;

    // Remove the background
    const initialBackground = scene.current.background;
    scene.current.background = null;

    // Force the depthMaterial to everything
    // cameraHelper.visible = false;
    scene.current.overrideMaterial = depthMaterial.current;

    // Render to the render target to get the depths
    renderer.current.setRenderTarget(renderTarget.current);
    renderer.current.render(scene.current, shadowCamera.current);

    // And reset the override material
    scene.current.overrideMaterial = null;

    blurShadow(blurAmount);

    // A second pass to reduce the artifacts
    // (0.4 is the minimum blur amout so that the artifacts are gone)
    blurShadow(blurAmount * 0.4);

    // Reset and render the normal scene
    renderer.current.setRenderTarget(null);
    scene.current.background = initialBackground;

    modelGroup.current.rotation.x = rotationX.get();
    modelGroup.current.rotation.y = rotationY.get();

    renderer.current.render(scene.current, camera.current);
  }, [blurShadow, rotationX, rotationY]);

  // Handle mouse move animation
  useEffect(() => {
    const onMouseMove = (event: { clientX: number; clientY: number }) => {
      const { innerWidth, innerHeight } = window;

      const position = {
        x: (event.clientX - innerWidth / 2) / innerWidth,
        y: (event.clientY - innerHeight / 2) / innerHeight,
      };

      rotationX.set(position.y / 2);
      rotationY.set(position.x / 2);
    };

    if (isInViewport && !reduceMotion) {
      window.addEventListener("mousemove", onMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (!container.current) return;

      const { clientWidth, clientHeight } = container.current;

      renderer.current.setSize(clientWidth, clientHeight);
      camera.current.aspect = clientWidth / clientHeight;
      camera.current.updateProjectionMatrix();

      renderFrame();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [renderFrame]);

  return (
    <div>
      <div
        className={classes(s.model, className)}
        data-loaded={loaded}
        style={cssProps({ delay: numToMs(showDelay) }, style)}
        ref={container}
        role="img"
        aria-label={alt}
        {...rest}
      >
        <canvas className={s.canvas} ref={canvas} />
        {models.map((model: { position: any }, index: any) => (
          // @ts-ignore
          <Device
            key={JSON.stringify(model.position)}
            renderer={renderer}
            modelGroup={modelGroup}
            textureLoader={textureLoader}
            show={show}
            showDelay={showDelay}
            renderFrame={renderFrame}
            index={index}
            setLoaded={setLoaded}
            model={model}
            camera={camera}
          />
        ))}
      </div>
    </div>
  );
};

const Device = ({
  renderer,
  model,
  modelGroup,
  textureLoader,
  renderFrame,
  index,
  showDelay,
  setLoaded,
  show,
  camera,
}: any) => {
  const [loadDevice, setLoadDevice] = useState();
  const reduceMotion = useReducedMotion();
  const placeholderScreen: any = createRef();

  useEffect(() => {
    const applyScreenTexture = async (
      texture: {
        encoding: number;
        minFilter: number;
        magFilter: number;
        flipY: boolean;
        anisotropy: any;
        generateMipmaps: boolean;
      },
      node: any
    ) => {
      texture.encoding = sRGBEncoding;
      texture.minFilter = LinearFilter;
      texture.magFilter = LinearFilter;
      texture.flipY = false;
      texture.anisotropy = renderer.current.capabilities.getMaxAnisotropy();
      texture.generateMipmaps = false;

      // Decode the texture to prevent jank on first render
      await renderer.current.initTexture(texture);

      node.material.color = new Color(0xffffff);
      node.material.transparent = true;
      node.material.map = texture;
    };

    // Generate promises to await when ready
    const load = async () => {
      const { texture, position, url }: any = model;
      let loadFullResTexture;
      let playAnimation;

      const image = await resolveSrcFromSrcSet({srcSet: texture?.srcSet, sizes: texture?.sizes});

      const [placeholder, gltf] = await Promise.all<any>([
        await textureLoader.current.loadAsync(texture.placeholder.src),
        await modelLoader.loadAsync(url),
      ]);

      renderer.current.compile(gltf.scene, camera.current);
      modelGroup.current.add(gltf.scene);

      // @ts-ignore
      gltf.scene.traverse(
        async (node: {
          material: { color: Color; clone: () => any };
          name: string;
          clone: () => any;
          parent: { add: (arg0: unknown) => void };
        }) => {
          if (node.material) {
            node.material.color = new Color(0x1f2025);
            node.material.color.convertSRGBToLinear();
          }

          if (node.name === MeshType.Screen) {
            // Create a copy of the screen mesh so we can fade it out
            // over the full resolution screen texture
            placeholderScreen.current = node.clone();
            placeholderScreen.current.material = node.material.clone();
            node.parent.add(placeholderScreen.current);
            placeholderScreen.current.material.opacity = 1;
            placeholderScreen.current.position.z += 0.001;

            applyScreenTexture(placeholder, placeholderScreen.current);

            loadFullResTexture = async () => {
              const fullSize = await textureLoader.current.loadAsync(image);
              await applyScreenTexture(fullSize, node);

              animate(1, 0, {
                onUpdate: (value) => {
                  placeholderScreen.current.material.opacity = value;
                  renderFrame();
                },
              });
            };
          }
        }
      );

      const targetPosition = new Vector3(position.x, position.y, position.z);

      if (reduceMotion) {
        gltf.scene.position.set(...targetPosition.toArray());
      }

      // Simple slide up animation
      if (model.animation === ModelAnimationType.SpringUp) {
        playAnimation = () => {
          const startPosition = new Vector3(
            targetPosition.x,
            targetPosition.y - 1,
            targetPosition.z
          );

          gltf.scene.position.set(...startPosition.toArray());

          animate(startPosition.y, targetPosition.y, {
            type: "spring",
            delay: (300 * index + showDelay) / 1000,
            stiffness: 60,
            damping: 20,
            mass: 1,
            restSpeed: 0.0001,
            restDelta: 0.0001,
            onUpdate: (value) => {
              gltf.scene.position.y = value;
              renderFrame();
            },
          });
        };
      }

      // Swing the laptop lid open
      if (model.animation === ModelAnimationType.LaptopOpen) {
        playAnimation = () => {
          const frameNode = gltf.scene.children.find(
            (node: { name: string }) => node.name === MeshType.Frame
          );
          const startRotation = new Vector3(MathUtils.degToRad(90), 0, 0);
          const endRotation = new Vector3(0, 0, 0);

          gltf.scene.position.set(...targetPosition.toArray());
          frameNode.rotation.set(...startRotation.toArray());

          return animate(startRotation.x, endRotation.x, {
            type: "spring",
            delay: (300 * index + showDelay) / 1000,
            stiffness: 80,
            damping: 20,
            restSpeed: 0.0001,
            restDelta: 0.0001,
            onUpdate: (value) => {
              frameNode.rotation.x = value;
              renderFrame();
            },
          });
        };
      }

      return { loadFullResTexture, playAnimation };
    };

    // @ts-ignore
    setLoadDevice({ start: load });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!loadDevice || !show) return;
    let animation: { stop: () => void };

    const onLoad = async () => {
      // @ts-ignore
      const { loadFullResTexture, playAnimation } = await loadDevice.start();

      setLoaded(true);

      if (!reduceMotion) {
        animation = playAnimation();
      }

      await loadFullResTexture();

      if (reduceMotion) {
        renderFrame();
      }
    };

    onLoad();

    return () => {
      animation?.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadDevice, show]);

  return <></>;
};
