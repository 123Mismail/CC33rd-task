"use client"

import Link from 'next/link';
import React, { useState } from 'react'
 
import { FiAlignJustify } from "react-icons/fi";
function Header() {
  const [isHidden, setHidden]=useState(false);
  const [dropdown,setDropdown]=useState(false)


  return (
    <div className='px-8 py-8  text-black  bg-white transition-all '>
       <span className='xl:hidden  '>lo<span className='text-xl text-purple-950 font-medium '>go</span> come to innovations</span>
      <ul className='  hidden xl:flex lg:flex justify-between gap-y-3 font-medium text-black'>
      <Link className='duration-300' href="/">Home<li></li></Link>
        <li>About</li>
        <li className='cursor-pointer  '
        onClick={()=>setDropdown(!dropdown)}
        >Books
          <ul className={`absolute left-[600px] text-black top-26 border-none duration-1000 bg-gradient-to-l bg-white transform transition-transform translate-x-3 p-3 ${dropdown ? "opacity-100" : "opacity-0"}`}
            
            >
           <Link href={"/Historic"}> <li className=" hover:bg-blue-700 border-spacing-1 p-2 border-white "> Historic </li></Link>
           <Link href= "/political"><li className=" hover:bg-blue-700 border-spacing-1 p-2 border-white ">Political books</li></Link> 
           <Link href= "/Religious"><li className=" hover:bg-blue-700 border-spacing-1 p-2 border-white ">Religious books</li> </Link>
             
           <Link href="/sientific"><li className=" hover:bg-blue-700 border-spacing-1 p-2 border-white ">science </li></Link>
          </ul>
        </li>
        <li>Contact</li>
        <li  className=' '><input type="text" className='px-2  xl:p-2 bg-white' /></li>
       
      </ul>
      <a href="#" 
      onClick={()=>setHidden(!isHidden)}
      ><span className=' xl:hidden md:hidden lg:hidden  h-11 pl-10 ml-8 w-10  rounded-full'><FiAlignJustify /></span></a>
      <div className={`absolute left-0 top-20 m-0   mx-auto block h-screen  w-full xl:hidden bg-green-600 text-white transform transition-transform ${isHidden ? "opacity-100" : " opacity-0"} `}
      
      >
        <ul className='w-full text-center space-y-6 pt-3'>
          <li  className=" hover:bg-blue-700 border-spacing-1 p-2 border-white ">Home</li>
          <li  className=" hover:bg-blue-700  border-spacing-1 p-2 border-white">About</li>
          <li  className=" hover:bg-blue-700  border-spacing-1 p-2 border-white">Contacts</li>
          <li  className=" hover:bg-blue-700  border-spacing-1 p-2 border-white"
          onClick={()=>setDropdown(!dropdown)}
          >Books
            {/* {dropdown ?<>
              
            </> :<></> } */}
            <ul className={`absolute  w-full bg-blue-700 z-50 left-0  hover:visible transform transition-transform ${dropdown? "opacity-100":"opacity-0"}`}>
              <li  className=" hover:bg-blue-700 border-spacing-1 p-2 border-white ">Historic Books</li>
              <li  className=" hover:bg-blue-700 border-spacing-1 p-2 border-white ">Religious Books</li>
             
              <li  className=" hover:bg-blue-700 border-spacing-1 p-2 border-white ">Political Books</li>
            </ul>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default Header