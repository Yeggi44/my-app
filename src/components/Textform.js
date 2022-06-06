import React, {useState} from "react";

export default function Textform(props) {

    const handleUpClick=()=>{
        console.log('Uppercase was clicked'+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLpClick=()=>{
        console.log('Lowercase was clicked'+ text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    const handleClearClick=()=>{
        console.log('Clear was clicked'+ text);
        let newText='';
        setText(newText);
        props.showAlert("Cleared Text","success");

    }
    const handlereverse=()=>{
        console.log('Reverse was clicked'+ text);
        setText(text.split('').reverse().join(''));
        props.showAlert("String Reversed","success");


    }

    const handleOnchange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
  return (
        <>
        <div className="container my-3" style={{color : props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3 my-3">
                <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}  id="mybox" rows="10"></textarea>
            </div>
            <button className="btn btn-sm btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-sm btn-primary ms-3" onClick={handleLpClick}>Convert To LowerCase</button>
            <button className="btn btn-sm btn-primary ms-3" onClick={handleClearClick}>Clear Text</button>    
            <button className="btn btn-sm btn-primary ms-3" onClick={handlereverse}>Reverse Text</button>        
        </div>

        <div className="container" style={{color : props.mode==='light'?'black':'white'}}>
            <h1>Text Summary</h1>
            <p>{text.trim().length === 0 ? 0 : text.trim().split(" ").length} Words and {text.length} Characters</p>
            <p>{(0.008)*(text.split(" ").length-1)} Minutes read</p>
            <h2>Preview </h2>
            <p>{text}</p>
            <h3>Number Of Lines</h3>
            <p>{text.split("\n").length-1}</p>
        </div>
        </>
  );
}
