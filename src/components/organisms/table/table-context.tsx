import React from "react";

type TableContextProps = {
  isSelectable?: boolean;
  setSelectable?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TableContext = React.createContext<TableContextProps>({
  isSelectable: false,
  setSelectable: () => {},
});

export const TableProvider = TableContext.Provider;
