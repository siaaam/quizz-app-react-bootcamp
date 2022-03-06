const GameOver = ({ resetQuiz, gameScore }) => {
  return (
    <div>
      <p>total score {gameScore}</p>
      <button onClick={resetQuiz}>reset quiz</button>
    </div>
  );
};

export default GameOver;
