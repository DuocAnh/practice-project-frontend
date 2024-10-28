import { useState , useCallback } from "react"

import Question from "./Question.jsx"
import Summary from "./Summary.jsx"

import QUESTIONS from '../questions.js'

export default function Quiz() {
  const [answerState, setAnswerState] = useState('')
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length -1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setAnswerState('answered')
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer]
    });

    setTimeout(() => {
      if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
        setAnswerState('correct');
      } else {
        setAnswerState('wrong');
      }
    }, 1000)

    setTimeout(() => {
      setAnswerState('');
    },2000);
  }, [activeQuestionIndex])

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <Summary
        userAnswers={userAnswers}
      />
    );
  }
  
  return (
  <div id="quiz">
    <Question 
      key={activeQuestionIndex}
      index={activeQuestionIndex}
      onSelectAnswer={handleSelectAnswer}
      onSkipAnswer={handleSkipAnswer}
    />
  </div>
  );
}