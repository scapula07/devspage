import React from 'react'
import liveImg from "../../assets/live.jpeg"
import {BsFillCameraVideoFill} from "react-icons/bs"


export default function Events() {
  return (
    <div className='pt-20'>
        <h5 className='text-2xl font-medium'>Events</h5>

        <div className='overflow-x-scroll w-full py-8'>
                 <div className='flex items-center space-x-6 ' style={{width:"200%"}}>
                      {events.map((event)=>{
                          
                          return(
                              <div className='flex flex-col '>
                                  <div className='flex flex-col h-56 rounded-lg'>
                                     <main className='flex w-full justify-end -mb-10 px-4  relative z-10 '>        
                                        <button className='flex items-center bg-orange-700  space-x-1 px-2 py-1 rounded-lg'>
                                            <BsFillCameraVideoFill className='text-sm'/>
                                            <span className='font-semibold text-xs'>Live</span>
                                        </button>

                                     </main>
                                      <img src={event.img} className="w-full h-full rounded-lg"/>

                                  </div>
                                  <div className='flex flex-col'>
                                      <h5 className='text-normal  font-semibold'>{event.name}</h5>
                                      <h5 className='flex space-x-1'>
                                        <span className='text-slate-500 font-semibold'>{event.time}</span>
                                        <span className='text-slate-500 font-semibold'>{event.description}</span>
                                        
                                      </h5>

                                  </div>


                              </div>
                          )
                      })

                      }
                  </div>

          </div>
    </div>
  )
}


const events=[
    {
        img:liveImg ,
        name:"Workshop - On Devspage",
        time:"10:30",
         description:'Connected Hackathon'

    },

    {
        img:liveImg ,
        name:"Workshop - On Devspage",
        time:"10:30",
         description:'Connected Hackathon'

    },

    {
        img:liveImg ,
        name:"Workshop - On Devspage",
        time:"10:30",
         description:'Connected Hackathon'

    },
]
