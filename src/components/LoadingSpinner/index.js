import React from 'react';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

export default function LoadingSpinner() {
  return (
    <Box
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
