import { useState } from 'react';
import './App.css';
// import React, { useState } from 'react';

function App() {

  // // const [value1, setV1] = useState('');
  // // const [value2, setV2] = useState('');
  
  // let val1 = getRandomInt(999);
  // let val2 = getRandomInt(999);
  // // let result = val1 + val2;
  // let record = 0;

  // function getRandomInt(num){
  //   return Math.floor(Math.random()*num);
  // }

  // function myRecord(){
  //   if(val1<val2){
  //     record++;
  //   } else {
  //     record--;
  //   }
  //   console.log(val1);
  // }

  // function test(){
  //   getRandomInt();
  //   val1 = getRandomInt(999);
  //   val2 = getRandomInt(999);
  //   myRecord();
  //   console.log(val1+val2);
  //   return val1+val2;
  // }

//---------------------------------------
  // const [minVal, setMinVal] = useState(0);
  // const [maxVal, setMaxVal] = useState(10);
  // const [randomNum, setRandomNum] = useState(5);

  // const handleRandomNum = () => {
  //   setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal))
  // }

  // return(
  //   <div className="App"> 
  //     <div className='container'>
  //       <div className='randomNum'>
  //         <p>Random number <span> {randomNum} </span></p>
  //       </div>
  //       <div className='numContainer'>
  //         <div>
  //           <p>Min: </p>
  //           <input type="number" value={minVal} onChange={e => setMinVal(e.target.value)}/>
  //         </div>
  //         <div>
  //           <p>Max: </p>
  //           <input type="number" value={maxVal} onChange={e => setMaxVal(e.target.value)}/>
  //         </div>
  //       </div>
  //       <button onClick={handleRandomNum}>Get random number</button>
  //     </div>
  //   </div>
  // );
  //------------------------------------
  //------------------------------------
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [randomNum, setRandomNum] = useState(999);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [myAnswer, setMyAnswer] = useState(0);



  const handleRandomNum = () => {
    setNum1(Math.floor(Math.random()*999));
    setNum2(Math.floor(Math.random()*999));
    setCorrectAnswer(num1+num2);
    setRandomNum(Math.floor(Math.random()*999));
    console.log(correctAnswer);
    checkAnswer();
  }

  const checkAnswer = () => {
    console.log(correctAnswer);
    if (correctAnswer == myAnswer) {
      console.log("ok");
    } else {
      console.log("naaah");
    }
  }

  return(
    <div className="App"> 
      <div className='container'>
        <div className='randomNum'>
          <p>Find the answer -&gt; <span> {num1 + " + " + num2} </span></p>
        </div>
        <div className='numContainer'>
          <div>
            <p>Answer: </p>
            {/* <input type="number"/> */}
            <input type="number" value={myAnswer} onChange={e => setMyAnswer(e.target.value)}/>
          </div>
        </div>
        {/* <button onClick={checkAnswer}>Answer</button> */}
        <button onClick={handleRandomNum}>Next</button>
      </div>
    </div>
  );
  //------------------------------------

  // //-----PAGE (MY VESION)-----
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <p> Equation: <br></br> {val1+"+"+val2}</p>
  //       <div className="answers">
  //         <input className='answer' placeholder='answer'></input>
  //       </div>
  //       <button type="button" onClick={test}>Submit</button>
  //     </header>
  //   </div>
  // );
  // //-----PAGE-----

}

export default App;
