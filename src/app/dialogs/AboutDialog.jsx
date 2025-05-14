import React from 'react'
import { Description, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react'

export default function AboutDialog() {
  return (
    <>
        <DialogPanel className="w-[clamp(40em,_60%,_50em)] h-3/4 space-y-4 border bg-white p-12 z-[150] text-black text-left ] 
        overflow-y-scroll">
          <img src="/github_profile_pic.png" className="shadow-lg mt-[10%] w-full mx-auto"/>
          <div className="font-light mx-auto">
            <br/>
            <p className="text-3xl">
            Hi, I'm Ben Wang.  
            </p>
            <p className="">
              Rotational Engineer at Pennymac <br/>
              Aspiring Software Developer <br/> 
              Casual Artist + Musician <br/>
            </p>
            <br/>
            <div className="outline outline-1 p-2 outline-gray-400 shadow-md">

            <p className="font-bold text-xl text-left text-gray-800">
              Education
              </p>
              Bachelor of Science in Computer Science
            <p className="text-sm">
              University of Virginia (2025)
            </p>
            </div>
            <br/>
            <div className="outline outline-1 p-2 outline-gray-400 shadow-md">

              <p className="font-bold text-xl text-left text-gray-800">
              Other Interests
              </p>
              <p className="text-lg text-gray-800">
              • Drawing <br/>
              • Music <br/>
              • Games (recently playing a lot of Marvel Rivals) <br/>
              • Origami <br/>
              </p>
            </div>
          </div>
        </DialogPanel>
    </>

  )
}
