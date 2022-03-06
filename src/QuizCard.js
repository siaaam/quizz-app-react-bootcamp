import AnswersCard from './AnswersCard';
const QuizCard = ({
  selectedQuestion,
  navigateNextQuiz,
  selectAnswer,
  selectedAnswer,
  correctAnswer,
}) => {
  //   console.log(selectedQuestion);

  const { question, answers } = selectedQuestion;

  const navigateNext = () => {
    navigateNextQuiz();
  };

  //   console.log(question, answers);

  return (
    <div>
      <h2>{question}</h2>
      {answers.map((ans, i) => (
        <AnswersCard
          selectAnswer={selectAnswer}
          key={i}
          ans={ans}
          selectedAnswer={selectedAnswer}
          correctAnswer={correctAnswer}
        />
      ))}
      <button onClick={navigateNext}>Next Question</button>
    </div>
  );
};

export default QuizCard;
