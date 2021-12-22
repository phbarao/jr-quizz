import { FormControl, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import { useData } from '../../contexts/data';

export default function TextFieldComp({ label }) {
  const { setAmount } = useData();

  const handleChange = (e) => {
    setAmount(Number(e.target.value));
  };

  return (
    <Box sx={{ width: '60vw', minWidth: '300px' }}>
      <FormControl fullWidth size="small">
        <TextField
          onChange={handleChange}
          variant="outlined"
          label={label}
          type="number"
          size="small"
          sx={{ marginBottom: '10px' }}
        />
      </FormControl>
    </Box>
  );
}
