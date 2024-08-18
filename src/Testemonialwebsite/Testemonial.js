import React from 'react';
import Reviews from "./Datat";
import Cardt from "./Cardt";
import { useState } from 'react';
import { FaChevronLeft ,FaChevronRight} from "react-icons/fa";

function Testemonial(){
    const [index, setIndex] = useState(4);

   function leftshifthandler(){
       if(index-1<0){
        setIndex(Reviews.length-1);
       }
       else{setIndex(index-1)};

   }
   function rightshifthandler(){
    if(index+1>=Reviews.length){
        setIndex(0);
    }
    else{setIndex(index+1);}
   }
   function suprisehandler(){
   let randomindex=  Math.floor(Math.random()*Reviews.length);
   setIndex(randomindex);
   }

   return(
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200'>
          <div className='text-center'>
              <h1 className='text-center text-3xl font-bold'> Our Testimonials</h1>
              <div className='bg-violet-400 h-[4px] w-[9rem] mt-1 mx-auto' > </div>
              <div className='w-[45vw] h-[55vh] md:w-[550px] bg-white flex flex-col justify-center items-center mt-5 p-5 transition-all duration-700 rounded-sm hover:shadow-xl' >
                  <Cardt Reviews={Reviews[index]}/>
              
            

                 <div className='flex text-3xl mt-3  gap-2 text-violet-400 font-bold mx-auto text-center' >
                       <button 
            onClick={leftshifthandler}
            className='cursor-pointer hover:text-violet-500 '>
                  <FaChevronLeft />
            </button>

            <button
            onClick={rightshifthandler}
             className='cursor-pointer hover:text-violet-500'>
                  <FaChevronRight />
            </button>
         </div>

         <div>
            <button
            onClick={suprisehandler}
             className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer 
            px-6 py-1 rounded-md font-bold text-white text-lg mt-2'>
                Suprise Me
            </button>
         </div>
         </div>

          </div>
       
    </div>
   );
}

export default Testemonial;