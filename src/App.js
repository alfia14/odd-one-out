import React, { useState, useEffect } from 'react';
import './styles.css'
//import { QiRoboService } from "./services/QIService";
import questions from './components/data';
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [ fact, setFact] = useState(0)

  const handleOptionClick = (option) => {

   
      if (option.correct) {
        setScore(score + 1);
        //handleDialogue("Yes, you got it right!")
      }
      else{
        //handleDialogue("Oops, I see what you thought there.")
      }
   

      //handleDialogue(questions[fact].fact)
      setFact(fact+1)
      // setTimeout(() => {
      
      // setCurrentQuestion(currentQuestion + 1);
      //  }, 7000);

      
       setCurrentQuestion(currentQuestion + 1);
    


    
  }

    //  const  handleDialogue = (text) => {
    //     QiRoboService.onService("ALTextToSpeech", (ALTextToSpeech) => {
    //       ALTextToSpeech.say(text);
    //     });
    // }




    // useEffect(() => {
    
    //     handleDialogue(questions[currentQuestion].question)

    // },[currentQuestion] )

  return (
    <div >
      <div id="question">
      <h1>{questions[currentQuestion].question}</h1>
      </div>

      <div id="answers">
      <ul>
        {questions[currentQuestion].options.map((option, index) => (
          
          <div key={index}>
            
            <p>
            <img src={option.image} onClick={() => handleOptionClick(option)} />
            
            </p>
           
          </div>
          
        ))}
        </ul>
      </div>
      <p>Score: {score}</p>
    </div>
  );
}

export default Quiz;



