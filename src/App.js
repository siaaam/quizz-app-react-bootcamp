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
    setLoaded(true);
  };

  const navigateNextQuiz = () => {
    // make sure you are in last question
    const isLastQuestion = quizzes.length - 1 === selectedQuestionIndex;

    if (isLastQuestion) {
      setEndGame(true);
    } else {
      setSelectedQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedQuestion({
        question: quizzes[selectedQuestionIndex].question,
        answers: shuffle(quizzes[selectedQuestionIndex]),
      });
    }
  };

  const resetQuiz = () => {
    setQuizzes(null);
    setSelectedQuestion(null);
    setSelectedQuestionIndex(0);
    setStartGame(false);
    setLoaded(false);
    setEndGame(false);
  };

  return (
    <div>
      {endGame && <GameOver resetQuiz={resetQuiz} />}
      {startGame && loaded && !endGame && (
        <QuizCard
          selectedQuestion={selectedQuestion}
          navigateNextQuiz={navigateNextQuiz}
        />
      )}
      {!startGame && <button onClick={startQuizCard}>Start Game</button>}
    </div>
  );
}

export default App;
