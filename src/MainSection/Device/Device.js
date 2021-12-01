import React from 'react';


const mainSection = (props) => {

    return(
        <div className="device">
            <p className="title">
              czujnik
            </p>
            <img alt="device" class="image" src="https://www.w3schools.com/css/paris.jpg"></img>
            <p className="data">Temperatura: 100 stopni Wildgotność 100%</p>
            <p className="lastUse">Ostatnie uzycie</p>
        </div>
      )
  }

export default mainSection;