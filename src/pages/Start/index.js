import { Container } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useData } from '../../contexts/data';
import { FullButton } from '../../components';

export default function Start() {
  const { setAmount } = useData();
  const history = useHistory();

  function handleStart() {
    history.push('/questions');
  }

  function handleCancel() {
    setAmount(0);
    history.push('/');
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
      }}
    >
      <FullButton text="Start" color="success" onClick={handleStart} />
      <FullButton text="Cancel" color="error" onClick={handleCancel} />
    </Container>
  );
}
