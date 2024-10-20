import React from 'react';

const Score = ({ score, total }) => {
  return (
    <div className="score-container">
      <h1>Quiz Finished!</h1>
      <p>
        You scored {score} out of {total}.
      </p>
      <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
  );
};

export default Score;
