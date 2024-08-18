
import React, { useState } from 'react';
import  "./Item.css";

function Item(props){

    const [Click, setCount] = useState("please click");
   function clickhandler(){
    setCount("hello");
    console.log("clickhandler is clicked");
   }
   function changehandler(event){
    console.log(event.target.value);
   }
   function submithandler(event){
    event.preventDefault();
   }
  const response=[
    {
        name:"Aman",
        roll:2333001

    },
    {
        name:"Ram",
        roll:1

    }
  ]
   
    return (
     <div>
     {props.children}
    <h1 className='hai'>hai</h1>
    <span>{response[0].name}</span>
    <span>{response[0].roll}</span>

    <span>{response[1].name}</span>
    <span>{response[1].roll}</span>
    <button onClick={clickhandler}>{Click} Here</button>
    <form onSubmit={submithandler}>
        <input type="text"placeholder='enter name' onChange={changehandler}></input>
        <button type="submit" >Submit</button>
    </form>
    </div>
    );
  
}

export default  Item;