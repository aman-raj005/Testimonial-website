import React from 'react' ;
import { FaQuoteLeft ,FaQuoteRight  } from "react-icons/fa";

const Cardt =(props)=>{
   let review=props.Reviews;
return(
    <div className='flex flex-col md:relative'>
        <div className='absolute top-[-5rem] z-[10]' >
        
             <img
             className='aspect-square rounded-full w-[110px] h-[110px] z-[25] mx-auto' 
              alt="image_not_fonund" src={review.image} />
         
              <div className='w-[110px] h-[110px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]'></div>
      
        </div>
        <div className='text-center mt-3'>
            <p className=' text-2xl font-bold capitalize'>{review.name} </p>
            <p className='text-violet-300 uppercase text-sm'>{review.job} </p>
        </div>
        
      
        <div className='text-violet-200 mx-auto mt-1'>
             <FaQuoteLeft />
        </div>

    
         <div className='text-center mt-2 text-slate-500'>
              {review.text}
        </div>
       
        <div className='text-violet-200 mx-auto mt-1'>
             <FaQuoteRight />
         </div>

    </div>
);
}

export default Cardt;