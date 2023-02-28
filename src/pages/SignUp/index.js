import React from 'react'
import bgImg from "../../assets/post4.jpeg"
import {TbArrowNarrowLeft} from "react-icons/tb"

export default function SignUp() {
  return (
    <div className="relative text-white bg-slate-800 relative h-screen w-screen overflow ">
     <div className="h-full w-full  bg-black  opacity-70  z-10 inset-0 ">
        <img src={bgImg} className="w-full h-full" />
            <div className='flex w-full justify-between items-center px-4 py-6 absolute  z-30 '>
                <TbArrowNarrowLeft className='text-3xl text-white'/>
                        

            </div>

          <div className='flex flex-col z-30 absolute w-full  h-full  py-32  top-0 px-4 space-y-12'>
               <main className='flex flex-col space-y-4'>
                  <h5 className='text-3xl w-full text-center font-semibold text-white flex '>Create an account</h5>
                </main>

                <main className='flex flex-col space-y-6'>
                     {/* <input className='py-3 px-5 rounded-full text-sm  font-semibold' placeholder="Username"/> */}
                     <input className='py-3 px-5 rounded-full text-sm  font-semibold' placeholder="Email"/>
                     <input className='py-3 px-5 rounded-full text-sm  font-semibold' placeholder="Password"/>

                </main>

                 <main className='flex flex-col space-y-4'>
                       <button className='bg-white py-2 text-lg font-semibold rounded-xl' style={{color:"#F54B64"}}>Continue</button>
                      
                 </main> 

                 <main className='w-full flex flex-col space-y-6'>
                      <h5 className='text-center text-xl font-semibold' >Or</h5>

                      <button className='py-3 text-sm font-semibold rounded-xl' style={{"backgroundColor":"#F54B64"}}>Continue wit Cyberconnect</button>
                    
                 </main>


          </div>
     </div> 

</div>
  )
}
