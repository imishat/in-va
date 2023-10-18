import { MotionValue, useSpring, useTransform } from "framer-motion";
import { SpringOptions } from "popmotion";

export function useSmoothTransform(
  value: MotionValue<unknown>,
  springOptions: SpringOptions | undefined,
  transformer: (input: unknown) => any
) {
  return useSpring(useTransform(value, transformer), springOptions);
}
