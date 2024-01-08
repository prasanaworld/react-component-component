import { ReactNode } from "react";
import { Box, BoxStyleProps } from "../../../atoms/box/box";
import { ORGANISM_NAME } from "../table";

export type CSTableCellProps = {
  children?: ReactNode;
  className?: string;
} & BoxStyleProps;

export function CSTableCell({
  children,
  className = "",
  ...styleProps
}: CSTableCellProps) {
  return (
    <Box
      as="td"
      className={`${ORGANISM_NAME}__cell ${className}`}
      {...styleProps}
    >
      {children}
    </Box>
  );
}
