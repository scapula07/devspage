import React,{useState} from 'react'
import userImg from "../../../assets/storieImg.png"
import {AiFillCloseCircle,AiOutlineClose,AiOutlineComment} from "react-icons/ai"
import Modal from '../../../components/Modal'
import {BsChatDots} from "react-icons/bs"
import {RiShareForwardFill} from "react-icons/ri"
import {GoComment} from "react-icons/go"

export default function LiveStudio() {
    const [trigger,setTrigger]=useState(true)
  return (
    <>
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




                <div className='absolute w-full bottom-0 h-20  '>
                     <main className='flex items-center space-x-2 px-4 py-2 '>
                        <BsChatDots className='text-lg '/>
                        <h5>Comments will appear here...</h5>
                      </main>

                     <main className='flex bg-slate-900 h-10 w-full justify-between px-4 items-center'>
                        <div className='flex items-center space-x-4'>
                             <RiShareForwardFill className='text-2xl font-semibold' />
                             <GoComment  className='text-2xl font-semibold' />

                        </div>

                        <button className='bg-orange-600 text-sm font-semibold px-4 rounded-lg py-1 font-semibold'> End</button>
                         
                     </main>

                </div>
            </div>

      </div>

        <Modal trigger={trigger} cname="h-1/4 w-3/4 shadow rounded-lg py-4 px-8 text-white">
                    <main className='flex justify-end'>
                      <button onClick={()=>setTrigger(false)}><AiOutlineClose className="text-md font-thin" /></button>
                    </main>
                    {
                          <div className='flex flex-col items-center space-y-4 py-2'>
                            
                                  <input className='bg-slate-900 px-4 py-1 rounded-md text-sm font-semibold w-full' placeholder="Stream name" />
   
                          

                                    <main className='flex space-x-4'>
                                        <h5 className='flex space-x-1 items-center '>
                                            <span className='text-sm font-semibold'>Stream now</span>
                                            <input type="radio"/>
                                        </h5>

                                        <h5 className='flex space-x-1 items-center '>
                                            <span className='text-sm font-semibold'>Stream later</span>
                                            <input type="radio"/>
                                        </h5>

                                    </main>

                                      <main className='flex items-center space-x-4'>
                                         <h5 className='text-sm font-semibold'>Thumbnail</h5>
                                         <button className='bg-orange-600 px-4  rounded-lg text-sm py-1'>Upload</button>

                                      </main>

                                      <button className='bg-slate-100 text-slate-900 px-4 py-1 text-sm font-semibold rounded-md'>  Go live</button>

 
                           </div>
                        
                    }
                    


        </Modal>

      </>
  )
}
