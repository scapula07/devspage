import React from 'react'
import {AiFillCloseCircle,AiOutlineClose,AiOutlineComment} from "react-icons/ai"
import userImg from "../../assets/storieImg.png"
import {MdSend} from "react-icons/md"
import { useCreateStream, Player ,ThemeConfig } from '@livepeer/react';


export default function Stream({stream}) {
  return (
    <div className='bg-slate-800 relative h-screen w-screen overflow-y-scroll text-white '>
            <div className='w-full '>
                <div className='flex w-full justify-between items-center px-4 py-6 absolute  z-10 '>
                        <main className='flex items-center space-x-2'>
                            <img src={userImg} className="h-10 w-10 rounded-full" />
                            <h5 className='flex flex-col'>
                                <span className='text-sm'>{"Russell Lee"}</span>
                                <span className='text-sm font-light'>{"01:08:30"}</span>

                            </h5>
                            </main>   
                    <AiFillCloseCircle className='text-3xl'/>
                </div>
            </div>
             
            <div className='h-screen flex justify-center'>
                     <Player 
                          title={stream?.name}
                          playbackId={stream?.playbackId}
                          autoPlay
                          muted
                       />
               </div>


            <div className='absolute w-full bottom-0 h-20  z-30'>
                     <main className='flex items-center space-x-2 px-4 py-2 '>
                       
                      </main>

                     <main className='flex  w-full justify-between px-4 items-center'>
                       <main className='px-4 flex items-center py-2 space-x-4 w-full justify-between'>
                        <input
                            className='w-10/12 rounded-full bg-slate-100 py-2 px-4 text-slate-900'
                            placeholder='Write a message...'
                            />
                           <MdSend className='text-amber-600 text-3xl'/>
                        </main>
                     </main>

                </div>


         </div>

  )
}
