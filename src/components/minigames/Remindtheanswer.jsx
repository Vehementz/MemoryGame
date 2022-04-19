import React from 'react'
import { useHistory } from "react-router-dom";
import './Remindtheanswer.css'


function Remindtheanswer() {
const level1=
[
    {
      id: 1,
      phrase: "Le cheval de Henry IV était blanc ",
      question: "De quelle couleur était le cheval ?",
      proposition1: "Rouge",
      proposition2: "Bleu",
      reponse: "Blanc",
      level: 1
    },
    {
      id: 2,
      phrase: "Le cheval de Henry IV était marron ",
      question: "De quelle couleur était le cheval ? " ,
      proposition1: "Rouge",
      proposition2: "Bleu",
      reponse: "Marron",
      level: 1
    },
    {
        id: 3,
        phrase: "Le cheval de Henry IV était vert ",
        question: "De quelle couleur était le cheval ? ",
        proposition1: "Bleu",
        proposition2: "Rouge",
        reponse: "Vert",
        level: 1
      }
]
const randomQuestion = level1[Math.floor(Math.random() * level1.length )]

    let history = useHistory();
    function good(){
        return history.push("/remindtheanswer2")
    }
    function bad(){
        return history.push("/remindtheanswer")
    }
    console.log(randomQuestion.reponse)
    return (
        <div>
            <p className="firstQuestion">{randomQuestion.phrase}</p>
            <h4 className="firstPhrase">{randomQuestion.question}</h4>
            <div className="buttonContainer">
            <button className="firstanswerbutton" onClick={bad}>{randomQuestion.proposition1}</button>
            <button className="firstanswerbutton" onClick={bad}>{randomQuestion.proposition2}</button>
            <button className="firstanswerbutton" onClick={good}>{randomQuestion.reponse}</button>
            </div>
        </div>
    )
}

export default Remindtheanswer
