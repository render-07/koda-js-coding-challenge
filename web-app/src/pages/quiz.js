import React, { useEffect, useState } from 'react'
import fetchQuiz from '../api/quiz';
import { Link } from 'react-router-dom'

const Quiz = () => {
  const [quiz, setQuiz] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    const getAllQuiz = async () => {
        if (quiz.length === 0) {
            const asdasd = async () => {
                try {
                    const {data}  = await fetchQuiz();    
                    let newArr = [];
                    data.forEach(element => {
                        newArr.push(element);
                    });
                    setQuiz(newArr);
                } catch (err) {
                    console.log(err);
                }
            }
            asdasd();
        }
      }
    getAllQuiz();
  }, []);

  //console.log(quiz);

  const handleClickAnswer = (answer) => {
    if (quiz.length != 0) {
      if (answer === quiz[currentQuiz].correct_answer) {
        setScore(score + 1);
      }

      console.log(score);

      if (currentQuiz != 9) {  
        const nextQuestion = currentQuiz + 1;
        setCurrentQuiz(nextQuestion);
      } else {
        setShowScore(true);
      }
    } 
  }

  const resetGame = () => {
    setCurrentQuiz(0);
    setScore(0);
    setShowScore(false);
  }

  return (
      <div className='page quiz-home'>
        {showScore ? (<div>
          <h1>Your score is: {score}</h1>
          <button onClick={() => resetGame()}>
          <Link to="/">Play again</Link>
        </button>
        </div>) :
       ( <><div className='page-top'>
            <div className='quiz-logo'></div>
            <h3>{quiz.length != 0 && <p>Category: {quiz[currentQuiz].category}</p>}</h3>
            {quiz.length != 0 && <p>{currentQuiz} of {quiz.length}</p>}
        </div>
        <div className='quiz-body'>
            <h1>{quiz.length != 0 && <p>Difficulty: {quiz[currentQuiz].difficulty}</p>}</h1>
            <h1>{quiz.length != 0 && <p>{quiz[currentQuiz].question}</p>}</h1>
        </div>
        <div className="page-control">
        <button onClick={() => handleClickAnswer("True")}>
          True
        </button>
        <button onClick={() => handleClickAnswer("False")}>
          False
        </button>
      </div></>)}
    </div>
  )
}

export default Quiz
