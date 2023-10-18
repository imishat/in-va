import { DRACOLoader, GLTFLoader } from 'three-stdlib';

const dracoLoader = new DRACOLoader();
const gltfLoader = new GLTFLoader();
dracoLoader.setDecoderPath('/draco/');
gltfLoader.setDRACOLoader(dracoLoader);

/**
 * GLTF model loader configured with draco decoder
 */
export const modelLoader = gltfLoader;

/**
 * Clean up a scene's materials and geometry
 */
export const cleanScene = (scene: { traverse: (arg0: (object: any) => void) => void; }) => {
  scene?.traverse((object: { isMesh: any; geometry: { dispose: () => void; }; material: { isMaterial: any; }; }) => {
    if (!object.isMesh) return;

    object.geometry.dispose();

    if (object.material.isMaterial) {
      cleanMaterial(object.material);
    } else {
      for (const material of (object as any).material) {
        cleanMaterial(material);
      }
    }
  });
};

/**
 * Clean up and dispose of a material
 */
export const cleanMaterial = (material: { [x: string]: any; dispose?: any; }) => {
  material.dispose();

  for (const key of Object.keys(material)) {
    const value = material[key];
    if (value && typeof value === 'object' && 'minFilter' in value) {
      value.dispose();
    }
  }
};

/**
 * Clean up and dispose of a renderer
 */
export const cleanRenderer = (renderer: { dispose: () => void; forceContextLoss: () => void; } | null) => {
  renderer?.dispose();
  renderer?.forceContextLoss();
  renderer = null;
};

/**
 * Clean up lights by removing them from their parent
 */
export const removeLights = (lights: any) => {
  for (const light of lights) {
    light.parent.remove(light);
  }
};

/**
 * Get child by name
 */
export const getChild = (name: any, object: { traverse: (arg0: (child: any) => void) => void; }) => {
  let node;

  object.traverse((child: { name: any; }) => {
    if (child.name === name) {
      node = child;
    }
  });

  return node;
};
