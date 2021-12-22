import { useEffect, useState } from 'react';
import { decode } from 'html-entities';
// import { get } from 'axios';
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
import { useData } from '../../contexts/data';
import { NextButton, LoadingSpinner } from '../../components';
import { useApi } from '../../hooks/useApi';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export default function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answers, setCurrentAnswers] = useState([]);
  const [helperText, setHelperText] = useState('Choose at least one option.');
  const [value, setValue] = useState('');

  const { amount, counter, setCounter, score, setScore } = useData();
  const { response, loading } = useApi({ url });
  const history = useHistory();

  let url = `/api.php?amount=${amount}`;

  function handleSubmit(e) {
    e.preventDefault();
    // setLoading(true);

    if (currentQuestion.correct.toString() === value) {
      setScore(score + 1);
      setValue('');
    }

    if (counter >= amount) {
      history.push('/result');
    }

    setCounter(counter + 1);
  }

  useEffect(() => {
    async function loadQuestions() {
      // const data = await api.get('/api.php?amount=1');
      const question = data.data.results[0].question;
      const correct = data.data.results[0].correct_answer;
      const incorrects = data.data.results[0].incorrect_answers;
      const answers = [...incorrects, correct];

      setCurrentQuestion({
        question: question,
        correct: correct,
      });

      setCurrentAnswers(answers);
      setHelperText('Choose at least one option.');
      setLoading(false);
    }

    loadQuestions();
  }, [counter]);

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
      {loading ? (
        <LoadingSpinner />
      ) : (
        <form onSubmit={handleSubmit}>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend" variant="h5">
              <Typography variant="h4">
                {decode(currentQuestion.question)}
              </Typography>
            </FormLabel>

            <RadioGroup
              aria-label="quiz"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              {answers.map((item, index) => (
                <Box key={item}>
                  <FormControlLabel
                    value={decode(item)}
                    control={<Radio />}
                    label={decode(item)}
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
              <NextButton disabled={value === ''} />
            </Box>
          </FormControl>
        </form>
      )}
    </Container>
  );
}
