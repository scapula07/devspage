import React from 'react'
import {BsFilterLeft} from "react-icons/bs"


export default function Browse() {
  return (
    <div className='w-full '>
       <main className='flex w-full justify-between items-center'>
          <h5 className='text-xl font-semibold'>Browse</h5>
          <BsFilterLeft className='text-xl'/>
       </main>
        
       <div className='overflow-x-scroll w-full py-8'>
         <div className='flex items-center space-x-10 ' style={{width:"120%"}}>
             <h5 className='text-xl'>Code</h5>
             <h5 className='text-xl'>Courses</h5>
             <h5 className='text-xl'>Projects</h5>
             <h5 className='text-xl'>Developers</h5>
             
          </div>
       </div>
       

    </div>
  )
}
