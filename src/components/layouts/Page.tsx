import { Box } from '@material-ui/core';
import React from 'react';

type Props = React.ComponentProps<typeof Box> & {};

export default function Page({ children, ...rest }: Props) {
  return (
    <Box padding={4} {...rest}>
      {children}
    </Box>
  );
}
