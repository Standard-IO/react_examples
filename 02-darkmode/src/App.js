import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Main from './components/Main';


function App() {
    
  const [darkMode, setDarkMode] = React.useState(true);
  
  function toggler(){
      setDarkMode(!darkMode)
  }
  return (
      <div className="container">
          <Navbar 
              darkMode={darkMode}
              toggleDarkMode={()=>{toggler()}} 
              />
              
          <Main
              darkMode={darkMode} />
      </div>
  )
}

export default App;
