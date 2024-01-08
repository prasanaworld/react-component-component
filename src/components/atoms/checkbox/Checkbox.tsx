import { ReactNode, useEffect, useRef } from "react";
import "./checkbox.scss";
import { Box } from "../box/box";

interface HTMLCheckboxElement extends HTMLInputElement {
  checked: boolean;
  indeterminate: boolean;
}

export type checkboxValueType = "checked" | "unchecked" | "indeterminate";

export type CSCheckboxProps = {
  children: ReactNode;
  onChange?: (newValue: checkboxValueType) => void;
  indeterminate?: boolean;
  value?: checkboxValueType;
};

const ATOM_NAME = "cs-checkbox";
export function CSCheckbox({ onChange, value, children }: CSCheckboxProps) {
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
    <Box as="label" className={ATOM_NAME}>
      <Box as="span" className={`${ATOM_NAME}__container`}>
        <input
          ref={checkboxRef}
          type="checkbox"
          className={`${ATOM_NAME}__control`}
          onChange={handleChange}
        />
        <Box as="span" className={`${ATOM_NAME}__label`}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
