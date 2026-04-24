import React from "react"
import "./Dock.scss"


const Dock = () => {
  return (
    <footer className='dock'>
      <div className="icon github">
        <img src="/github.svg" alt="Github" />
      </div>
      <div className="icon note">
        <img src="/note.svg" alt="Notes" />
      </div>
      <div className="icon pdf">
        <img src="/pdf.svg" alt="PDF" />
      </div>
      <div className="icon calender">
        <img src="/calender.svg" alt="Calendar" />
      </div>
      <div className="icon mail">
        <img src="/mail.svg" alt="Mail" />
      </div>
      <div className="icon cli">
        <img src="/cli.svg" alt="CLI" />
      </div>
      
    </footer>
  )
}

export default Dock;