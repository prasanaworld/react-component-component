import { ReactNode } from "react";
import CSS from "csstype";
import "./hstack.scss";

export type BoxProps = {
  children: ReactNode;
} & CSS.Properties;

export function Box({ children, ...rest }: BoxProps) {
  return <div style={{ ...rest }}>{children}</div>;
}
