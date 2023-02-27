import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import post1 from "../../../assets/post1.jpeg"
import post2 from "../../../assets/post2.jpeg"
import post3 from "../../../assets/post3.jpeg"
import post4 from "../../../assets/post4.jpeg"
import creatorImg from "../../../assets/storieImg.png"


export default function Posts() {
  return (
        <div className='py-4'>
            <div className='overflow-x-scroll w-full py-8'>
                 <div className='flex items-center space-x-10 ' style={{width:"120%"}}>
                    <Link to="/">
                    <h5 className='text-4xl font-normal text-slate-400 hover:text-white hover:text-5xl hover:font-light'>Popular</h5> 
                    </Link> 
                    <Link to="latest-posts">
                    <h5 className='text-4xl font-semibold text-slate-400 hover:text-white hover:text-5xl hover:font-light '>Latest</h5> 
                    </Link> 
                    <Link to="friends-posts">
                    <h5 className='text-4xl font-semibold text-slate-400 hover:text-white hover:text-5xl hover:font-light' >Friends</h5> 
                    </Link>
                  </div>
                 </div>

                 <div>
                    <Outlet context={[posts]}/>
                 </div>
            
        </div>
    )
}


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

    },
]