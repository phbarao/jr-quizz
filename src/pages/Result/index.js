import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { useData } from '../../contexts/data';

export default function Result() {
  const { amount, score, session } = useData();

  useEffect(() => {
    localStorage.setItem('lastResult', JSON.stringify({ session, score }));
  }, []);

  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h6">{`Você acertou ${score} das ${amount} questões respondidas.`}</Typography>
    </Container>
  );
}
