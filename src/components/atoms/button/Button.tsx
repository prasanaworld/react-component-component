import React, { ReactNode } from "react";
import "./button.scss";
import { Box } from "../box/box";

export type CSButtonProps = {
  label: string;
  icon?: ReactNode;
  name?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ATOM_NAME = "cs-button";
export function CSButton({ icon, label, onClick }: CSButtonProps) {
  return (
    <Box
      as="button"
      className={ATOM_NAME}
      onClick={onClick ? onClick : undefined}
    >
      <Box className={`${ATOM_NAME}__icon`}>{icon}</Box>
      <Box className={`${ATOM_NAME}__label`}>{label}</Box>
    </Box>
  );
}
