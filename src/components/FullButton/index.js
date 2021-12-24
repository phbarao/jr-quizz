import React from 'react';
import { Button } from '@mui/material';
import { useData } from '../../contexts/data';

export default function FullButton({ text, color, onClick }) {
  const { amount } = useData();

  return (
    <Button
      type="submit"
      disabled={amount <= 0}
      sx={{ width: '60vw', minWidth: '300px' }}
      color={color}
      variant="contained"
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
