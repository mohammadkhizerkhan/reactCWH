import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './components/About';
import NavBar from './components/NavBar';
import TextForms from './components/TextForms';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)

  const toggleMode=()=>{
    if(mode ==="light"){
      setmode("dark")
      document.body.style.backgroundColor="#495057"
      toggleAlert("dark mode is enabled","success")
    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white"
      toggleAlert("light mode is enabled","success")

    }
  }

  const toggleAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  return (
    <>
     <Router>
        <div className="container">
        <NavBar title="khizer" aboutUs="about khizer" modes={mode}  toggleMode={toggleMode}></NavBar>
        <Alert alerting={alert}/>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
           <TextForms heading="enter the text below" modes={mode} toggleAlert={toggleAlert} />
          </Route>
        </Switch>
         {/* <About/> */}
        </div>
    </Router>
  </>
  );
}

export default App;
