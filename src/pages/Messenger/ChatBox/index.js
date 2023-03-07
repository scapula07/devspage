import React ,{useState} from 'react'
import {TbArrowNarrowLeft} from "react-icons/tb"
import {GoKebabVertical,GoFileSubmodule,GoPrimitiveDot} from "react-icons/go"
import StorieImg from "../../../assets/storieImg.png"
import {MdSend} from "react-icons/md"
import { useLocation,useParams} from "react-router-dom";



export default function ChatBox() {
    const location =useLocation()
    const [locationState,setlocationState] = useState(location.state)
    const {conv,client}=locationState

    console.log(conv)
    console.log(client)
  return (
    <div className='bg-slate-800 relative h-screen text-white'>
        <div className='flex w-full justify-between items-center bg-slate-800 py-6 absolute  z-10 pr-8 border-b border-slate-900 '>
            <TbArrowNarrowLeft className='text-3xl'/>
            <h5 className='text-lg font-semibold'>{"Henry John"}</h5>
            <img src={StorieImg} className="h-10 w-10 rounded-lg"/>
        </div>

          <div className='py-32  w-full' style={{"height":"100vh"}}>

          <div className='h-full  w-full overflow-y-scroll' >
             <main style={{"height":"120vh"}}>

             </main>

          </div>


           <div className=' py-8'>
                <main className='px-4 flex items-center py-2 space-x-4'>
                   <input
                      className='w-10/12 rounded-full bg-slate-900 py-2 px-4'
                      placeholder='Write a message...'
                    />
                   <MdSend className='text-amber-600 text-2xl'/>
                </main>
            
            </div>

        </div>

       

    </div>
  )
}
