import React from 'react'

export default function Header() {
  return (
    <div className="flex justify-between items-center w-full px-4 py-2 text-black font-light text-2xl">


        <a href="../art" className="text-left hover:text-gray-500 transition ease-in-out">
            Benjamin Wang
        </a>
        <a href="https://www.artstation.com/binji_man" className="text-left hover:text-gray-500 transition italic text-md font-extralight ease-in-out">
            @binjiman
        </a>
    
    </div>
  )
}
