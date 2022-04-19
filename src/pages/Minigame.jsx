import React from 'react'
import { useHistory } from "react-router-dom";
import "./Minigame.css"

function Minigame() {
  let history = useHistory();

  function number() {
    history.push("/number1");
  }

  function answer(){
    history.push("/remindtheanswer")
  }

    return (
        <div className="start-container">
            <div className="start-button">
              <h3 className="rules-title">Number Memory</h3>
              <span className="rules"><strong>Règle :</strong> Vous allez voir apparaître un ou plusieurs chiffre(s), vous devrez les réécrire pour passer au niveau suivant, bonne chance !</span>
              <span className="rules"><strong>Attention :</strong> Méfiez vous, dès que le bouton est cliqué, la partie se lance, soyez prêt.</span>
              <span className="rules"><strong>Nombre de niveaux :</strong> 8</span>
            <button className="begin" onClick={number}>Start</button>
            </div>
            <div className="start-button">
              <h3 className="rules-title">Word Memory</h3>
              <span className="rules"><strong>Règle :</strong> Vous allez voir une phrase ou une suite de mots apparaître, puis une question vous sera posée. Vous avez 3 possibilités de réponses, choisissez la bonne ! Il vous faut faire attention à tout : ordre, nombre et emplacement des éléments !</span>
              <span className="rules"><strong>Attention :</strong> Le premier niveau est un didacticiel.</span>
              <span className="rules"><strong>Nombre de niveaux :</strong> 3</span>
            <button className="begin" onClick={answer}>Start</button>
            </div>
        </div>
    )
}

export default Minigame
