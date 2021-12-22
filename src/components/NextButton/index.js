import React from 'react';
import { Button } from '@mui/material';
import { useData } from '../../contexts/data';

export default function NextButton({ disabled }) {
  const { amount, counter } = useData();

  function isLastQuestion() {
    if (amount === counter) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Button
      disabled={disabled}
      type="submit"
      variant="contained"
      color={isLastQuestion() ? 'success' : 'primary'}
    >
      {isLastQuestion() ? 'Finalizar' : 'Próxima'}
    </Button>
  );
}
