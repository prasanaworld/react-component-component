import React, { HTMLAttributes, ReactNode } from "react";
import CSS from "csstype";

export type BoxStyleProps = CSS.Properties;

export type BoxProps = {
  children: ReactNode;
  as?: string;
  className?: string;
  elementProps?: HTMLAttributes<HTMLElement>;
} & BoxStyleProps;

export function Box({
  children,
  className = "",
  as = "div",
  elementProps,
  ...rest
}: BoxProps) {
  return React.createElement(
    as,
    {
      style: { ...rest },
      className,
      ...elementProps,
    },
    children
  );
}
