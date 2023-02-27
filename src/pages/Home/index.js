import React from 'react'
import Stories from './stories'
import Events from './events'
import Posts from './Posts'



export default function Home() {
  return (
    <div className='w-full ' style={{"height":"100vh"}}>

        <div className='w-full'>
            <Stories />
            <div className='py-28'>
              <Events />

              <Posts />
            </div>
             

         
        </div>

    </div>
  )
}
