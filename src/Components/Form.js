import './Form.css';
import React,{ useState } from 'react';

const Form = (props) =>{

  const [id,setId] = useState(0);
  const [obj,setObj] = useState();
  const [bool,setBool] = useState(false);

  const [input1,setInput1] = useState('');

  let ChangingofInput1 = (event) =>{
    setInput1(event.target.value);
  }

  const [input2,setInput2] = useState('');

  let ChangingofInput2 = (event) =>{
    setInput2(event.target.value);
  }

  let creatingofObj = ()=>{
    setId(prev=>prev+=1);
    setObj({
      Id:id,
      FirstInput:input1,
      SecondInput:new Date(input2),
    });
  }

  let DeletingAll = () =>{
    setBool(true);
    setObj([]);
  }

  let PassingObj = (event) =>{
    event.preventDefault();
    if(bool){
      props.Get(obj);
      setInput1('');
      setInput2('');
      setBool(false);
    }else if(input1===''|| input2===''){
      alert('Please fill out the form correctly!');
    }else{
      props.Get(obj);
      setInput1('');
      setInput2('');
    }
  }

  return(
    <form onSubmit={PassingObj} className="FormContainer">
      <input value={input1} onChange={ChangingofInput1} className='UserInput' type="text" />
      <input value={input2} onChange={ChangingofInput2} className='UserInput' type="date" min="2022-01-01" />
      <button onClick={creatingofObj} className='UserInput btn--1 btn'>Add</button>
      <button onClick={DeletingAll} className='UserInput btn--2 btn'>Delete All</button>
    </form>
  );
}

export default Form;