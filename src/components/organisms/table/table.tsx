import { memo, useState } from "react";
import { CSTableRow, CSTableRowProps } from "./row/row";
import { CSTableHeader } from "./header/header";
import { CSTableCell } from "./cell/cell";
import { Box, BoxStyleProps } from "../../atoms/box/box";
import "./style.scss";
import { TableProvider } from "./table-context";

export type TableProps = {
  children: Array<
    React.ReactElement<CSTableRowProps, React.FunctionComponent> | false | null
  >;
} & BoxStyleProps;

export const ORGANISM_NAME = "cs-table";
export function CSTable({ children, ...styleProps }: TableProps) {
  const [isSelectable, setSelectable] = useState<boolean>(false);

  return (
    <TableProvider
      value={{
        isSelectable,
        setSelectable,
      }}
    >
      <Box as="table" width={"100%"} className={ORGANISM_NAME} {...styleProps}>
        {children}
      </Box>
    </TableProvider>
  );
}

CSTable.Row = memo(CSTableRow);
CSTable.Header = memo(CSTableHeader);
CSTable.Cell = memo(CSTableCell);
