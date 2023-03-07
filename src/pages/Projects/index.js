import React ,{useState} from 'react'
import cyberconnectImg from "../../assets/cyberconnect.png"
import ethImg from "../../assets/ethereum.jpeg"
import livepeerImg from "../../assets/livepeer.jpeg"
import bnb from "../../assets/bnb.jpeg"
import devImg from "../../assets/storieImg.png"
import Modal from '../../components/Modal'
import {AiOutlineClose } from "react-icons/ai"
import { Link } from 'react-router-dom'

const Project=({community})=>{
 

  return(
    
    <div className='flex flex-col bg-slate-900 rounded-lg py-4 px-4 space-y-4'>
         <img src={community.img} className="rounded-full w-16 h-16" />
         <h5>{community.name}</h5>

         <div className='flex py-4'>
           {[1,2,3].map(()=>(
              <img src={devImg} className="h-6 w-6 rounded-full -ml-1"/>
            ))
           }

         </div>

        

    </div>
  )
}


export default function Projects() {
  const [trigger,setTrigger]=useState(false)
  return (
    <>
    <div className='relative'>
        <div className='flex w-full items-center justify-between absolute '>
           <h5 className='text-lg font-semibold '>Explore </h5>
          
           <h5 className='text-red-700' onClick={()=>setTrigger(true)}>Create team </h5>
        </div>
        <div className='flex justify-center w-full'>
         <div className='grid grid-flow-row grid-cols-2 gap-8 w-full py-20' style={{"height":"80vh"}}> 
            {communities.map((community)=>{
              return(
                <Link to={`/project/${community.name}`}
                state={{
                  community
                    }}
                >
                <Project community={community}/>
                </Link>
              )
            })

            }  



        </div>
        </div>

    </div>
    <Modal trigger={trigger}  cname="h-1/4 w-3/4 shadow rounded-lg py-4 px-8 text-white">
        <main className='flex justify-end'>
            <button onClick={()=>setTrigger(false)}><AiOutlineClose className="text-md font-thin" /></button>
         </main>



    </Modal>
    </>
  )
}



const communities=[
 {
   img:bnb,
   name:"Binance "
 },
 {
  img:cyberconnectImg ,
  name:"Cyberconnect"
},
{
  img: ethImg  ,
  name:"Ethereum"
},
{
  img:livepeerImg   ,
  name:"Livepeer"
},



]