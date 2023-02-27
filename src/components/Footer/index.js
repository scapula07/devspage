import React from 'react'
import {GrHomeOption} from "react-icons/gr"
import {MdLiveTv} from "react-icons/md"
import {BiMessageSquareDetail,BiNotification,BiMenu} from "react-icons/bi"
import {RiHome2Line} from "react-icons/ri"


export default function Footer() {
  return (
    <div className='flex w-full items-center space-x-4 '>
        <h5 className='flex flex-col items-center hover:text-amber-600'>
            <RiHome2Line className='text-2xl text-slate-500 hover:text-amber-600'/>
            <span className='text-slate-500 text-sm font-semibold hover:text-amber-600'>Home</span>
        </h5> 

        <h5 className='flex flex-col items-center  hover:text-amber-600'>
             <MdLiveTv className='text-2xl text-slate-500  hover:text-amber-600'/>
             <span className='text-slate-500 text-sm font-semibold  hover:text-amber-600'>Go live</span>
        </h5> 

        <h5 className='flex flex-col items-center  hover:text-amber-600'>
            <BiMessageSquareDetail className='text-2xl text-slate-500  hover:text-amber-600'/>
            <span className='text-slate-500 text-sm font-semibold  hover:text-amber-600'>Messages</span>
        </h5> 
       
        <h5 className='flex flex-col items-center  hover:text-amber-600'>
            <BiNotification className='text-2xl text-slate-500  hover:text-amber-600 '/>
            <span className='text-slate-500 text-sm font-semibold  hover:text-amber-600'>Notfications</span>
        </h5> 

        <h5 className='flex flex-col items-center  hover:text-amber-600'>
             <BiMenu className='text-2xl text-slate-500  hover:text-amber-600'/>
             <span className='text-slate-500 text-sm font-semibold  hover:text-amber-600'>More</span>
        </h5> 



    </div>
  )
}
