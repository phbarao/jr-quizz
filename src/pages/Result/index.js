import React from 'react';
import { Container, Typography } from '@mui/material';
import { useData } from '../../contexts/data';

export default function Result() {
  const { amount, score } = useData();

  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h6">{`Você acertou ${score} das ${amount} questões respondidas.`}</Typography>
    </Container>
  );
}
