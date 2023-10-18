import React, { useState } from "react";
import CustomCursorContext, {
  CursorLookType,
} from "../context/CustomCursorContext";

const CustomCursorManager = ({ children }: any) => {
  const [type, setType] = useState<CursorLookType>("none");

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  );
};

export default CustomCursorManager;
