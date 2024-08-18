
import React, { useState } from 'react';



function Increasedecreseproject() {
    
  const [count, setCount] = useState(0);
 
  function Dechandler(){
    setCount(count-1);
 
  }
  function Inchandler(){
     setCount(count+1);
     
  }
  function resethandler(){
    setCount(0);
  }
   return (
    <div className="bg-current w-screen h-screen flex justify-center items-center flex-col gap-10">
       <div className="text-sky-500 text-2xl font-medium flex justify-center items-center">
            Incresment & Decrement
      </div>

      <div className="flex justify-center items-center  text-black font-medium gap-12 py-3 text-[25px] rounded-sm flex-row bg-white w-19">
             <button onClick={Dechandler}  className="border-r-2 w-20 text-5xl text-center">
                     -
            </button>

             <div>
                {count}
            </div>

             <button onClick={Inchandler} className="border-l-2 w-20 text-5xl text-center">
                     +
            </button>
       </div>

        <button onClick={resethandler}  className="bg-sky-500 text-xl px-5 py-2 rounded-sm">
               reset
       </button>
    
</div>
   );
}

export default Increasedecreseproject;
