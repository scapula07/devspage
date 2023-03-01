import React,{useState,useRef,useEffect} from 'react'
import userImg from "../../../assets/storieImg.png"
import {AiFillCloseCircle,AiOutlineClose,AiOutlineComment} from "react-icons/ai"
import Modal from '../../../components/Modal'
import {BsChatDots} from "react-icons/bs"
import {RiShareForwardFill} from "react-icons/ri"
import {GoComment} from "react-icons/go"
import { useCreateStream, Player ,ThemeConfig } from '@livepeer/react';
const { Client } = require('@livepeer/webrtmp-sdk')

export default function LiveStudio() {
    const client = new Client()

    const inputEl = useRef(null)
    const videoEl = useRef(null)
    const theStream = useRef(null)

   
    useEffect(() => {
        ;(async () => {
          videoEl.current.volume = 0
    
          theStream.current = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
          })
    
          videoEl.current.srcObject = theStream.current
          videoEl.current.play()
        })()
      })
    

    const [trigger,setTrigger]=useState(true)

    const [streamName, setStreamName] = useState('');
    const {
        mutate: createStream,
        data: stream,
        status,
      } = useCreateStream({ name: streamName,record:true });
     

      const goLive=async()=>{
        createStream?.();
        setTrigger(false)

        const streamMedia= await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
          })
        
        
          const session = client.cast(streamMedia, stream?.streamKey)
          session.on('open', () => {
            console.log('Stream started.')
          })
        
        //   session.on('close', () => {
        //     console.log('Stream stopped.')
        //   })
        
        //   session.on('error', (err) => {
        //     console.log('Stream error.', err.message)
        //   })

      
      }
      console.log(stream,"cccccc")

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
              
               <div className='h-screen flex justify-center'>
                     {/* <Player 
                          title={stream?.name}
                          playbackId={stream?.playbackId}
                          autoPlay
                          muted
                          ref={videoEl}
                       /> */}

                      <video className="App-video" ref={videoEl} />
               </div>



                <div className='absolute w-full bottom-0 h-20 z-30 '>
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
                            
                                  <input className='bg-slate-900 px-4 py-1 rounded-md text-sm font-semibold w-full' placeholder="Stream name"
                                    onChange={ (e)=>setStreamName(e.target.value)}
                                  />
   
                          

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
                                         <input placeholder='Thumbnail ' className='text-sm font-semibold px-2 bg-slate-800 text-center py-1' />
                                         <button className='bg-orange-600 px-4  rounded-lg text-sm py-1'>Upload</button>

                                      </main>

                                      <button className='bg-slate-100 text-slate-900 px-4 py-1 text-sm font-semibold rounded-md'
                                        onClick={goLive}
                                      > Go live
                                      </button>

 
                           </div>
                        
                    }
                    


        </Modal>

      </>
  )
}
