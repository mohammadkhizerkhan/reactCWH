import React,{useState} from 'react'


export default function TextForms(props) {
    const [text, setText] = useState("enter text here") 
    const upperCaseHandler=()=>{
        console.log("clicked")

        // this will change the values into uppercase after clicking
        var newText=text.toUpperCase();
        setText(newText)
    }
    const onChangeHandler=(event)=>{
        // console.log(event.target.value)
        setText(event.target.value)

        // this will convert the values into uppercase during typing
        // var newText=event.target.value.toUpperCase();
        // setText(newText)
    }
    return (
        <div>
            <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={onChangeHandler} id="box" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={upperCaseHandler}>convert</button>
        </div>
    )
}
