import { ReactNode } from "react";
import { Box, BoxProps } from "../box/box";

export type CSLableProps = {
  children: ReactNode;
  tooltip?: string;
} & BoxProps;

export function CSLabel({ children, tooltip, ...styleProps }: CSLableProps) {
  const tooltipProps = tooltip ? { title: tooltip } : {};

  return (
    <Box {...tooltipProps} {...styleProps} textTransform="capitalize">
      {children}
    </Box>
  );
}
