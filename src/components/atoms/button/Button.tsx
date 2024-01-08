import React, { ReactNode } from "react";
import "./button.scss";

export type DownloadButtonProps = {
  label: string;
  icon?: ReactNode;
  name?: string;
};

const ATOM_NAME = "cs-button";

export function CSButton({ icon, label }: DownloadButtonProps) {
  return (
    <button className={ATOM_NAME}>
      <span className={`${ATOM_NAME}__icon`}>{icon}</span>
      <span className={`${ATOM_NAME}__label`}> </span>
      {label}
    </button>
  );
}
