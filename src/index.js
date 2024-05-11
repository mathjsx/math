import { useState } from 'react';
import Head from 'next/head';

const questions = [
  {
    id: 1,
    question: "What is the result of $A + B$ where $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 1 & 2 \\\\ 3 & 2 \\end{pmatrix}$?",
    options: [
      "\\begin{pmatrix} 3 & 5 \\\\ 4 & 6 \\end{pmatrix}",
      "\\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}",
      "\\begin{pmatrix} 4 & 6 \\\\ 5 & 6 \\end{pmatrix}",
      "\\begin{pmatrix} 3 & 2 \\\\ 1 & 2 \\end{pmatrix}"
    ],
    correctAnswer: "\\begin{pmatrix} 3 & 5 \\\\ 4 & 6 \\end{pmatrix}"
  },
  {
    id: 2,
    question: "What is the result of $C + D$ where $C = \\begin{pmatrix} 1 & -2 \\\\ -3 & 0 \\end{pmatrix}$ and $D = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$?",
    options: [
      "\\begin{pmatrix} 5 & -1 \\\\ -1 & 3 \\end{pmatrix}",
      "\\begin{pmatrix} -3 & -3 \\\\ -5 & 3 \\end{pmatrix}",
      "\\begin{pmatrix} 2 & -1 \\\\ -1 & 3 \\end{pmatrix}",
      "\\begin{pmatrix} 3 & -2 \\\\ -1 & 3 \\end{pmatrix}"
    ],
    correctAnswer: "\\begin{pmatrix} 5 & -1 \\\\ -1 & 3 \\end{pmatrix}"
  }
];

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <Head>
        <title>Matrix Algebra Quiz</title>
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
      </Head>
      {currentQuestion < questions.length ? (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <div dangerouslySetInnerHTML={{__html: questions[currentQuestion].question}} />
          <form>
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`option${index}`}
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                <label htmlFor={`option${index}`} dangerouslySetInnerHTML={{__html: option}} />
              </div>
            ))}
          </form>
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Complete!</h2>
          <p>Your score: {score} out of {questions.length}</p>
        </div>
      )}
    </div>
  );
}