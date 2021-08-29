import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
// import TextForms from './components/TextForms';



function App() {
  return (
    <>
    {/* <NavBar></NavBar> */}
    <NavBar title="khizer" aboutUs="about khizer"></NavBar>
    <div className="container">
    {/* <TextForms heading="enter the text below"/> */}
    <About/>
    </div>
    </>
  );
}

export default App;
