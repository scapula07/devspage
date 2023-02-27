import React from 'react'
import {TbArrowNarrowLeft} from "react-icons/tb"
import {GoKebabVertical,GoFileSubmodule} from "react-icons/go"
import Details from './details'

export default function GuestProfile() {
  return (
    <div className='bg-slate-800 relative h-screen w-screen overflow-y-scroll text-white '>
            <div className='w-full '>
                    <div className='flex w-full justify-between items-center px-4 py-6 absolute  z-10 '>
                        <TbArrowNarrowLeft className='text-3xl'/>
                        <GoKebabVertical  className='text-3xl'/>

                    </div>
                 <Details />

            </div>


    </div>
      
  )
}
