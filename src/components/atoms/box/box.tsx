import React, { HTMLAttributes, ReactNode } from "react";
import CSS from "csstype";

export type BoxStyleProps = CSS.Properties;

export type BoxProps = {
  children: ReactNode;
  as?: string;
  className?: string;
} & BoxStyleProps &
  HTMLAttributes<HTMLElement>;

export function Box({
  children,
  className = "",
  as = "div",
  ...rest
}: BoxProps) {
  return React.createElement(
    as,
    {
      style: { ...rest },
      className,
    },
    children
  );
}
