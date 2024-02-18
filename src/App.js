import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Textform from "./Component/Textform";
import Alert from "./Component/Alert";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setalert(null)
    },2000)
  }

  const toggleMode = () => {
    if (mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#282e34'
      document.body.style.color = 'white'
      showalert("Dark mode has been enabled", "success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color = 'black'
      showalert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <Navbar title="TextConverter" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
        <Textform heading="Enter the text to analyse below" mode={mode} showalert={showalert} />
      </div>
    </>
  );
}

export default App;
