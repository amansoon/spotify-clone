import React from 'react'
import Sidebar from '../components/Sidebar'

type Props = {
    children?: React.ReactNode
}

function Page({children}: Props) {
  return (
    <div className='flex h-[100vh]'>
       <Sidebar />
       {children}
    </div>
  )
}

export default Page