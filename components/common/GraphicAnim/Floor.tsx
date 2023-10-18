import React from "react";

function Floor(props: any) {
  return (
    <mesh {...props} recieveShadow={true}>
      <boxBufferGeometry args={[20,1,10]} />
      {/* @ts-ignore */}
      <meshPhysicalMaterial color='white' />
    </mesh>
  );
}

export default Floor;