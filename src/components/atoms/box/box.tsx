import React, { HTMLAttributes, ReactNode } from "react";
import CSS from "csstype";

export type BoxStyleProps = CSS.Properties;

export type BoxProps = {
  children: ReactNode;
  as?: string;
  className?: string;
  dataTestId?: string;
  elementProps?:
    | HTMLAttributes<HTMLElement>
    | HTMLAttributes<HTMLButtonElement>
    | HTMLAttributes<HTMLInputElement>;
} & BoxStyleProps;

export function Box({
  children,
  className = "",
  as = "div",
  elementProps,
  dataTestId,
  ...rest
}: BoxProps) {
  return React.createElement(
    as,
    {
      style: { ...rest },
      className,
      "data-testid": dataTestId,
      ...elementProps,
    },
    children
  );
}
