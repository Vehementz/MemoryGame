import React from 'react';
import './Home.css';

function Home () {
    return (
      <div className="home">
      <div className="carrousel">
        <div className="cards_homepage" id="c0"></div>
        <div className="cards_homepage" id="c1"></div>
        <div className="cards_homepage" id="c2"></div>
        <div className="cards_homepage" id="c3"></div>
        <div className="cards_homepage" id="c4"></div>
        <div className="cards_homepage" id="c5"></div>
        <div className="cards_homepage" id="c6"></div>
        <div className="cards_homepage" id="c7"></div>
      </div>
      <div className="intro">
      <div className="home-text">
        <span>La mémoire est une fonction qui permet de conserver et de faire revenir à l'esprit une connaissance, une trace d'un savoir, une expérience acquise antérieurement. Chaque souvenir est enregistré par l’un de nos 5 sens. 
      Cela peut-être une image enregistrée par les yeux, un son par les oreilles, etc. Plus un événement est chargé en émotion, positive ou négative (naissance, mariage, accident...), mieux il sera mémorisé. Il y a plusieurs formes de mémoires qui sont elles-mêmes plurielles. Vous pouvez en découvrir plus sur ce <a className="link-text" href=" https://www.mapreventionsante.fr/fiches-pratiques/pourquoi-faire-travailler-sa-memoire/24/je-veux-comprendre">site.</a> </span>
      </div>
      <div className="home-text home-text-2">
      <span >Pour retrouver toutes ses capacités de mémorisation il est important de s’exercer : le cerveau est un « muscle » comme les autres ! Aussi nous vous proposons sur ce site des exemples de jeux pour s’entraîner.</span>
      </div>
      </div>
    </div>
        
          
    )
}
export default Home