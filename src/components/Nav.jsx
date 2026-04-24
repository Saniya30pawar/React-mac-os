import React from 'react'
import "./nav.scss"
import DateTime from './Datetime'

const Nav = () =>{
    return (
        <nav>
            <div className='left'>
             <div className="apple-icon">
                <img src="/apple.svg" alt="" />
             </div>
             <div className="nav-item">
                <p>Saniya pawar</p>
             </div>
             <div className="nav-item">
                <p>File</p>
             </div>
             <div className="nav-item">
                <p>Window</p>
             </div>
             <div className="nav-item">
                <p>Terminal</p>
             </div>
            </div>
            <div className='right'>
                <div className='nav-icon'>
                    <img src="/wifi.svg" alt="" />
                </div>
                <div className="nav-item">
                <DateTime/>
             </div>
            </div>
        </nav>
       
    )
 }

 export default Nav