import './App.css';
// import About from './components/About';
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
    {/* <NavBar></NavBar> */}
    <NavBar title="khizer" aboutUs="about khizer" modes={mode}  toggleMode={toggleMode}></NavBar>
    <Alert alerting={alert}/>
    <div className="container">
    <TextForms heading="enter the text below" modes={mode} toggleAlert={toggleAlert} />
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
