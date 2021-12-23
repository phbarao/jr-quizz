import { useEffect, useState } from 'react';
import { decode } from 'html-entities';
import { useHistory } from 'react-router-dom';
import { Box } from '@mui/system';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormHelperText,
  FormLabel,
  Divider,
  Container,
  Typography,
} from '@mui/material';
import api from '../../services/api';
import { useData } from '../../contexts/data';
import { NextButton, LoadingSpinner } from '../../components';

export default function Questions() {
  const [questionsList, setQuestionsList] = useState([]);
  const [currentOptions, setCurrentOptions] = useState();
  const [helperText, setHelperText] = useState('Choose one option.');
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState('');

  const { amount, currentIndex, setCurrentIndex, score, setScore } = useData();
  const history = useHistory();

  const handleRadioChange = (e) => {
    setSelected(e.target.value);
    setHelperText('');
  };

  function handleNext() {
    const correctAnswer = questionsList[currentIndex].correct_answer;

    if (selected === correctAnswer) {
      setScore(score + 1);
    }

    if (currentIndex + 1 === amount) {
      history.push('/result');
    }

    setCurrentIndex(currentIndex + 1);
    setSelected('');
  }

  useEffect(() => {
    async function loadQuestions() {
      const data = await api.get(`/api.php?amount=${amount}`);
      const correct = data.data.results[currentIndex].correct_answer;
      const incorrects = data.data.results[currentIndex].incorrect_answers;

      setQuestionsList(data.data.results);

      setCurrentOptions([...incorrects, correct]);
      setLoading(false);
    }

    loadQuestions();
  }, []);

  return (
    <Container
      style={{
        height: '100vh',
        maxWidth: '60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>{`currentIndex: ${currentIndex}`}</p>
        <p>{`amount: ${amount}`}</p>
        <p>{`score: ${score}`}</p>
        <p>{`selected: ${selected}`}</p>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <form>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend" variant="h5">
              <Typography variant="h4">
                {questionsList[currentIndex].question}
              </Typography>
            </FormLabel>

            <RadioGroup
              aria-label="quiz"
              name="quiz"
              value={selected}
              onChange={handleRadioChange}
            >
              {currentOptions.map((item) => (
                <Box key={item}>
                  <FormControlLabel
                    value={item}
                    control={<Radio />}
                    label={item}
                  />

                  <Divider />
                </Box>
              ))}
            </RadioGroup>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '15px',
              }}
            >
              <FormHelperText>{helperText}</FormHelperText>

              <NextButton disabled={selected === ''} onClick={handleNext} />
            </Box>
          </FormControl>
        </form>
      )}
    </Container>
  );
}
