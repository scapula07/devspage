import React from 'react'
import StorieImg from "../../assets/storieImg.png"
import {MdSend} from "react-icons/md"

export default function Stories() {
  return (
    <div className='w-full absolute bg-slate-800 pr-8 z-20'>
         <main className='flex w-full justify-between items-center '>
            <h5 className='text-2xl font-medium'>Stories</h5>
            <h5 className='text-red-800 font-semibold text-sm'>View all</h5>
         </main>

           <div className='overflow-x-scroll w-full py-4'>
                 <div className='flex items-center space-x-4 ' style={{width:"150%"}}>
                    <div className='flex flex-col space-y-1'>  
                        <main className='rounded-full flex justify-center h-14 w-14  items-center p-2 bg-orange-600'>
                        <MdSend className='text-4xl ' />
                        </main>       
                        <h5></h5>

                    </div>

                     
                      {
                        stories.map((story)=>{
                            return(
                                <div className='flex flex-col space-y-1'>
                                     <main className='rounded-full p-2 border-2 border-orange-600'>
                                        <img src={story?.img} className="h-12 w-12 rounded-full" />
                                     </main>

                                     <h5 className='font-semibold text-sm'>{story.name}</h5>

                                </div>
                            )
                        })
                      }
                 </div>

           </div>
     
    </div>
  )
}



const stories=[
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