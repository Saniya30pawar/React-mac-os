import React from 'react'
import {Rnd} from 'react-rnd'
import "./macwindow.scss"


const MacWindow = ({children}) =>{
    return (
        <Rnd
        
        default={{
          x: 150,
          y: 140,
          width: "30vw",
          height: "30vh"
        }}
        >
            <div className="window">
           <div className="nav">
            <div className="dots">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
            </div>


           <div className="title"><p>Saniyapawar -zsh</p></div>
           </div>
           <div className="main-content">
            {children}
           </div>
           </div>
        </Rnd>
           
    )
}



export default MacWindow