import React from 'react';
import './UsefulLinks.css'

function UsefulLinks({usefullink, index}) {
    return (
          <div className={"cards_lists "+(index % 2 ? "reverses" : "")}>
            <div className="cards_presentations ">
              <h2 className = "titles_links">{usefullink.name}</h2>
              <p className="descriptions_links">{usefullink.description}</p>
            </div>
          <div class="cards">
            <div class="cards_images"> 
              <a className="links_memorys"target='_blank' href={usefullink.link} ><img className = "img_logo" src={usefullink.image} alt={usefullink.name}/></a>
               </div>
          </div>
          </div>
          
    )
}
export default UsefulLinks
