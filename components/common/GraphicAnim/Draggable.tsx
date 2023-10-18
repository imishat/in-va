import React, { useEffect, useRef, useState } from "react";
import { extend, ReactThreeFiber, useThree } from "@react-three/fiber";
import { DragControls } from "three/examples/jsm/controls/DragControls";

extend({ DragControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      dragControls: ReactThreeFiber.Object3DNode<
        DragControls,
        typeof DragControls
      >;
    }
  }
}

function Draggable(props: any) {
  const groupRef: any = useRef();
  const controlsRef: any = useRef();
  const [objects, setObjects] = useState();
  const { camera, gl, scene }: any = useThree();

  useEffect(() => {
    setObjects(groupRef.current.children);
  }, [groupRef]);

  useEffect(() => {
    controlsRef.current.addEventListener("hoveron", () => {
      scene.orbitControls.enabled = false;
    });
    controlsRef.current.addEventListener("hoveroff", () => {
      scene.orbitControls.enabled = true;
    });
  }, [objects]);

  return (
    <group ref={groupRef}>
      {/* @ts-ignore */}
      <dragControls ref={controlsRef} args={[objects, camera, gl.domElement]} />
      {props.children}
    </group>
  );
}

export default Draggable;
