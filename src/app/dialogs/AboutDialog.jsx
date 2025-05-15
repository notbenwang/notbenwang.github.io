import React from 'react'
import { Description, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react'

export default function AboutDialog() {
  return (
    <>
        <DialogPanel className="w-[clamp(40em,_60%,_50em)] h-3/4 space-y-4 border bg-white p-12 z-[150] text-black text-left ] 
        overflow-y-scroll">
          <img src="/github_profile_pic.png" className="w-full mx-auto"/>
          <p>
            <p className="font-light text-4xl">
            Ben Wang  
            </p>
            <p className="font-extralight text-sm">
              Rotational Engineer at Pennymac <br/>
              Aspiring Software Developer <br/> 
              Casual Artist and Musician <br/>
            </p>
          </p>
          <div className="font-light mx-auto">
            
          
            <div className="outline outline-1 p-2 outline-gray-400">
            <p className="font-semibold text-xl text-left text-gray-800">
              Education
              </p>
              Bachelor of Science in Computer Science
            <p className="text-sm">
              University of Virginia (2025)
            </p>
            </div>
            <br/>
            A little about me; I love to imagine, I love to create, I love to solve problems, and I love to code
            because it allows me to do all of those things for a living. As a developer, I'm  passionate about building
            tools, software, and technologies that merge the creative with engineering, and the portfolio you're in now is the result of that passion.
            <br/><br/>
            I also do things outside of programming, so feel free to check out any of my other work if you're interested.
            <br/><br/>
            <div className="outline outline-1 p-2 outline-gray-400">

              <p className="font-semibold text-lg text-left text-gray-800">
              Other Stuff I do
              </p>
              <p className=" text-gray-800">
              • I draw (all art on this portfolio is made by me); you can see some of my work <a href="/art" target="_blank" className="text-blue-400 underline">here</a>.
              <br/>
              • Music (Piano, Bass, dabble with Garage Band)<br/>
              • Games (peak GM Marvel Rivals) <br/>
              • Origami enthusiast <br/>
              </p>
            </div>
          </div>
        </DialogPanel>
    </>

  )
}
