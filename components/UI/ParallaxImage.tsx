import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const ParallaxImage = ({ src, ...style }: any) => {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
    clamp: false,
  });

  useEffect(() => {
    const element: any = ref.current;
    setElementTop(element?.offsetTop);
  }, [ref]);

  return (
    <div ref={ref} className="image-container">
      <motion.div className="overlay" style={{ ...style, y }} />
      <img src={src} alt="" />
    </div>
  );
};

export default ParallaxImage;
