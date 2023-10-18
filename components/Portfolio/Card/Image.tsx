import * as React from "react";
import { motion, useDeprecatedInvertedScale } from "framer-motion";
import { closeSpring } from "../../../utils";

export const Image = ({
  id,
  isSelected,
  pointOfInterest = 0,
  backgroundColor,
}: {
  id: any;
  isSelected: any;
  pointOfInterest: any;
  backgroundColor: any;
}) => {
//   const inverted = useDeprecatedInvertedScale();

  return (
    <motion.div
      className="card-image-container"
      style={{ backgroundColor, originX: 0, originY: 0 }}
    >
      <motion.img
        className="card-image"
        src={`images/${id}.jpg`}
        alt=""
        initial={false}
        animate={
          isSelected ? { x: -20, y: -20 } : { x: -pointOfInterest, y: 0 }
        }
        transition={closeSpring}
      />
    </motion.div>
  );
};
