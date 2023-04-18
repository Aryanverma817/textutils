
import './App.css';
import Navbar from './componets/Navbar';
import Message from './componets/Message';
import Textform from './componets/Textform';
import React, {useState} from 'react';





function App() {

const [show,setShow]=useState('null');

const showmessage=(message,type)=>{
  setShow(
    {
      message:message,
      type:type,
    }
    
  )
  setTimeout(() => {
    setShow(null)
  },1000);
}
  const[mode, setMode ]=useState('light');

 const toggleMode=()=>{
if(mode==='dark'){
  setMode('light');
  document.body.style.backgroundColor='#bbd9c2'
  showmessage('light mode', 'success')
}
else{
  setMode('dark');
  document.body.style.backgroundColor='rgb(53 55 65)'
  showmessage('dark mode', 'success')
}
 }
  return (
<>
  <Navbar title ="Textutils" mode={mode} toggleMode={toggleMode}  ></Navbar>
<Message alert={show}/>
<div className='container'>
<Textform heading="Enter the text to analyze  below" mode={mode} showmessage={showmessage} />
</div>
</>

   
   
  );
}

export default App;
