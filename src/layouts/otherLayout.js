import React from 'react'
import "./layout.css"
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function OtherLayout({children}) {
  return (
    <div className='bg-slate-800 h-screen w-screen relative px-4 py-2 overflow-x-hidden overflow-y-hidden  text-white' >
       
       
         <main className='overflow-y-scroll overflow-x-hidden flex w-full' style={{"height":"90vh"}}>
            {/* <div className='fixed top-0 left-0 w-1/2 bg-white z-10 h-full' >

            </div> */}
            <div className=' w-full'>
              {children}
            </div>
           
         </main>
      
        <div className='absolute  w-full bottom-0 py-4 overflow-x-hidden'>
            <Footer />
        </div>
      

    </div>
  )
}
