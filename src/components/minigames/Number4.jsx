import React from 'react'
import './Number1.css';
import { useState } from 'react'
import { useHistory } from "react-router-dom";

function Number4(){
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const [randomNumber1, setRandomNumber1] = useState(random(1000,10000))
    const [pvalue, setPValue] = useState(0)
    let history = useHistory();
    console.log(randomNumber1)
function check(){
        console.log(pvalue)
        if (pvalue == randomNumber1){
            console.log("good")
           return history.push("/number5");
        }
        else {
            console.log("bad")
            return history.push("/number1");
        }

    }
function level(){
        setRandomNumber1(random(1000,10000))
}

return(

    <div>   
        <h1 className="game-title">Number Memory</h1>
        <div className="game">
            <div className="game-container">
            <button id="start-button" type="button" onClick={level}> Start </button>
                <div className="game-number">
                {randomNumber1}
                </div>
                <input onChange={event => setPValue(event.target.value)} id="verifiedInput" type="number"></input>
                <button id="game-button" type="button" onClick={check}> Vérifier</button>
            </div>
        </div>
        <p></p>
    </div>
)

}

export default Number4