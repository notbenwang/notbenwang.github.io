import React from 'react'
import {DialogPanel} from '@headlessui/react'

export default function ContactDialog() {
  return (
    <DialogPanel className="w-[min(90%,_40em)] h-5/6 overflow-y-scroll space-y-4 border bg-white p-10 
        z-[150] text-black font-light">
        <p className=" text-2xl">Contact</p>
        <img src="sk-112.png" className="shadow-xl outline outline-1 outline-gray-400"/>
        <p>
          If you'd like to contact me, the most reliable method is through my email 
          at <a className="underline">notbenwang@gmail.com</a>.
           {/* or through my
          <a href="https://www.linkedin.com/in/benjamin-wang-7480201b5/" className='text-blue-400'> LinkedIn</a>. */}
        </p>
    </DialogPanel>
  )
}
