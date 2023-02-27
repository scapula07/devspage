import React from 'react'
import { useOutletContext } from "react-router-dom";


export default function Popular() {
    const [posts]= useOutletContext();
  return (
            <div className="grid grid-flow-row grid-cols-2 gap-6 pt-8 w-full">
                {
                    posts.map((post)=>{
                        return(
                                <div className='bg-slate-700 min-w-min rounded-lg shadow-xl px-2 py-2'>
                                    <main className='flex space-x-2'>
                                         <img  src={post.creator} className="h-8 w-8 rounded-full " />
                                         <h5 className='flex flex-col'>
                                             <span className='text-xs font-semibold'>{post.creatorName}</span> 
                                             <span className='text-xs text-slate-300'>{"2 hours ago"}</span>

                                          </h5>
                                     
                                        
                                     </main>
                                     {post?.img.length > 0 &&
                                       <div className='py-4'> 
                                         
                                                <img  src={post.img} className="h-32 w-full" />
                                           
                                        
                                       </div>

                                     }

                                       <div>
                                        <p>{post.description}</p>

                                       </div>

                                      
                                    
                                </div>
                          )
                    })
                }


            </div>
  )
}
