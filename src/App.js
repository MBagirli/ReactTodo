import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import List from './Components/List';

function App() {
  const [myArray,setMyArray] = useState([]);

  let GettingAndSettingObj = (obj) =>{
    if(obj.length===0){
      setMyArray([]);
    }else{
      setMyArray(prev=>[...prev,obj]);
    }
  }

  let Deleting = (item)=>{
    for (let i in myArray){
      if(myArray[i].Id===Number(item)){
        myArray.splice(i,1);
        setMyArray([...myArray]);
      }
    }
  }

  return (
    <div className="App">
      <Form Get={GettingAndSettingObj} />
      <List forDel={Deleting} array={myArray}/>
    </div>
  );
}

export default App;
