import { ReactNode } from "react";
import { CSLabel } from "../../atoms/label/label";
import "./status.scss";

export type StatusProps = {
  showInfo: boolean;
  children: ReactNode;
};

const MOLECULE_NAME = "cs-status";
export function CSStatus({ showInfo, children }: StatusProps) {
  return (
    <CSLabel className={MOLECULE_NAME}>
      {showInfo && <span className={`${MOLECULE_NAME}__info`}>{showInfo}</span>}
      {children}
    </CSLabel>
  );
}
