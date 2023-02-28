import React from 'react'
import {TbArrowNarrowLeft} from "react-icons/tb"
import {GoKebabVertical,GoFileSubmodule} from "react-icons/go"
import StorieImg from "../../assets/storieImg.png"

const NotficationCard=({msg})=>{
   
    return(
        <div className='flex w-full space-x-4 items-center rounded-sm bprder border-slate-900 px-4 py-3'>
        <main className='flex flex-col items-center'>
            <img src={msg.img} className="w-16 h-16" />
           
        </main>
        <main className='flex w-full justify-between'>
            <div className='flex flex-col space-y-1 w-full'>
                <h5 className=' font-semibold'>{msg.name}</h5>
                <h5 className='text-slate-200'>{"Hey!How's it going?"}</h5>
                <h5 className='font-smeibold text-slate-500 text-sm'>{"04:04AM"}</h5>
            </div>
            
           

        </main>

    </div>
    )
}
export default function Notfications() {
  return (
    <>
    <div>
         <div className='flex w-full justify-between items-center  py-6 absolute  z-10 pr-8  '>
            <TbArrowNarrowLeft className='text-3xl'/>
          
        </div>

        <div className='pt-20 absolute bg-slate-800 flex items-center justify-between w-full pr-8'  >
            <h5 className='text-3xl font-semibold'>Notifications</h5>
             <h5>Toggle</h5>
        </div>
         
        <div className='h-full pt-36 overflow-y-scroll' >
               <div className='flex flex-col space-y-2' style={{"height":"80vh"}}>
                    {notifications.map((msg)=>{
                        return(
                            <NotficationCard msg={msg}/>
                        )
                    })

                    }
                </div>

           </div>


          
         
       
    </div>
       
    
    </>
  )
}


const notifications=[
    {
       img:StorieImg,
       name:"Mike West"
   },

    {
        img:StorieImg,
        name:"Mike West"
    },

    {
        img:StorieImg,
        name:"Mike West"
    },

    {
        img:StorieImg,
        name:"Mike West"
    },

    {
        img:StorieImg,
        name:"Mike West"
    },

  


]