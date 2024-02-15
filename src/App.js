import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Textform from "./Component/Textform";

function App() {
  const [mode, setmode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#282e34'
      document.body.style.color = 'white'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color = 'black'
    }
  }
  return (
    <>
      <Navbar title="TextConverter" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <Textform heading="Enter the text to analyse below" mode={mode} />
      </div>
    </>
  );
}

export default App;
