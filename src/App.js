import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Textform from "./Component/Textform";
import About from "./Component/About";
import Alert from "./Component/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#282e34";
      document.body.style.color = "white";
      showalert("Dark mode has been enabled", "success");
      // document.title = 'TextConverter - DarkMode'
      // setInterval(() => {
      //   document.title = 'TextConverter is in DarkMode'
      // }, 2000)
      // setInterval(() => {
      //   document.title = 'Change TextConverter to LightMode'
      // }, 1500)
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showalert("Light mode has been enabled", "success");
      // document.title = 'TextConverter - LightMode'
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextConverter" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="about" element={<About/>}/>
            <Route exact path="/" element={
              <Textform
                heading="Enter the text to analyse below"
                mode={mode}
                showalert={showalert}
              />} />
            
          </Routes>
          {/* <Textform heading="Enter the text to analyse below" mode={mode} showalert={showalert} /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
