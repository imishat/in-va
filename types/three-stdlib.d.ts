declare module "three/examples/jsm/loaders/DRACOLoader" {
  import { LoadingManager, BufferGeometry } from "three";

  export class DRACOLoader {
    constructor(manager?: LoadingManager);
    decoderPath: string;
    setDecoderConfig(config: object): this;
    setDecoderPath(path: string): this;
    load(
      url: string,
      onLoad: (geometry: BufferGeometry) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
    parse(
      arrayBuffer: ArrayBuffer,
      onLoad: (geometry: BufferGeometry) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}

declare module "three/examples/jsm/loaders/GLTFLoader" {
  import { LoadingManager, Group, Scene } from "three";
  import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

  export interface GLTF {
    scene: Scene;
    // ... other properties
  }

  export class GLTFLoader {
    loadAsync(url: string): Promise<GLTF>;
    constructor(manager?: LoadingManager);
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
    setDRACOLoader(dracoLoader: DRACOLoader): void;
  }
}
