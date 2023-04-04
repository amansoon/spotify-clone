import React from 'react'
import Sidebar from '../components/Sidebar'
import Player from '../components/Player'

type Props = {
    children?: React.ReactNode
}

function Page({children}: Props) {
  return (
    <div className='flex h-[100vh]'>
       <Sidebar />
       <Player />

       <div className='h-[100vh] overflow-auto w-full bg-black-1'>
          {children}
       </div>
    </div>
  )
}

export default Page