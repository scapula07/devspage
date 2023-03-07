import React from 'react'
import  bgImg from "../../assets/post4.jpeg"
import userImg from "../../assets/storieImg.png"
import {BsFillGridFill,BsImages} from "react-icons/bs"
import {BiGitRepoForked} from "react-icons/bi"
import {RiTeamFill } from "react-icons/ri"
import {GoKebabVertical,GoFileSubmodule} from "react-icons/go"
import { Outlet } from 'react-router-dom'

export default function Details() {
  return (
    <div className='absolute top-0 w-full h-full'>
         <div className='w-full h-2/5'>
            <img src={bgImg} className="w-full h-full" />

            <div className='flex -mt-24 px-4 space-x-4'>
                 <img src={userImg} className="rounded-full h-20 w-20 " />
                 <h5 className='flex flex-col'>
                     <span className='font-semibold text-lg'>{"Jorge Curtis"}</span>
                     <span className=''>@{"jorgecutus"}</span>

                 </h5>

            </div>
         </div>

           <div className='w-full flex px-4 py-2 bg-slate-900 justify-between items-center'>
              <main className='flex justify-between w-3/5'>
                <h5 className='flex flex-col items-center '>
                    <span className='text-sm'>{"128"}</span>
                    <span className='text-sm font-semibold text-slate-600'>{"Posts"}</span>
                </h5>
                <h5 className='flex flex-col items-center'>
                    <span className='text-sm' >{"3120"}</span>
                    <span className='text-sm font-semibold text-slate-600'>{"Following"}</span>
                </h5>
                <h5 className='flex flex-col items-center'>
                    <span className='text-sm'>{"5024"}</span>
                    <span className='text-sm font-semibold text-slate-600'>{"Followers"}</span>
                </h5>

              </main>

                <main className='flex'>
                      {/* <button></button> */}
                      <button className='bg-orange-600  text-sm px-3 font-smeibold rounded-lg py-2 '> Create profile</button>
                </main>

           </div>
             <div className='py-4 px-4'>
                 <h5 className='text-lg font-semibold'>About me </h5>
                 <p> 
                    {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...."}

                 </p>
                 
             </div>


             <div className='w-full  relative z-30 px-8'>
                         <main className='flex  pb-4 absolute w-full space-x-12 bg-slate-800 '>
                            <BsFillGridFill className='text-2xl text-slate-500 hover:text-amber-700'/>
                            <BiGitRepoForked className='text-2xl text-slate-500 hover:text-amber-700'/>
                            <RiTeamFill  className='text-2xl text-slate-500 hover:text-amber-700'/>
                            <GoFileSubmodule  className='text-2xl text-slate-500 hover:text-amber-700'/>
                            <BsImages className='text-2xl text-slate-500 hover:text-amber-700'/>
                         </main>

                           <div  >
                             
                               <Outlet />

                           </div>

                    </div>
    </div>
  )
}
