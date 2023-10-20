import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText); 
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText); 
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const handleClearClick=() =>{
    let newText="";
    setText(newText)
  }
  const handleCopy=() =>{
     var text=document.getElementById("myBox")
     text.select();
     text.setSelectionRange(0,9999);
     navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpace=() =>{
     let newText=text.split(/[]+/);
     setText(newText.join(" "))
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
      <h1>
        {props.heading}
      </h1>
      <div className={`mb-3 ${props.mode==='dark'?'light':'dark'}`}>
        <textarea
          className={`form-control container`}
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{
            backgroundColor: props.mode === 'dark' ? '#333' : '#fff', // Background color
            color: props.mode === 'dark' ? '#fff' : '#000' // Text color
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2 " onClick={handleUpClick}>
        Convert To UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert To LowerCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
        Remove Extra Space
      </button>
    </div>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} <b>Words</b> {text.length} <b>Letters</b></p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
    </div>
    </>
  )
}
