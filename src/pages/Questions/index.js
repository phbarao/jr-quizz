import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { decode } from 'html-entities';
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
import { isLastQuestion } from '../../utils';

export default function Questions() {
  const [questionsList, setQuestionsList] = useState([]);
  const [currentOptions, setCurrentOptions] = useState({});
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState('');
  const [helperText, setHelperText] = useState('Choose one option.');

  const { amount, currentIndex, setCurrentIndex, score, setScore } = useData();
  const history = useHistory();

  function handleRadioChange(e) {
    setSelected(e.target.value);
    setHelperText('');
  }

  function handleNext() {
    setCurrentIndex(currentIndex + 1);

    if (selected === questionsList[currentIndex].correct_answer) {
      setScore(score + 1);
    }

    if (isLastQuestion(amount, currentIndex)) {
      history.push('/result');
    } else {
      setSelected('');
      setCurrentOptions([
        ...questionsList[currentIndex + 1].incorrect_answers,
        questionsList[currentIndex + 1].correct_answer,
      ]);
    }
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
      {loading ? (
        <LoadingSpinner />
      ) : (
        <form>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend" variant="h5">
              <Typography variant="h4">
                {decode(questionsList[currentIndex].question)}
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

              <NextButton disabled={selected === ''} onClick={handleNext} />
            </Box>
          </FormControl>
        </form>
      )}
    </Container>
  );
}
