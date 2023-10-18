import React from "react";
import { extend, ReactThreeFiber, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
    }
  }
}

function Controls(props: any) {
  const { camera, gl } = useThree();
  return (
      // @ts-ignore
    <orbitControls attach={"orbitControls"} args={[camera, gl.domElement]} />
  );
}

export default Controls;
