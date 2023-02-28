import React from 'react'
import {TbArrowNarrowLeft} from "react-icons/tb"
import {GoKebabVertical,GoFileSubmodule} from "react-icons/go"


export default function SecondLayout({children}) {
  return (
    <div className='bg-slate-800 relative h-screen w-screen overflow-y-scroll text-white '>
    <div className='w-full '>
               <div className='flex w-full justify-between items-center px-4 py-6 absolute  z-10 '>
                   <TbArrowNarrowLeft className='text-3xl'/>
                   <GoKebabVertical  className='text-3xl'/>

               </div>
              <div className='flex '>
                   {/* <main className='w-1/4 h-screen z-40 bg-black'>

                   </main> */}
                  {children}
                 
               </div>
             

             


     </div>
    
</div>
  )
}
