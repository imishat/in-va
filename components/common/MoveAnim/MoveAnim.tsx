import { deviceModels } from "components/common/Model/deviceModels";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import s from "./MoveAnim.module.css";

const Model: any = dynamic(() => import("components/common/Model").then(mod => mod.Model as any));
const MoveAnim = () => (
  <div className={s.preview}>
    <>
      <div className={s.model} data-device="laptop">
          <Model
            cameraPosition={{ x: 0, y: 0, z: 8 }}
            showDelay={700}
            show={true}
            models={[
              {
                ...deviceModels.laptop,
                sizes: [],
              },
            ]}
          />
      </div>
    </>
  </div>
);

export default MoveAnim;
