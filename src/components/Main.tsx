import React from 'react'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
}

export default function Main({children}: Props) {
  return (
    <main className='relative isolate col-start-2 col-end-3 row-start-1 row-end-2 row-span-1 overflow-auto bg-black-1'>
       {children}
      <Footer />
    </main>
  )
}