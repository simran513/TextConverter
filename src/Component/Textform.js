import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = () => {
    setText("")
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent === "Speak") {
        toogle.innerHTML = "Stop"
    }
    else {
        toogle.innerHTML = "Speak"
        if (toogle.innerHTML === "Speak"){
            window.speechSynthesis.cancel()
        }
    }
}
  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container my-3">
      <h1>{props.heading}</h1>
      <div className="mb-3 my-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear text</button>
      <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words and {text.trim().length } characters</p>
      <p>{0.008*text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
