import React ,{useState,useRef, useEffect} from 'react'
import post1 from "../../assets/post1.jpeg"
import post2 from "../../assets/post2.jpeg"
import post3 from "../../assets/post3.jpeg"
import post4 from "../../assets/post4.jpeg"
import creatorImg from "../../assets/storieImg.png"
import { useMutation, useLazyQuery } from "@apollo/client";
import {BsThreeDots} from "react-icons/bs"
import { CREATE_REGISTER_ESSENCE_TYPED_DATA } from '../../graphql/essence'
import { RELAY_ACTION_STATUS,RELAY } from '../../graphql/relay'
import { useAuth } from '../../utils/auth'
import { v4 as uuidv4 } from "uuid";
import { CCProfileState } from '../../recoil/globalState'
import { useRecoilValue } from 'recoil'
import { uploadToIPFSFile,uploadToIPFSJson } from '../../utils/uploadToIpfs'
import CyberConnect, {Env  } from '@cyberlab/cyberconnect-v2';
  

const posts=[
    {
        img:post1,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        creator:creatorImg,
        creatorName:"Joel Jacobs"
    },
    {
        img:"",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        creator:creatorImg,
        creatorName:"Joel Jacobs"

    },
    {
        img:"",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        creator:creatorImg,
        creatorName:"Joel Jacobs"

    },
    {
        img:"",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        creator:creatorImg,
        creatorName:"Joel Jacobs"

    }
]




export default function UserPosts() {


    const ccProfile=useRecoilValue(CCProfileState)
    const [accessToken,setAccessToken]=useState()
  

    console.log(ccProfile,"ccprp")
    const [file, setFile] = useState();
    const [fileUrl, setFileUrl] = useState("");

    const [createRegisterEssenceTypedData] = useMutation(
        CREATE_REGISTER_ESSENCE_TYPED_DATA,

        {
            context: {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            },
          }
    );
    const [getRelayActionStatus] = useLazyQuery(RELAY_ACTION_STATUS);
    const [relay] = useMutation(RELAY,  {
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });
    const [postText,setText]=useState()

    const { connectWallet} =useAuth()
    
    const hiddenFileInput = useRef(null)

    const handleClick = event => {
     event.preventDefault()
     hiddenFileInput.current.click()
    }
   
    const handleChange = e => {
     const fileUploaded = e.target.files[0]
     if (fileUploaded) {
         setFileUrl(URL.createObjectURL(fileUploaded))
        setFile(fileUploaded)
         
      }
     // handleFile(fileUploaded)
   }  

    useEffect(()=>{
        setAccessToken(localStorage.getItem("accessToken"),"access")
    },[])
    
      const makePost=async()=>{
        console.log("make posting")
        const provider = await connectWallet();
    
         
        const fileHash= await uploadToIPFSFile(file)

        const postMetadata ={
            metadata_id: uuidv4(),
            version: "1.0.0",
            app_id: "devspage",
            lang: "en",
            issue_date: new Date(),
            content: postText,
            media: [],
            tags: [],
            image:  `https://gateway.pinata.cloud/ipfs/${fileHash}`,
            image_data:"",
            name: `@${ccProfile?.handle}'s post`,
            description: `@${ccProfile?.handle}'s post on CyberConnect Content app`,
         
        };
        const signer = provider.getSigner();
	    const address = await signer.getAddress();
        
      
        console.log(fileHash,"avaterhash")
        const ipfsHash = await uploadToIPFSJson(postMetadata,fileHash);
        console.log(ipfsHash,"hash")

        const typedDataResult = await createRegisterEssenceTypedData({
            variables: {
                input: {
                  
						profileID:ccProfile?.profileID,
						
						name: "Post",
					
						symbol: "POST",
                        tokenURI: `https://gateway.pinata.cloud/ipfs/${ipfsHash}`,
					
						middleware:{
                            collectFree:true
                        },
								
						
					
						transferable: true,
                },
            },
        });

        console.log(typedDataResult,"result")


    const typedData =typedDataResult.data?.createRegisterEssenceTypedData?.typedData;
    const message = typedData.data;
    const typedDataID = typedData.id;
    const fromAddress = await signer.getAddress();
    const params = [fromAddress, message];
    const method = "eth_signTypedData_v4";
    const signature = await signer.provider.send(method, params);

    const relayResult = await relay({
        variables: {
            input: {
                typedDataID: typedDataID,
                signature: signature,
            },
        },
    });

    const relayActionId = relayResult.data.relay.relayActionId;
    console.log(relayActionId,"action id")

    const relayingPost = {
        createdBy: {
            handle: ccProfile?.handle,
            avatar: ccProfile?.avatar,
            metadata: ccProfile?.metadata,
            profileID: ccProfile?.profileID,
        },
        essenceID: 0, // Value will be updated once it's indexed
        tokenURI: `https://gateway.pinata.cloud/ipfs/${ipfsHash}`,
        isIndexed: false,
        isCollectedByMe: false,
        collectMw: undefined,
        relayActionId: relayActionId,
    };
        console.log(relayingPost,"posts")
      }
     
  return (

    <div className='h-full py-10  relative'  >

       <main className='flex py-2 items-center absolute bg-slate-800 justify-between w-full space-x-4'>
          <div className='flex flex-col w-full space-y-1'>
          {fileUrl.length >0&&<img src={fileUrl} className="w-56 h-14 rounded-lg"/>}
            <textarea className='bg-slate-900 py-1 w-full text-white px-2' placeholder='Write a post'
            onChange={(e)=>setText(e.target.value)}
          />
          <h5 className='text-sm text-red-500' onClick={handleClick }>Add media</h5>
           <input 
            className='hidden'
            type="file"
            ref={hiddenFileInput}
            onChange={handleChange}
                    />
          </div>
          <button className='bg-orange-700 px-4 py-2 rounded-xl text-sm font-semibold'
            onClick={makePost}
          >Publish</button>
       </main>
    <div className="grid grid-flow-row grid-cols-1 gap-y-8 py-20 w-full overflow-y-scroll" style={{"height":"80vh"}}>
     
    { posts.map((post)=>{
       return(
 
         <div className='border-b border-slate-900 rounded-md py-6'>
             <div className='flex flex-col space-y-2'>
                 <main className='flex justify-between w-full items-center'>
                     <div className='flex space-x-4 items-center'>
                         <img src={post.creator}  className="h-14 w-14"/>
                         <h5 className='flex flex-col'>
                             <span className='text-lg font-semibold'>{post.creatorName}</span>
                             <span className='text-slate-500'>{"2 hours ago"}</span>

                         </h5>
                     </div>
                     <BsThreeDots className='text-xl'/>
                 </main> 

                 <main className='flex-col flex space-y-4'>
                    <p>{post.description} </p>

                    <img src={post.img}/>


                 </main>
     
             </div>
     
 
        </div>


       )
    })
  

    }

   </div>
   </div>
  )
}
