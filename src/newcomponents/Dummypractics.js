import { useEffect, useState } from 'react';

function Dummypractice(){
    const [text, setState] = useState(" ");
    const [name, setName] = useState("Aman");

    // useEffect(()=>{
    //     console.log("ui rendering is done");
    // },[]);

    useEffect(()=>{
   console.log("lisner is added");
   return(()=>{
     console.log("lisner removed");
   });
    },[name]);
    function texthandler(event){
        console.log(text);
        setState(event.target.value);
    }

    return(
          <div>
            <button>hello ji</button>
            <input  type="text"  id="inp" placeholder="enter your data" onChange={texthandler}></input>
            <label htmlFor="inp">Input box</label>
          </div>
    );

}

export default Dummypractice;