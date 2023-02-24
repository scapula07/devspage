import React from 'react'
import {FiSearch} from "react-icons/fi"

export default function SearchBox() {
  return (
    <div className='flex w-full items-center space-x-2 px-4 py-1'>
         <FiSearch className='text-slate-400 text-xl' />
         <input 
           className='w-3/4 rounded-full py-1 bg-slate-700'
            placeholder='Search'
           />
        
    </div>
  )
}
