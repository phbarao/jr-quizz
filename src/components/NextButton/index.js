import React from 'react';
import { Button } from '@mui/material';
import { useData } from '../../contexts/data';
import { isLastQuestion } from '../../utils/is-last-question';

export default function NextButton({ disabled, onClick }) {
  const { amount, currentIndex } = useData();

  return (
    <Button
      type="button"
      disabled={disabled}
      variant="contained"
      color={isLastQuestion(amount, currentIndex) ? 'success' : 'primary'}
      onClick={onClick}
    >
      {isLastQuestion(amount, currentIndex) ? 'Finalizar' : 'Próxima'}
    </Button>
  );
}
