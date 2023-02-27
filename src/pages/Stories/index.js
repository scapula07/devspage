import React from 'react'
import userImg from "../../assets/storieImg.png"
import {AiFillCloseCircle,AiOutlineClose,AiOutlineComment} from "react-icons/ai"
import { Outlet } from 'react-router-dom'


export default function Stories() {
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



                 <div className='absolute w-full bottom-0 '>
                      <amin className="flex space-x-6  px-4 ">
                          <h5 className='text-slate-500 font-semibold hover:text-white hover:text-xl hover:font-light'>For you</h5>
                          <h5 className='text-slate-500 font-semibold hover:text-white hover:text-xl hover:font-light'>Following</h5>
                          <h5 className='text-slate-500 font-semibold hover:text-white hover:text-xl hover:font-light'>Popular</h5>

                      </amin>

                      <main className='h-56'>
                          <Outlet />

                      </main>



                </div>


    </div>
  )
}
