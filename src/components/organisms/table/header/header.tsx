import { Box } from "../../../atoms/box/box";
import { ORGANISM_NAME } from "../table";
import { CSTableCellProps } from "../cell/cell";

export type CSTableHeaderProps = CSTableCellProps;

export function CSTableHeader({
  children,
  className = "",
  ...styleProps
}: CSTableHeaderProps) {
  return (
    <Box
      as="th"
      className={`${ORGANISM_NAME}__cell ${ORGANISM_NAME}__header-cell ${className}`}
      {...styleProps}
    >
      {children}
    </Box>
  );
}
