import React,{useState} from 'react'


export default function TextForms(props) {
    const [text, setText] = useState("") 
    const onChangeHandler=(event)=>{
        // console.log(event.target.value)
        setText(event.target.value)
        // this will convert the values into uppercase during typing
        // var newText=event.target.value.toUpperCase();
        // setText(newText)
    }
    
    
    const upperCaseHandler=()=>{
        console.log("clicked")
        
        // this will change the values into uppercase after clicking
        var newText=text.toUpperCase();
        setText(newText)
        props.toggleAlert("converted to uppercase","success")
    }
    const lowerCaseHandler=()=>{
        console.log("clicked")
        
        // this will change the values into uppercase after clicking
        var newText=text.toLowerCase();
        setText(newText)
        props.toggleAlert("converted to lowercase","success")
    }
    
    
    const clearHandler=()=>{
        console.log("clicked")
        var newText=" ";
        setText(newText)
        props.toggleAlert("text cleared","success")
    }
    
    
    const trimHandler=()=>{
        console.log("clicked")
        var newText=text.trim();
        setText(newText)
        props.toggleAlert("spaces at the ends cleared","success")
    }
    
    const spaceHandler=()=>{
        console.log("clicked")
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.toggleAlert("extra spaces cleared","success")
    }
    
    
    const copyHandler=()=>{
        var text=document.getElementById("box")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.toggleAlert("copied to clipboard","success")
    }


    return (
        <div style={{color:props.modes==="light"?"black":"white"}}>
            <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={onChangeHandler} id="box" rows="8" style={{backgroundColor:props.modes==="light"?"white":"rgb(33 41 49)",color:props.modes==="light"?"black":"white"}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={upperCaseHandler}>convert upper case</button> 
            <button className="btn btn-primary mx-2" onClick={lowerCaseHandler}>convert lower case</button> 
            <button className="btn btn-primary mx-2" onClick={clearHandler}>clear</button> 
            <button className="btn btn-primary mx-2" onClick={trimHandler}>trim whitespace</button> 
            <button className="btn btn-primary mx-2" onClick={copyHandler}>copy</button> 
            <button className="btn btn-primary mx-2" onClick={spaceHandler}>remove space</button> 
            <h2>TEXT SUMMARY</h2>
            <p>{text.split(" ").length} words are there and {text.length} chars are there</p>
            <h3>Time take to read {0.008*text.split(" ").length} minutes</h3>
            <h3>PREVIEW</h3>
            <p>{text.length>0?text:"enter something in textbox above to preview here..."}</p>
        </div>
    )
}
