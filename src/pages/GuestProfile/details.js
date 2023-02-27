import React from 'react'
import  bgImg from "../../assets/bgImg4.avif"
import  user from "../../assets/storieImg.png"
import {AiFillMessage} from "react-icons/ai"
import {MdCall} from "react-icons/md"

export default function Details() {
  return (
    <div className='absolute top-0 w-full h-full'>
         <div className='w-full h-3/5'>
            <img src={bgImg} className="w-full h-full" />

            <div className='flex flex-col w-full -mt-72 justify-center items-center space-y-8'>
                 <main className='flex flex-col w-full justify-center items-center space-y-2 '>
                     <img src={user} className="h-24 w-24"/>

                     <h5 className='flex flex-col items-center'>
                        <span className='text-2xl font-semibold'> {"Alex Watt"}</span>
                        <span>@{"alexwatt"}</span>
                     </h5>

                 </main>

                 <main className='flex w-full space-x-6 justify-center'>
                    <button className='rounded-full p-2 bg-blue-400'>
                        <AiFillMessage />
                    </button>
                    <button className='rounded-full p-2 bg-green-400 '>
                          <MdCall />
                    </button>
                    <button className='bg-orange-600 px-4 text-xs rounded-full'>
                       Follow
                    </button>
                     
                 </main>

            </div>
          </div>

          <div className='-mt-8 px-4 '>
           

             <div className='px-4  bg-slate-900 w-11/12  py-4'>
               <h5 className='text-xl font-semibold'>About me</h5>
                 <p className='text-sm font-semibold py-2'>
                    {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."}
                 </p>

             </div>

          </div>

          
    </div>
  
  )
}
