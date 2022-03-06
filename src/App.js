import { useState } from 'react';
import './App.css';
import QuizCard from './QuizCard';
import GameOver from './GameOver';
import shuffle from './Utilities';

function App() {
  const [quizzes, setQuizzes] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [startGame, setStartGame] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [gameScore, setGameScore] = useState(0);

  const startQuizCard = async () => {
    const res = await fetch(
      'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple'
    );

    const { results } = await res.json();

    setQuizzes(results);
    setStartGame(true);
    setSelectedQuestion({
      question: results[0].question,
      answers: shuffle(results[0]),
    });
    setCorrectAnswer(results[0].correct_answer);
    setLoaded(true);
  };

  const navigateNextQuiz = () => {
    // make sure you are in last question
    const isLastQuestion = quizzes.length - 1 === selectedQuestionIndex;

    if (isLastQuestion) {
      setEndGame(true);
    } else {
      const currentIndex = selectedQuestionIndex + 1;
      setSelectedQuestionIndex(currentIndex);
      setSelectedQuestion({
        question: quizzes[currentIndex].question,
        answers: shuffle(quizzes[currentIndex]),
      });
      setCorrectAnswer(quizzes[currentIndex].correct_answer);
      setSelectedAnswer(null);
    }
  };

  const resetQuiz = () => {
    setQuizzes(null);
    setSelectedQuestion(null);
    setSelectedQuestionIndex(0);
    setStartGame(false);
    setLoaded(false);
    setEndGame(false);
    setGameScore(0);
  };

  const selectAnswer = (answer) => {
    setSelectedAnswer(answer);
    // is correct ans selected?

    // score updater function
    if (answer === correctAnswer) {
      // upgrade score
      setGameScore((prevScore) => prevScore + 1);
    }
    console.log(gameScore);
  };

  return (
    <div className="container">
      {endGame && <GameOver gameScore={gameScore} resetQuiz={resetQuiz} />}
      {startGame && loaded && !endGame && (
        <QuizCard
          selectedAnswer={selectedAnswer}
          correctAnswer={correctAnswer}
          selectAnswer={selectAnswer}
          quizzes={quizzes}
          selectedQuestionIndex={selectedQuestionIndex}
          selectedQuestion={selectedQuestion}
          navigateNextQuiz={navigateNextQuiz}
        />
      )}
      {!startGame && <button onClick={startQuizCard}>Start Game</button>}
    </div>
  );
}

export default App;
