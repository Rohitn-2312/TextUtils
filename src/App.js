import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';

function App() {
const [mode,setMode]=useState('light');

const toggleMode=()=> {
    if(mode==="light"){
      setMode('dark');
      document.body.style.backgroundColor='black'
}
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
    }
}
  return (
    <>
     <Navbar title="TextUtils " mode={mode} toggleMode={toggleMode}/>
     {/*<Alert alert="Hello"/>*/}
     <div className= "container my-3">
     <TextForm heading="Enter your text here" mode={mode} ></TextForm>
    </div>
  </>
  );
}

export default App;
