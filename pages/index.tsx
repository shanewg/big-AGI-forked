import * as React from 'react';

import Link from 'next/link';
import { Box, Typography  } from '@mui/material';
import { Button } from '@mui/joy';

import { withNextJSPerPageLayout } from '~/common/layout/withLayout';

export default withNextJSPerPageLayout({ type: 'noop' }, () => {
  
  return (
    <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    minHeight="100vh"
    textAlign="center"
  >
    <Box>
        <Typography variant="h1">Welcome to Our Homepage</Typography>
        <Typography variant="body1">
          This is the homepage content. You can add more information here.
        </Typography>
        <Link href="/dashboard" passHref>
          <Button
            variant="solid"
            color="primary"
            sx={{ mt: 2 }}
          >
            Go to Dashboard
          </Button>
        </Link>
      </Box>
  </Box>
  );
});