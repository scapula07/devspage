import React,{useEffect,useState} from 'react'
import {TbArrowNarrowLeft} from "react-icons/tb"
import {GoKebabVertical,GoFileSubmodule,GoPrimitiveDot} from "react-icons/go"
import {MdAdd} from "react-icons/md"
import StorieImg from "../../assets/storieImg.png"
import {BsDot} from "react-icons/bs"
import Friend from './friends'
import ChatBox from './ChatBox'
import { useAuth } from '../../utils/auth'
import { Client } from '@xmtp/xmtp-js'
import { Link } from 'react-router-dom'


export default function Messenger() {
    
    const [client,setClient]=useState()
    const { connectWallet} =useAuth()
  
    const [friends,setFriends]=useState()

   
    useEffect(()=>{

        const initClient=async()=>{
          
            const provider = await connectWallet();
        
            const signer = provider.getSigner();

            const account = await signer.getAddress();
     

            const xmtp = await Client.create( signer)
            setClient( xmtp )
            console.log( xmtp,"xxxxx")
         
        }
        initClient()
      },[])

      useEffect(()=>{
        const fetchAllConv=async()=>{
          const conversations = client.conversations
          const allConversations = await conversations.list()

          console.log(allConversations,"")
          setFriends(allConversations)
        }
        fetchAllConv()
       },[])

     console.log(friends,"ff")

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
                    {friends?.map((conv)=>{
                        return(
                            <Link to="/chats"  
                              state={{
                                   conv,
                                   client,
                                  }}
                              >
                                   <Friend friend={conv} />
                            
                             </Link>
                          
                        )
                    })

                    }
                </div>

           </div>
          
       
    </div>
       
   
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