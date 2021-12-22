import { Container } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { InputField, FullButton } from '../../components';

export default function Landing() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/start');
  };

  return (
    <Container
      sx={{
        height: '100vh',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form onSubmit={handleSubmit}>
        <InputField label="Quantas questões deseja responder?" />

        <FullButton text="prosseguir" />
      </form>
    </Container>
  );
}
