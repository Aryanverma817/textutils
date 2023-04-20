
import './App.css';
import Navbar from './componets/Navbar';
import Message from './componets/Message';
import Textform from './componets/Textform';
import About from './componets/About';
import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



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
  
<Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
<Message alert={show}/>
<div className='container'>

<Routes>
      
      <Route exact path="/" element={ <Textform heading="Enter the text to analyze  below" mode={mode} showmessage={showmessage} />} />
      <Route exact path="/about" element={<About/>}/>

</Routes>
</div>
</Router>



</>


   
   
  );
}

export default App;