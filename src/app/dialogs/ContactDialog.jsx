import React from 'react'
import {DialogPanel} from '@headlessui/react'

export default function ContactDialog() {
  return (
    <DialogPanel className="w-[min(60%,_25em)] h-fit space-y-4 border rounded-xl bg-white p-10 
        z-[150] text-black text-center font-light">
        <p className="font-bold">CONTACT</p>
        <p>
          If you'd like to contact me for any reason, please don't hesitate
          to reach out through my email (notbenwang@gmail.com).
           {/* or through my
          <a href="https://www.linkedin.com/in/benjamin-wang-7480201b5/" className='text-blue-400'> LinkedIn</a>. */}
        </p>
    </DialogPanel>
  )
}
