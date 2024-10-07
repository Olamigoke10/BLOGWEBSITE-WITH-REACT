import React from 'react'
import banner from './../assets/images/banner1.png'
import { IoSearchSharp } from "react-icons/io5";

function Search() {
  return (
    <div className='flex justify-center mt-8 flex-col md:px-[150px] px-[70px]'>
    <img src={banner} className='rounded-2xl'/>
    <div className='bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
      <IoSearchSharp className='text-[20px] text-gray-400'/>
      <input type="text" placeholder='search'  className='outline-none ml-2'/>
    </div>
    </div>
  )
}

export default Search
