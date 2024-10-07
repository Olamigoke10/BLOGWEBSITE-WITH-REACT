import React, { useState } from 'react'
import banner from './../assets/images/banner1.png'
import { IoSearchSharp } from "react-icons/io5";

function Search() {

  const tags= [
    {
      id:1,
      name:"All"
    },
    {
      id:2,
      name:"React"
    },
    {
      id:3,
      name:"React Native"
    },
    {
      id:4,
      name:"Django"
    },
    
  ]

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='flex justify-center mt-8 flex-col md:px-[150px] px-[70px]'>
    <img src={banner} className='rounded-2xl'/>
    <div className='bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
      <IoSearchSharp className='text-[20px] text-gray-400'/>
      <input type="text" placeholder='search'  className='outline-none ml-2'/>
    </div>
    <div className='flex gap-10 justify-center mt-5'>
      {tags.map((item, index) => (
        <ul onClick={()=> setActiveIndex(index)}
         className={`${index==activeIndex?
          'bg-red-500 text-white':null} p-1 pb-2 rounded-sm md:rounded-full cursor-pointer 
          md:px-4 hover:scale-110 hover:border-[1px] border-red-800
          transition-all duration-300 ease-in-out`}>
           <li>{item.name}</li>

        </ul>
      ))}
    </div>
    </div>
  )
}

export default Search
