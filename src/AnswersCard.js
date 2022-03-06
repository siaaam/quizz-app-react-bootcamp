const AnswersCard = ({ ans, selectAnswer, selectedAnswer, correctAnswer }) => {
  //   console.log(ans);
  const isRightAnswer = selectedAnswer && ans === correctAnswer;
  const isWrongAnswer = selectedAnswer && ans !== correctAnswer;
  const correctClass = isRightAnswer ? 'correct-answer' : '';
  const wrongClass = isWrongAnswer ? 'incorrect-answer' : '';
  const disableClass = selectedAnswer ? 'disabled-answer' : '';

  return (
    <div>
      <p
        className={`${correctClass} ${disableClass} ${wrongClass}`}
        onClick={() => selectAnswer(ans)}
      >
        {ans}
      </p>
    </div>
  );
};

export default AnswersCard;
