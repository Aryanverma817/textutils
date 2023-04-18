import React, {useState}from 'react';


export default function Textform(props) {
    
    const handleUpClicked=()=>{
      if(text!==""){
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showmessage('Coverted to upper case', 'success')
      }
      else{
        props.showmessage('please write to convert in upper  case', 'danger')
      }
  
    }
    const clear=()=>{
      let newtext;
      if(text!==""){
      newtext= "";
      setText(newtext);
      props.showmessage('cleared', 'success')
      }else{
        props.showmessage('already cleared', 'danger')
      }
      
    
  }
  const uppercase1=()=>{
    if(text!==""){
      let newtext=text.toLowerCase();
      setText(newtext);
      props.showmessage('Coverted to lower case', 'success')
    }
    else{
      props.showmessage('please write to convert in lower case', 'danger')
    }


   
  }
    const handleOnChange=(event)=>{

        setText(event.target.value)
    }
    const [text,setText]= useState('');
  return (<>
    <div className='my-3' style={{color:props.mode==='light'?'black':'white'}}>
<h4>{props.heading}</h4>
<div className="mb-3">
 
  <textarea className="form-control" id="Mytax" rows="3"  onChange={handleOnChange}  value={text}>Write here..... </textarea>
</div>

<button className='btn btn-primary' onClick={handleUpClicked}>Convert to uppercase</button>
<button className='btn btn-primary mx-2' onClick={uppercase1}>LowerCase</button>
<button className='btn btn-primary mx-2' onClick={clear}> clear</button>
    </div>
    <div className='container my-2' style={{color:props.mode==='light'?'black':'white'}}>
        <h4>Preview</h4>
        <p>{text.split(" ").length} words</p>
        <p>{text.length} characters</p>
        <h5>Summery</h5>
        <p >{text}</p> 
    </div>
</>
  )
}

    