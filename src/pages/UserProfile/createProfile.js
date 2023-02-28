import React,{useState,useRef} from 'react'
import  bgImg from "../../assets/post4.jpeg"
import {AiFillCamera} from "react-icons/ai"
import { ethers } from "ethers";
import ProfileNFtABi from "../../ABI/ccProfile.json"
import { uploadToIPFSFile,uploadToIPFSJson } from '../../utils/uploadToIpfs';
import { useAuth } from '../../utils/auth';
import Web3 from "web3";


 const ccProfileNftContract="0x57e12b7a5f38a7f9c23ebd0400e6e53f2a45f271"
 const profile_nft_operator="0x85AAc6211aC91E92594C01F8c9557026797493AE"

export default function CreateProfile() {
   const web3 = new Web3(window.ethereum)

   const {connectWallet} =useAuth()
   const [username,setUsername]=useState()
   const [name,setName]=useState()
   const [email,setemail]=useState()
   const [bio,setBio]=useState()
   const [file, setFile] = useState();
   const [fileUrl, setFileUrl] = useState("");
   console.log(file)
  
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


   const createProfile = async () => {
      try{

        const provider = await connectWallet();
        const signer = provider.getSigner();
        const address = await signer.getAddress();

        const profileMetadata={
            name: name,
            bio: bio,
            handle: username,
            email:email,
            version: "1.0.0",
       }
       const avaterHash= await uploadToIPFSFile(file)
       console.log(avaterHash,"avaterhash")
       const ipfsHash = await uploadToIPFSJson(profileMetadata,avaterHash);
       console.log(ipfsHash,"hash")

       const  contract = new web3.eth.Contract(
        ProfileNFtABi,
        ccProfileNftContract
       )
      
   

   const gas = await contract.methods.createProfile(
         
            {
                to: address,
                handle:username,
                avatar: `https://gateway.pinata.cloud/ipfs/${avaterHash}` ,
                metadata: ipfsHash,
                operator:profile_nft_operator,
            },
         
            0x0,
          
            0x0
         ).estimateGas({from:address})
  console.log(gas)
    const tx = await contract.methods.createProfile(
         
            {
                to: address,
                handle:username,
                avatar: `https://gateway.pinata.cloud/ipfs/${avaterHash}` ,
                metadata: ipfsHash,
                operator:profile_nft_operator,
            },
         
            0x0,
          
            0x0
         ).send({from:address,gas:gas })

    console.log(tx,"tx")
      }catch(e){
          console.log(e)
      }
       
       
   }
  return (
    <div className='py-20 px-4 w-full'>
          <h5 className='text-2xl font-semibold'>Create profile</h5>
          
          <div className='flex flex-col w-full items-center py-8 space-y-6'>
              <div className='bg-orange-500 w-56 h-56 rounded-full flex justify-center items-center '>
                {fileUrl==""?
                 <AiFillCamera className='text-white text-7xl'/>
                     :
                     <img src={fileUrl} className="w-full h-full rounded-full"/>
                  }
              </div>
              
              <h5 className='text-red-800 text-sm font-semibold hover:text-white'
                  onClick={handleClick }
                   >Add a profile photo</h5>
                   <input 
                      className='hidden'
                      type="file"
                      ref={hiddenFileInput}
                      onChange={handleChange}
                    />
          </div>


          <div className='flex flex-col w-full space-y-8'>
              <main className='flex items-center w-full justify-between'>
                 <h5>Username</h5>
                 <input className='border-0 bg-slate-800 text-white text-right'
                   placeholder='Unnamed'
                   onChange={(e)=>setUsername(e.target.value)}
                 />

              </main>
              <main className='flex items-center w-full justify-between'>
                 <h5>Full name</h5>
                 <input className='border-0 bg-slate-800 text-white text-right'
                   placeholder='Unnamed'
                   onChange={(e)=>setName(e.target.value)}
                 />

              </main>
              <main className='flex items-center w-full justify-between'>
                 <h5>Email</h5>
                 <input className='border-0 bg-slate-800 text-white text-right'
                   placeholder='@gmail.com'
                   onChange={(e)=>setemail(e.target.value)}
                 />

              </main>

              <main className='flex items-center w-full justify-between'>
                 <h5>About </h5>
                 <textarea className='border-0 bg-slate-800 text-white text-right'
                   placeholder='About me'
                   onChange={(e)=>setBio(e.target.value)}
                 />

              </main>

               <main className='flex justify-center py-14'>
                   <button className='text-red-800 text-xl font-semibold'
                      onClick={ createProfile }
                   >Done</button>

               </main>
         
          </div>

        
 
    </div>
  )
}
