import { Box, BoxProps } from "../box/box";
import "./hstack.scss";

export function Flex({ children, ...rest }: BoxProps) {
  return (
    <Box display="flex" {...rest}>
      {children}
    </Box>
  );
}
