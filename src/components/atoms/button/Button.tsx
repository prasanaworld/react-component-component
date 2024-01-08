import React, { ReactNode } from "react";
import "./button.scss";

export type CSButtonProps = {
  label: string;
  icon?: ReactNode;
  name?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ATOM_NAME = "cs-button";
export function CSButton({ icon, label, onClick }: CSButtonProps) {
  return (
    <button className={ATOM_NAME} onClick={onClick ? onClick : undefined}>
      <span className={`${ATOM_NAME}__icon`}>{icon}</span>
      <span className={`${ATOM_NAME}__label`}>{label}</span>
    </button>
  );
}
