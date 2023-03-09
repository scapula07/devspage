import React, { useEffect,useState,useMemo } from 'react'
import {TbArrowNarrowLeft} from "react-icons/tb"
import {GoKebabVertical,GoFileSubmodule} from "react-icons/go"
import StorieImg from "../../assets/storieImg.png"
import { arrayify } from '@ethersproject/bytes';
import {
    NotifiContext,
    NotifiInputFieldsText,
    NotifiInputSeparators,
    NotifiSubscriptionCard,
  } from '@notifi-network/notifi-react-card';
  import '@notifi-network/notifi-react-card/dist/index.css';
  import { useAuth } from '../../utils/auth';
  import { useNotifiClient } from '@notifi-network/notifi-react-hooks';

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
 
    const {connectWallet}=useAuth()
 
    const signer = useMemo(async() => {
        const provider = await connectWallet();
        const signer = await provider.getSigner();
        
        console.log(signer,"smm")
        return  signer;
      }, []);
    
    console.log(signer,"sss")

  

  



    

    const inputLabels= {
        label: {
          email: 'Email',
          sms: 'Text Message',
          telegram: 'Telegram',
        },
        placeholderText: {
          email: 'Email',
        },
      };

      const inputSeparators = {
        smsSeparator: {
          content: 'OR',
        },
        emailSeparator: {
          content: 'OR',
        },
      };
    
  return (
    <>
    {/* <div>
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


          
         
       
    </div> */}
  
     <NotifiContext
      dappAddress="junitest.xyz"
        env="Development"
        signMessage={async (message) => {
        const result = await signer?.signMessage(message);
        return arrayify(result);
        }}
        walletPublicKey="0x7b158840956385dE998fC306053dBEE0A007dB3b"
        walletBlockchain="ETHEREUM" 
        >
        <NotifiSubscriptionCard
        cardId="71562316475a4171ae9c980adaefab7d"
        inputLabels={inputLabels}
        inputSeparators={inputSeparators}
        darkMode //optional
        />
        </NotifiContext>
       
    
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