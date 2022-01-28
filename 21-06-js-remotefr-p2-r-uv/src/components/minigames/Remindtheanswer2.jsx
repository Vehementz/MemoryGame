import React from 'react'
import { useHistory } from "react-router-dom";
import './Remindtheanswer.css'


function Remindtheanswer2() {

const level2=
[
    {
        id: 1,
        phrase: "CHIEN VOITURE ESCALIER JOURNAL TABOURET INSPECTEUR",
        question: "Quel était le mot avant VOITURE ?",
        proposition1: "ESCALIER",
        proposition2: "TABOURET",
        reponse: "CHIEN",
        level: 2
    },
    {
        id: 2,
        phrase: "CHIEN VOITURE ESCALIER JOURNAL TABOURET INSPECTEUR",
        question: "Quel était le mot avant JOURNAL" ,
        proposition1: "CHIEN",
        proposition2: "INSPECTEUR",
        reponse: "ESCALIER",
        level: 2
    },
    {
        id: 3,
        phrase: "CHIEN VOITURE ESCALIER JOURNAL TABOURET INSPECTEUR",
        question: "Quel était le mot entre VOITURE et JOURNAL",
        proposition1: "CHIEN",
        proposition2: "TABOURET",
        reponse: "ESCALIER",
        level: 2
      }
]
const randomQuestion = level2[Math.floor(Math.random() * level2.length )]

    let history = useHistory();
    function good(){
        return history.push("/remindtheanswer3")
    }
    function bad(){
        return history.push("/remindtheanswer")
    }
    console.log(randomQuestion.reponse)
    return (
        <div>
            <p className="question-text">{randomQuestion.phrase}</p>
            <h4 className="question">{randomQuestion.question}</h4>
            <div className="buttonContainer">
            <button className="answerbutton" onClick={good}>{randomQuestion.reponse}</button>
            <button className="answerbutton" onClick={bad}>{randomQuestion.proposition1}</button>
            <button className="answerbutton" onClick={bad}>{randomQuestion.proposition2}</button>
            </div>
        </div>
    )
}

export default Remindtheanswer2
