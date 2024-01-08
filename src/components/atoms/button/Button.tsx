import React, { ReactNode } from "react";
import "./button.scss";
import { Box } from "../box/box";

export type CSButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  name?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ATOM_NAME = "cs-button";
export function CSButton({
  icon,
  children,
  className,
  onClick,
}: CSButtonProps) {
  return (
    <Box
      as="button"
      className={`${ATOM_NAME} ${className}`}
      elementProps={{ onClick: onClick }}
    >
      <Box className={`${ATOM_NAME}__icon`}>{icon}</Box>
      <Box className={`${ATOM_NAME}__label`}>{children}</Box>
    </Box>
  );
}
