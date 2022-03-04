import AnswersCard from './AnswersCard';
const QuizCard = ({ selectedQuestion, navigateNextQuiz }) => {
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
        <AnswersCard key={i} ans={ans} />
      ))}
      <button onClick={navigateNext}>Next Question</button>
    </div>
  );
};

export default QuizCard;