import { useCallback, useContext, useEffect } from "react";
import { Box, BoxStyleProps } from "../../../atoms/box/box";
import {
  CSCheckbox,
  checkboxValueType,
} from "../../../atoms/checkbox/Checkbox";
import { CSTableCell, CSTableCellProps } from "../cell/cell";
import { CSTableHeader, CSTableHeaderProps } from "../header/header";
import { ORGANISM_NAME } from "../table";
import { TableContext } from "../table-context";

export type CSTableRowProps = {
  children: Array<
    | React.ReactElement<CSTableCellProps, React.FunctionComponent>
    | React.ReactElement<CSTableHeaderProps, React.FunctionComponent>
    | null
    | boolean
  >;
  ariaLabel?: string;
  isHeader?: boolean;
  isSelectable?: boolean;
  isChecked?: boolean;
  name?: string;
  onSelected?: (isSelected: boolean) => void;
} & BoxStyleProps;

export function CSTableRow({
  children,
  onSelected,
  ariaLabel,
  name,
  isHeader = false,
  isSelectable = false,
  isChecked = false,
  ...styleProps
}: CSTableRowProps) {
  const tableContext = useContext(TableContext);

  const isHeaderClassName = isHeader ? `${ORGANISM_NAME}__row--header` : "";

  const handleChange = useCallback(
    (value: checkboxValueType) => {
      if (onSelected) {
        const selectedState = value === "checked" ? true : false;
        onSelected?.(selectedState);
      }
    },
    [onSelected]
  );

  useEffect(() => {
    if (isSelectable) {
      tableContext?.setSelectable?.(true);
    } else {
      tableContext?.setSelectable?.(false);
    }
  }, [isSelectable, tableContext]);

  const selectedCheckBox = isSelectable ? (
    <CSTableCell className={`${ORGANISM_NAME}__selectable-cell`}>
      <CSCheckbox
        elementProps={{ "aria-label": ariaLabel }}
        value={isChecked ? "checked" : "unchecked"}
        onChange={handleChange}
        dataTestId={`row-${name ?? ""}`}
      >
        {" "}
      </CSCheckbox>
    </CSTableCell>
  ) : isHeader && tableContext.isSelectable ? (
    <CSTableHeader className={`${ORGANISM_NAME}__header-empty`}></CSTableHeader>
  ) : null;

  return (
    <Box
      as="tr"
      className={`${ORGANISM_NAME}__row ${isHeaderClassName}`}
      {...styleProps}
    >
      {selectedCheckBox}
      {children}
    </Box>
  );
}
