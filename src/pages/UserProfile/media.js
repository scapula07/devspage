import React ,{useState} from 'react'
import Modal from '../../components/Modal'
import { useMutation, useLazyQuery } from "@apollo/client";
import {BsThreeDots} from "react-icons/bs"
import { CREATE_REGISTER_ESSENCE_TYPED_DATA } from '../../graphql/essence'
import { RELAY_ACTION_STATUS,RELAY } from '../../graphql/relay'
import { useAuth } from '../../utils/auth'
import { v4 as uuidv4 } from "uuid";


export default function Media() {
    const [createRegisterEssenceTypedData] = useMutation(
        CREATE_REGISTER_ESSENCE_TYPED_DATA
    );
    const [getRelayActionStatus] = useLazyQuery(RELAY_ACTION_STATUS);
    const [relay] = useMutation(RELAY);
    const [postText,setText]=useState()

    const { connectWallet} =useAuth()
    
    const handleOnClick = async () => {

        const provider = await connectWallet();

        const postMetadata ={
            metadata_id: uuidv4(),
            version: "1.0.0",
            app_id: "cyberconnect-bnbt",
            lang: "en",
            issue_date: new Date().toISOString(),
            content: postText,
            media: [],
            tags: [],
            image:  "",
            image_data:"",
            name: ``,
            description: ``,
         
        };
      }
  return (
    <>
    <div className='h-full py-10  relative'  >
    <main className='flex py-2 items-center absolute bg-slate-800 justify-between w-full space-x-4'>
       <h5 className='text-xl font-semibold'>Videos</h5>
       <button className='bg-orange-700 px-4 py-2 rounded-xl text-sm font-semibold'>Upload</button>
    </main>
        <div className="grid grid-flow-row grid-cols-1 gap-y-8 py-14 w-full overflow-y-scroll" style={{"height":"80vh"}}>
  


         </div>
     </div>

        <Modal>

       </Modal>

     </>
  )
}
