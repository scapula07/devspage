import React from 'react'
import SearchBox from '../SearchBox'
import "./header.css"
import {AiFillCamera} from "react-icons/ai"


export default function Header() {
  return (
    <div className='flex w-full items-center space-x-6 bg-slate-800 '>
         <main className='w-3/4 bg-slate-700 rounded-full'>
           <SearchBox />
         </main>
           
          <div className='bg-orange-600 flex items-center justify-center p-2 rounded-full'>
             <AiFillCamera className='text-white text-xl'/>
          </div>

    </div>
  )
}
