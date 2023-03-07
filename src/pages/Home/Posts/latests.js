import React from 'react'
import { useOutletContext } from 'react-router-dom';

export default function Latests() {

  const [posts]= useOutletContext();
  return (
    <div className="grid grid-flow-row grid-cols-1 gap-y-8 pt-8 w-full">
     
     { posts.map((post)=>{
        return(

          <div className='border-b border-slate-900 rounded-md py-6'>
              <div className='flex flex-col space-y-2'>
                  <main className='flex justify-between w-full items-center'>
                      <div className='flex space-x-4 items-center'>
                          <img src={post.creator}  className="h-14 w-14"/>
                          <h5 className='flex flex-col'>
                              <span className='text-lg font-semibold'>{post.creatorName}</span>
                              <span className='text-slate-500'>{"2 hours ago"}</span>

                          </h5>
                      </div>
      
                      <button className='border border-red-800 px-4 rounded-full py-1 text-sm font-semibold'>Follow</button>
      
                  </main> 

                  <main className='flex-col flex space-y-4'>
                     <p>{post.description} </p>

                     <img src={post.img}/>


                  </main>
      
              </div>
      
  
         </div>


        )
     })
   

     }

    </div>
  )
}
