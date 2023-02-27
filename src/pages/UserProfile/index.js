import React from 'react'
import {TbArrowNarrowLeft} from "react-icons/tb"
import {GoKebabVertical,GoFileSubmodule} from "react-icons/go"
import Details from './details'
import {BsFillGridFill,BsImages} from "react-icons/bs"
import {BiGitRepoForked} from "react-icons/bi"
import {RiTeamFill } from "react-icons/ri"



export default function UserProfile() {
  return (
    <div className='bg-slate-800 relative h-screen w-screen overflow-y-scroll text-white '>
         <div className='w-full '>
                    <div className='flex w-full justify-between items-center px-4 py-6 absolute  z-10 '>
                        <TbArrowNarrowLeft className='text-3xl'/>
                        <GoKebabVertical  className='text-3xl'/>

                    </div>
                 
                    <Details />

                    <div className='w-full pt-96 relative z-30 px-8'>
                         <main className='flex pt-36 pb-4 absolute w-full space-x-12  '>
                            <BsFillGridFill className='text-2xl text-slate-500 hover:text-amber-700'/>
                            <BiGitRepoForked className='text-2xl text-slate-500 hover:text-amber-700'/>
                            <RiTeamFill  className='text-2xl text-slate-500 hover:text-amber-700'/>
                            <GoFileSubmodule  className='text-2xl text-slate-500 hover:text-amber-700'/>
                            <BsImages className='text-2xl text-slate-500 hover:text-amber-700'/>
                         </main>

                         inex

                    </div>

                  


          </div>
         
    </div>
  )
}
