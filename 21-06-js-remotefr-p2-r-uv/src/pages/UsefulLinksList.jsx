import React from 'react';
import UsefulLinks from '../components/usefullinks/UsefulLinks';
let Usefullinks = require ("../data/usefullinks");

function UsefulLinksList() {

    return (
      <div className="title-page">
        
      <div className="usefullinks-container">
            {Usefullinks.map((usefullink, index)=>
                <div key= {index}>  
                  <UsefulLinks index={index} usefullink={usefullink}/>
                </div> 
            )}
      </div>
      </div>
    )
}
export default UsefulLinksList
