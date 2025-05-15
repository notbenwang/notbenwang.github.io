import React from 'react'
import {DialogPanel} from '@headlessui/react'

export default function ContactDialog() {
  return (
    <DialogPanel className="w-[min(90%,_40em)] h-[min(90%,_50em)] overflow-y-scroll space-y-4 border bg-white p-10 
        z-[150] text-black font-light">
        <p className=" text-2xl">Contact</p>
        <p>
          If you'd like to contact me, the most reliable method is through my email 
          at <a className="underline">notbenwang@gmail.com</a>.
         </p>
        <br/>
        <img src="sk-112.png" className="shadow-lg w-3/4 mx-auto outline outline-1 outline-gray-400"/>
        <br/>
    </DialogPanel>
  )
}
