const GameOver = ({ resetQuiz, gameScore }) => {
  return (
    <div>
      total score {gameScore}
      <br />
      <button onClick={resetQuiz}>reset quiz</button>
    </div>
  );
};

export default GameOver;
