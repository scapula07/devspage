import React from 'react'

export default function Friend({friend}) {
  return (
    <div className='flex w-full space-x-4 items-center rounded-sm bg-slate-900 px-4 py-3'>
        <main className='flex flex-col items-center'>
            <img src={friend.img} className="w-16 h-16" />
            <button className='rounded-full p-1 px-2 -mt-6 ml-10 text-xs bg-amber-500'>{"1"}</button>
        </main>
        <main className='flex w-full justify-between'>
            <div className='flex flex-col space-y-1'>
                <h5 className=' font-semibold'>{friend?.peerAddress?.slice(0,7)+ "..." +friend?.peerAddress?.slice(-4)}</h5>
                <h5 className='text-slate-200'>{"Hey!How's it going?"}</h5>
            </div>
            
            <h5 className='font-smeibold text-slate-500 text-sm'>{"04:04AM"}</h5>

        </main>

    </div>
  )
}
