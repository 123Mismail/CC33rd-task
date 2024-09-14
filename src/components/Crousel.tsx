
import React, { useState,useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
  


function Crousel({children }:any) {
    const autoplay=true
    const [currIndx,setIndx]=useState(0);

    const nextPic=()=>{
        setIndx((currIndx)=> currIndx===0?children.length -1 : currIndx -1)
    }
   const prevPic=()=>{
    setIndx((currIndx)=> currIndx=== children.length -1? 0: currIndx +1)
   }

   useEffect(()=>{
    if(!autoplay) return;
    const interval=setInterval(nextPic,3000)
    return ()=>clearInterval(interval)
   },[])
  return (
<>
 
    <div className='max-w-full relative w-full lg:h-[500px] h-[200px]   overflow-hidden    '>
       <div className='  flex    transition-transform  ease-in-out duration-500'
       style={{transform:`translateX(-${currIndx * 100}%)`}}
       >
        
        {children}
        </div>
       <div className='absolute items-center flex justify-between  inset-2  text-black'>
        <button className='p-2 bg-white rounded-full'>
            <ChevronLeft
            onClick={prevPic}
            />
        </button>
        <button  className='p-2 bg-white rounded-full'>
            <ChevronRight
            onClick={nextPic}
            /> 
        </button>
    </div>
<div className='absolute left-0 right-0 bottom-2'>
 <div className='flex justify-center items-center top-3 gap-1'>
  {children.map((_:any,i:number)=>(
    <div className={`h-3 w-3 rounded-full space-x-1  bg-white transition-all ease-in-out duration-500 ${currIndx===i? "p-3": "opacity-100"} `}></div>
  ))}
 </div>
</div>

    </div>
  
   

 

</>
 
  )
}

export default Crousel