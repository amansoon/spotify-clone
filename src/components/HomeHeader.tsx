import React from 'react'
import Header from './Header'

type Props = {}

function HomeHeader({}: Props) {
  return (
    <Header>
        <button className='h-[32px] text-sm px-4 bg-black rounded-full outline outline-1 outline-gray ml-auto max-[1024px]:hidden'>
           Upgrade
        </button>
    </Header>
  )
}

export default HomeHeader