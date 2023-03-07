import React from 'react'
import  bgImg from "../../assets/post4.jpeg"
import userImg from "../../assets/storieImg.png"
import {BsFillGridFill,BsImages} from "react-icons/bs"
import {BiGitRepoForked} from "react-icons/bi"
import {RiTeamFill } from "react-icons/ri"
import {GoKebabVertical,GoFileSubmodule} from "react-icons/go"
import { Outlet } from 'react-router-dom'
import { MdSend } from 'react-icons/md'

export default function PostContent() {
  return (
    <div className='absolute top-0 w-full h-screen '>
         <div className='w-full ' style={{height:"70%"}}>
            <img src={bgImg} className="w-full h-full" />

            <div className='flex flex-col bg-slate-900 -mt-12 px-4 space-y-4 '>
                <h5 className='text-4xl font-semibold'>Post content </h5>
                 <p className='text-slate-300'> 
                    {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...."}

                 </p>

            </div>
         </div>
            <div className='w-full  relative z-30 px-8 py-28'>
                 <div className='flex flex-col w-full space-y-10'>
                   <div className='flex'>
                     <main className='flex items-center space-x-2'>
                       <img src={userImg } />
                       <button className='bg-orange-700 rounded-lg py-2 text-sm px-4'>Subscribe</button>
                     </main>
                     <main></main>


                   </div>


                   <main className='px-4 flex w-full py-2 items-center space-x-4'>
                   <input
                      className='w-11/12 rounded-full bg-slate-900 py-2 px-4'
                      placeholder='Write a message...'
                    />
                   <MdSend className='text-amber-600 text-2xl'/>
                </main>
                
                </div>     
  
             </div>
    </div>
  )
}
