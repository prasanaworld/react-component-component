import { useEffect, useRef } from "react";
import "./checkbox.scss";

interface HTMLCheckboxElement extends HTMLInputElement {
  checked: boolean;
  indeterminate: boolean;
}

type checkboxValueType = "checked" | "unchecked" | "indeterminate";

export type CSCheckboxProps = {
  label: string;
  onChange?: (newValue: checkboxValueType) => void;
  indeterminate?: boolean;
  value?: checkboxValueType;
};

const ATOM_NAME = "cs-checkbox";
export function CSCheckbox({ onChange, value, label }: CSCheckboxProps) {
  const checkboxRef = useRef<HTMLCheckboxElement>(null);

  useEffect(() => {
    if (value === "checked") {
      checkboxRef.current!.checked = true;
      checkboxRef.current!.indeterminate = false;
    } else if (value === "unchecked") {
      checkboxRef.current!.checked = false;
      checkboxRef.current!.indeterminate = false;
    } else if (value === "indeterminate") {
      checkboxRef.current!.checked = false;
      checkboxRef.current!.indeterminate = true;
    }
  }, [value]);

  const handleChange = () => {
    const value = checkboxRef.current!.indeterminate
      ? "indeterminate"
      : checkboxRef?.current!.checked
      ? "checked"
      : "unchecked";
    onChange?.(value);
  };

  return (
    <label className={ATOM_NAME}>
      <span className={`${ATOM_NAME}__container`}>
        <input
          ref={checkboxRef}
          type="checkbox"
          className={`${ATOM_NAME}__control`}
          onChange={handleChange}
        />
        <span className={`${ATOM_NAME}__label`}>{label}</span>
      </span>
    </label>
  );
}
