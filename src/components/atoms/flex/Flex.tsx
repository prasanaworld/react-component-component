import { Box, BoxProps } from "../box/box";

export function Flex({ children, ...rest }: BoxProps) {
  return (
    <Box display="flex" {...rest}>
      {children}
    </Box>
  );
}
