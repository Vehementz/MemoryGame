import React from 'react'
import { useHistory } from "react-router-dom";
import './Remindtheanswer.css'


function Remindtheanswer3() {

const level3=
[
    {
        id: 1,
        phrase: "CHIEN VOITURE ESCALIER JOURNAL TABOURET INSPECTEUR CORBEILLE JONQUILLE CERISE ALLUMETTE",
        question: "Quel était le mot avant CERISE ?",
        proposition1: "CORBEILLE",
        proposition2: "INSPECTEUR",
        reponse: "JONQUILLE",
        level: 3
    },
    {
        id: 2,
        phrase: "CHIEN VOITURE ESCALIER JOURNAL TABOURET INSPECTEUR CORBEILLE JONQUILLE CERISE ALLUMETTE",
        question: "Quel était le 6ème mot de la liste ?" ,
        proposition1: "CORBEILLE",
        proposition2: "JONQUILLE",
        reponse: "INSPECTEUR",
        level: 3
    },
    {
        id: 3,
        phrase: "CHIEN VOITURE ESCALIER JOURNAL TABOURET INSPECTEUR CORBEILLE JONQUILLE CERISE ALLUMETTE",
        question: "Quel était le 7 ème mot en partant de la fin ?",
        proposition1: "CHIEN",
        proposition2: "TABOURET",
        reponse: "JOURNAL",
        level: 3
      }
]
const randomQuestion = level3[Math.floor(Math.random() * level3.length )]

    let history = useHistory();
    function good(){
        return history.push("/minigame")
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
            <button className="answerbutton" onClick={bad}>{randomQuestion.proposition1}</button>
            <button className="answerbutton" onClick={good}>{randomQuestion.reponse}</button>
            <button className="answerbutton" onClick={bad}>{randomQuestion.proposition2}</button>
           
            </div>
        </div>
    )
}

export default Remindtheanswer3
