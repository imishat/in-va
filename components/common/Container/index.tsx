import React from "react";
import s from "./Container.module.css";
import { ReactElement } from "react";

function Container({ children }: { children: ReactElement }) {
  return <div className={s.root}>{children}</div>;
}

export default Container;
