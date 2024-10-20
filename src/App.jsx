import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';

// Dummy data (you can replace this with an API call if needed)
const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    answer: 'Paris'
  },
  {
    question: 'Who wrote "Hamlet"?',
    options: ['Charles Dickens', 'William Shakespeare', 'J.K. Rowling', 'Leo Tolstoy'],
    answer: 'William Shakespeare'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Venus', 'Mars', 'Jupiter'],
    answer: 'Mars'
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
    answer: 'Pacific Ocean'
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
    answer: 'Leonardo da Vinci'
  },
  {
    question: 'What is the smallest prime number?',
    options: ['1', '2', '3', '5'],
    answer: '2'
  },
  {
    question: 'What is the chemical symbol for water?',
    options: ['O2', 'H2O', 'CO2', 'NaCl'],
    answer: 'H2O'
  },
  {
    question: 'Which country is home to the kangaroo?',
    options: ['India', 'Australia', 'South Africa', 'Canada'],
    answer: 'Australia'
  },
  {
    question: 'Who is the author of "1984"?',
    options: ['George Orwell', 'Aldous Huxley', 'J.D. Salinger', 'F. Scott Fitzgerald'],
    answer: 'George Orwell'
  },
  {
    question: 'Which element is the most abundant in the Earth’s atmosphere?',
    options: ['Oxygen', 'Hydrogen', 'Nitrogen', 'Carbon Dioxide'],
    answer: 'Nitrogen'
  },
  {
    question: 'Which country hosted the 2016 Summer Olympics?',
    options: ['China', 'Brazil', 'Greece', 'USA'],
    answer: 'Brazil'
  },
  {
    question: 'Which famous scientist developed the theory of general relativity?',
    options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Marie Curie'],
    answer: 'Albert Einstein'
  },
  {
    question: 'In which year did World War I begin?',
    options: ['1914', '1918', '1939', '1945'],
    answer: '1914'
  },  
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Function to handle the answer submission
  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className="App">
      {isFinished ? (
        <Score score={score} total={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default App;

