import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { colors, colors2 } from "@utils/index";
import { menus } from "@utils/index";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ i }: { i: any }) => {
  const style = { border: `2px solid ${colors2[(i + 1) % menus.length]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center">
        <div className="icon-placeholder mr-2" style={style} />
        <Link href={`${menus[i]?.link}`}>
          <a className="font-bold text-white">{menus[i]?.name}</a>
        </Link>
      </div>
    </motion.li>
  );
};
