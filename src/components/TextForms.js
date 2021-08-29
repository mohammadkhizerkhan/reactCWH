import React,{useState} from 'react'


export default function TextForms(props) {
    const [text, setText] = useState("enter text here") 
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
    }
    const lowerCaseHandler=()=>{
        console.log("clicked")

        // this will change the values into uppercase after clicking
        var newText=text.toLowerCase();
        setText(newText)
    }


    const clearHandler=()=>{
        console.log("clicked")
        var newText=" ";
        setText(newText)
    }


    const trimHandler=()=>{
        console.log("clicked")
        var newText=text.trim();
        setText(newText)
    }


    return (
        <div>
            <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={onChangeHandler} id="box" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={upperCaseHandler}>convert upper case</button> 
            <button className="btn btn-primary mx-2" onClick={lowerCaseHandler}>convert lower case</button> 
            <button className="btn btn-primary mx-2" onClick={clearHandler}>clear</button> 
            <button className="btn btn-primary mx-2" onClick={trimHandler}>trim whitespace</button> 
            <h2>TEXT SUMMARY</h2>
            <p>{text.split(" ").length} words are there and {text.length} chars are there</p>
            <h3>Time take to read {0.008*text.split(" ").length} minutes</h3>
            <h3>PREVIEW</h3>
            <p>{text}</p>
        </div>
    )
}
