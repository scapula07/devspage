import React,{useState} from 'react'
import { useLocation,useParams} from "react-router-dom";




export default function ProjectDetails() {
  const location =useLocation()
  const [locationState,setlocationState] = useState(location.state)
  const {community}=locationState
  return (
    <div className='w-full py-28'>

      <div className='flex flex-col items-center w-full'>
          <main className='flex flex-col items-center w-full space-y-4'>
            <img src={community.img} className="rounded-full h-44 w-44"/>
            <h5 className='text-2xl font-semibold'>{community.name}</h5>
           </main>

           <main className='flex flex-col py-10  items-center space-y-10'>
              <button className='bg-orange-700 px-10 text-sm font-semibold py-2 rounded-full'>Join Team</button>
                <p className='text-center w-4/5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt.

               </p>
           </main>


      </div>

    </div>
  )
}
