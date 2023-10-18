import { Canvas } from "@react-three/fiber";
import React, { ReactElement, Suspense } from "react";
import Box from "./Box";
import Floor from "./Floor";
import s from "./GraphicAnim.module.css";
import LightBulb from "./LightBulb";
import OrbitControls from "./OrbitControls";
import Draggable from "./Draggable";
import dynamic from "next/dynamic";
import SafeHydrate from "@common/SafeHydrate";

const BoxCom: any = dynamic(() => import("./Box"), {
  ssr: false,
});

function GraphicAnim() {
  return (
    <div className={s.scene}>
      <Canvas
        shadows={true}
        className={s.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.3} />
        <Draggable>
          <Suspense fallback={null}>
            <BoxCom />
          </Suspense>
        </Draggable>
        <LightBulb position={[0, 3, 0]} />
        <OrbitControls />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}

export default GraphicAnim;
