import { useState } from 'react'
import "./App.scss"
import Nav from './components/Nav'
import Dock from './components/Dock';
import Github from './components/windows/Github';
import Note from './components/windows/Note';
import Resume from './components/windows/resume';
import Cli from './components/windows/Cli';

function App() {
  

  return (
   <main>
    <Nav/>
    <Dock/>

    <Github/>
    <Note/>
    <Resume/>
    <Cli/>
    
   </main>
  )
}

export default App
