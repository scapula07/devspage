import React from 'react'
import bgImg from "../../assets/post4.jpeg"

export default function LandingPage() {
  return (
      <div className="relative text-white bg-slate-800 relative h-screen w-screen overflow ">
              <div className="h-full w-full  bg-black  opacity-70  z-10 inset-0 ">
                  <img src={bgImg} className="w-full h-full" />
                   

                    <div className='flex flex-col z-30 absolute w-full  h-full  justify-center  top-0 px-4 space-y-12'>
                         <main className='flex flex-col space-y-4'>
                            <h5 className='text-6xl font-semibold text-white flex '>Devspage</h5>
                             
                             <p className='text-medium font-semibold '>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}</p>
                          </main>

                           <main className='flex flex-col space-y-4'>
                                 <button className='bg-white py-2 text-lg font-semibold rounded-xl' style={{color:"#F54B64"}}>Log In</button>
                                 <button className='py-2 text-lg font-semibold rounded-xl' style={{"backgroundColor":"#F54B64"}}>Sign Up</button>
                              
                           </main>


                    </div>
               </div> 

      </div>
  )
}
