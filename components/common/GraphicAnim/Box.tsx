import { useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";

function Box(props: any) {
  // @ts-ignore
  const texture = useLoader(TextureLoader, "/projects/jachai.svg");

  return (
    <mesh {...props} recieveShadow={true} castShadow={true}>
      <boxBufferGeometry />
      {/* @ts-ignore */}
      <meshPhysicalMaterial map={texture} color={"white"} />
    </mesh>
  );
}
export default Box;