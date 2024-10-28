import React from 'react'
import Header from './components/Header'
import Bio from './components/Bio'
import Gallery from './components/Gallery'

export default function page() {
  return (
    <>
      <div className="container mx-auto bg-white">
        <div className="flex flex-col justify-center items-center py-5 w-full">
            <Header/>
            <Bio/>
            <Gallery/>
        </div>
      </div>
    </>
  )
}
