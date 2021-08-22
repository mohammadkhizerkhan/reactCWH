import './App.css';
import NavBar from './components/NavBar';
import TextForms from './components/TextForms';



function App() {
  return (
    <>
    {/* <NavBar></NavBar> */}
    <NavBar title="khizer" aboutUs="about khizer"></NavBar>
    <div className="container">
    <TextForms heading="enter the text below"/>
    </div>
    </>
  );
}

export default App;
