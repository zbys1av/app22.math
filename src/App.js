import { useState } from 'react';
import './App.css';
// import React, { useState } from 'react';

function App() {

  const sbtn = document.getElementById("startBtn");
  const abtn = document.getElementById("answerBtn");
  const nbtn = document.getElementById("nextBtn");
  const answr = document.getElementById("myAnswer");
  
  let actions = ['*','+','-'];
  let ranact = actions[Math.floor(Math.random() * actions.length)];

  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [randomNum, setRandomNum] = useState(999);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [myAnswer, setMyAnswer] = useState(0);

  window.onload = function() {
    setNum1(Math.floor(Math.random()*10));
    setNum2(Math.floor(Math.random()*10));
    setCorrectAnswer(parseInt(num1+ranact+num2));
  };

  const handleRandomNum = () => {
    setNum1(Math.floor(Math.random()*10));
    setNum2(Math.floor(Math.random()*10));
    // setCorrectAnswer(parseInt(num1+ranact+num2));
    setRandomNum(Math.floor(Math.random()*999));
  }

  const startGame = () => {
    setCorrectAnswer(parseInt(num1+ranact+num2));
    sbtn.style.visibility = "hidden";
    abtn.style.visibility = "visible";
    nbtn.style.visibility = "visible";
    answr.style.visibility = "visible";
  }

  const checkAnswer = () => {
    // setCorrectAnswer(parseInt(num1+ranact+num2));
    console.log(correctAnswer);
    if (correctAnswer == myAnswer) {
      console.log("ok");
    } else {
      console.log("naaah");
    }
    // answr.value = 0;
    console.log(parseInt(num1+ranact+num2));
  }

  return(
    <div className="App"> 
      <div className='container'>
        <div className='randomNum'>
          <p>Find the answer -&gt; <span> {num1+ranact+num2} </span></p>
        </div>
        <div className='numContainer'>
          <div>
            <p>Answer: </p>
            <input type="number" id="myAnswer" value={myAnswer} onChange={e => setMyAnswer(e.target.value)}/>
          </div>
        </div>
        <button onClick={startGame} id="startBtn">Start</button>
        <button onClick={checkAnswer} id="answerBtn">Answer</button>
        <button onClick={handleRandomNum} id="nextBtn">Next</button>
      </div>
    </div>
  );
}

export default App;
