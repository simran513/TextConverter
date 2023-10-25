import './App.css';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';

function App() {
  return (
    <>
      <Navbar title="TextConverter" aboutText="About" />
      <Textform heading = "Enter the text to analyse below" />
    </>
  );
}

export default App;
