import React ,{useState} from 'react'
import bgImg from "../../assets/post4.jpeg"
import {TbArrowNarrowLeft} from "react-icons/tb"
import { useMutation } from "@apollo/client";
import { LOGIN_GET_MESSAGE, LOGIN_VERIFY } from '../../graphql/auth';
import { AddressState,AccessTokenState,UserState } from '../../recoil/globalState';
import { useRecoilState } from 'recoil';
import { useAuth } from '../../utils/auth';
import { logIn } from '../../firebase';
import { useNavigate } from "react-router-dom";
import { auth } from '../../firebase';
import { doc,getDoc,setDoc }  from "firebase/firestore";


export default function SignIn() {
    let navigate = useNavigate();

    const [address,setAddress]=useRecoilState(AddressState)
    const [accessToken,setAccessToken]=useState("")
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [userId,setUserId]=useRecoilState(UserState)


    const [loginGetMessage] = useMutation(LOGIN_GET_MESSAGE);
	const [loginVerify] = useMutation(LOGIN_VERIFY);
     
    const { connectWallet} =useAuth()
     
    const getAccessToken = async () => {
        try{
            const provider = await connectWallet();
            console.log(provider,"pppp")
            const signer = provider.getSigner();

            const account = await signer.getAddress();
            console.log(account)
            setAddress(account)

            const messageResult = await loginGetMessage({
				variables: {
					input: {
						address: account,
						domain: "test.com",
					},
				},
			});

             console.log(messageResult,"msgres")

             const message = messageResult?.data?.loginGetMessage?.message;

			/* Get the signature for the message signed with the wallet */
			const signature = await signer.signMessage(message);
              console.log(signature,"sig")

              const accessTokenResult = await loginVerify({
				variables: {
					input: {
						address: account,
						domain: "test.com",
						signature: signature,
					},
				},
			});
			const accessToken = accessTokenResult?.data?.loginVerify?.accessToken;
            localStorage.setItem("accessToken",accessToken)
            console.log(accessToken,"access")
            setAccessToken(accessToken);
        }catch(e){
            console.log(e)
        }
    }


    const siginIn =async()=>{
         
        const userCredential  = await logIn(email,password)
        const user=userCredential?.user
        // setUserId(user?.uid)
        getAccessToken()
        navigate('/home')
    }

  return (
    <div className="relative text-white bg-slate-800 relative h-screen w-screen overflow ">
    <div className="h-full w-full  bg-black  opacity-70  z-10 inset-0 ">
       <img src={bgImg} className="w-full h-full" />
           <div className='flex w-full justify-between items-center px-4 py-6 absolute  z-30 '>
               <TbArrowNarrowLeft className='text-3xl text-white'/>
                       

           </div>

         <div className='flex flex-col z-30 absolute w-full  h-full  py-32  top-0 px-4 space-y-12'>
              <main className='flex flex-col space-y-1'>
                 <h5 className='text-3xl w-full text-center font-semibold text-white flex '>Welcome back</h5>
                 <p className='font-semibold'>Login to your account</p>
               </main>

               <main className='flex flex-col space-y-6'>
                    {/* <input className='py-3 px-5 rounded-full text-sm  font-semibold' placeholder="Username"/> */}
                    <input className='py-3 px-5 rounded-full text-sm  font-semibold text-black' placeholder="Email"
                          onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input className='py-3 px-5 rounded-full text-sm  font-semibold text-black' placeholder="Password"
                         onChange={(e)=>setPassword(e.target.value)}
                     />

               </main>

                <main className='flex flex-col space-y-4'>
                      <button className='bg-white py-2 text-lg font-semibold rounded-xl' style={{color:"#F54B64"}}
                        onClick={siginIn}
                      >Continue</button>
                     
                </main> 

                <main className='w-full flex flex-col space-y-6'>
                     <h5 className='text-center text-xl font-semibold' >Or</h5>

                     <button className='py-3 text-sm font-semibold rounded-xl' style={{"backgroundColor":"#F54B64"}}
                     
                     >Continue with Google
                     
                     </button>
                   
                </main>


                <h5 className='text-center text-xl font-semibold' >Forget your Password?</h5>


         </div>
    </div> 

</div>
  )
}
