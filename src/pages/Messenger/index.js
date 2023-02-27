import React from 'react'
import {TbArrowNarrowLeft} from "react-icons/tb"
import {GoKebabVertical,GoFileSubmodule,GoPrimitiveDot} from "react-icons/go"
import {MdAdd} from "react-icons/md"
import StorieImg from "../../assets/storieImg.png"
import {BsDot} from "react-icons/bs"
import Friend from './friends'
import ChatBox from './ChatBox'

export default function Messenger() {
  return (
    <>
    <div>
         <div className='flex w-full justify-between items-center  py-6 absolute  z-10 pr-8  '>
            <TbArrowNarrowLeft className='text-3xl'/>
            <MdAdd  className='text-4xl text-amber-600'/>
        </div>

        <div className='pt-20 absolute bg-slate-800 '  >
            <h5 className='text-3xl font-semibold'>Messages</h5>
            
            <div className='overflow-x-scroll w-full py-10'>
                 <div className='flex items-center space-x-8 ' style={{width:"150%"}}>
                       
                       {activeFriends.map((active)=>{
                           return(
                              <main className='flex flex-col space-y-1 items-center'>
                              <div className='flex flex-col '>
                                  <img src={active.img} className="h-20 w-20 rounded-full " />
                                  <GoPrimitiveDot className='-mt-6 text-green-400  ml-14 text-2xl' />
                                 
                              </div>
                                <h5 className='text-xs font-semibold'>{active.name}</h5>

                              </main>
                           )
                       })}

                 </div>
            </div>
          

        </div>

          
           <div className='h-full pt-80 overflow-y-scroll' >
               <div className='flex flex-col space-y-2' style={{"height":"80vh"}}>
                    {activeFriends.map((friend)=>{
                        return(
                            <Friend friend={friend}/>
                        )
                    })

                    }
                </div>

           </div>
          
       
    </div>
       
       {/* <ChatBox /> */}
    </>
  )
}



const activeFriends=[
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