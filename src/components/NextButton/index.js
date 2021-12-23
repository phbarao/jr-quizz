import React from 'react';
import { Button } from '@mui/material';
import { useData } from '../../contexts/data';

export default function NextButton({ disabled, onClick }) {
  const { amount, currentIndex } = useData();

  function isLastQuestion() {
    if (currentIndex + 1 === amount) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Button
      disabled={disabled}
      variant="contained"
      color={isLastQuestion() ? 'success' : 'primary'}
      onClick={onClick}
    >
      {isLastQuestion() ? 'Finalizar' : 'Próxima'}
    </Button>
  );
}
