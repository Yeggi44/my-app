import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React,{useState} from 'react'
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  const [mode, setmode] = useState('light');
  
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const toogleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='grey';
      document.body.style.color='white';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title='TextUtils is Amazing';
      // }, 1000);
      // setInterval(() => {
      //   document.title='Install TextUtils Now';
      // }, 1500);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='dark';
      showAlert("light mode has been enabled","success");
      document.title='TextUtils - Light Mode';
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtiles" about="About Us" mode={mode} toogleMode={toogleMode}/>
      <Alert alert={alert}/>
      <div className="container">
          <Routes>
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text below" mode={mode}/>  }/>
            <Route exact path="/About" element={<About/>}/>     
          </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
