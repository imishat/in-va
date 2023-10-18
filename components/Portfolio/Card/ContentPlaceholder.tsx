import * as React from "react";
import { motion, useDeprecatedInvertedScale } from "framer-motion";

export const ContentPlaceholder = React.memo(() => {
//   const inverted = useDeprecatedInvertedScale();
  return (
    <motion.div
      className="content-container"
      style={{ originY: 0, originX: 0 }}
    >
      grxtucyfg kv khvhvh
    </motion.div>
  );
});
