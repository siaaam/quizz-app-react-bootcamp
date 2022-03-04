const GameOver = ({ resetQuiz }) => {
  return (
    <div>
      total score 10 game over
      <button onClick={resetQuiz}>reset quiz</button>
    </div>
  );
};

export default GameOver;
