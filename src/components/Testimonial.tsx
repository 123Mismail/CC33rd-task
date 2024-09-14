 "use client"

import React from 'react'
import Crousel from './Crousel'


const crouselImg = [
     "https://images.pexels.com/photos/3952090/pexels-photo-3952090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3952078/pexels-photo-3952078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    
    "https://images.pexels.com/photos/3952090/pexels-photo-3952090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3952078/pexels-photo-3952078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
function Testimonial() {
  return (<>
    <h2 className='text-4xl font-bold text-center p-10'>Explore More Books From Our Online Store </h2>
  
    <div className='w-[vw] h-[vh] mb-6 p-4     grid grid-cols-1 lg:grid-cols-3 mx-auto ml-24'>
      
        <div className='w-[300px] h-[300px] overflow-hidden rounded-full'>
        <Crousel>
          {crouselImg.map((img) => (<>
            <img src={img} className="  h-full w-full   object-fill" /> 
            
            </> ))}
        </Crousel> 
        <div className='bg-black'>
            <p>
                go to our website www.books.com
            </p>
        </div>
        </div>
      
        <div className='w-[300px] h-[300px] overflow-hidden rounded-full'>
        <Crousel>
          {crouselImg.map((img) => (<>
            <img src={img} className="  h-full w-full   object-fill" /> 
            
            </> ))}
        </Crousel>
        </div>
      
        <div className='w-[300px] h-[300px] overflow-hidden rounded-full'>
        <Crousel>
          {crouselImg.map((img) => (<>
            <img src={img} className="  h-full w-full   object-fill" /> 
            
            </> ))}
        </Crousel>
        </div>
    </div>
    </>)
}

export default Testimonial