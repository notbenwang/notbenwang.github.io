import React from 'react'
import {DialogPanel} from '@headlessui/react'
import Skills from "./Skills"
export default function ProjectsDialog() {
  return (
    <DialogPanel className="w-[clamp(40em,_60%,_50em)] h-3/4 overflow-y-scroll space-y-4 border bg-white p-12 
        z-[150] text-black font-light">
        
        <div className='flex flex-col'>
          
            <p className="text-2xl my-1">Skills</p>
            <Skills/>
            <br/>
          <p className="text-2xl my-1">Projects</p>
          <hr/>
          
          <p className="mt-1 text-2xl font-bold">Everything is Bad Apple</p>
          <a className="italic">May 2025</a>
          <p>
          <a className="text-sm  text-blue-400 underline" target="_blank" href="https://github.com/notbenwang/bad-apple-quilt/">Github</a> |
           <a className="text-sm  text-blue-400 underline" target="_blank" href="https://drive.google.com/file/d/1vTed8ujfvQhJMnZfW27-M976UVNeX4kN/view?usp=sharing"> Video</a>
          </p>
          <p className="text-left">
              Program that recreates images using only frames from <a target="_blank" href="https://youtu.be/FtutLA63Cp8?si=jRQuS-WMELmScNEN" className="text-blue-400 underline">Bad Apple</a>.
          </p>
          <br/>
          <img src="bad_apple.jpg" className="outline outline-2 outline-gray-300"/>
        <br/>
       </div>

        <hr/>
        <div className="flex flex-col">
        <p className="text-2xl font-bold">UVA Course GPA Predictor (ML4VA)</p>
        <a className="italic">October 2024 - December 2024</a>
        <p>
        <a className="text-sm underline text-blue-400" target="_blank" href="https://youtu.be/o6CYVNvC9QI?si=2dZDwT6RnRow0BHv">Video</a> | 
        <a className="text-sm underline text-blue-400" target="_blank" href="https://colab.research.google.com/drive/1DccBp0R1LkuBU9w1Xh_KW9VCvo9EK4cP?usp=sharing"> Notebook</a>
        </p>
          <p className="text-left">
          A Random Forest model trained to help predict course difficulties at UVA. 
          </p>
          <br/>
          <img src="ml4va.jpg" className="outline outline-2 outline-gray-300"/>
          <p className="font-extralight">Presentation of Model Accuracy Graph</p>
        </div>
        
        {/* <hr/>
        <div className="flex flex-col">
        <p className="text-2xl font-bold">Wordle Screenshot Parser</p>
        <a className="italic">May 2024 - August 2024</a>
        <a className="text-sm text-blue-400" href="https://github.com/notbenwang/wordle-image-parser">Github</a>
          <p className="text-left">
          Parser that reads Wordle screenshots and prepares it into structured data.
          </p>
        </div> */}

        <hr className=""/>
        <div className="flex flex-col">
        <p className="text-2xl font-bold">The Endless Road</p>
        <a className="italic">July 2024</a>
          <a className="text-sm underline text-blue-400" target="_blank" href="https://youtu.be/5OR1FjGGVHo?si=Su_oBKfyAqTOfTx1">Demo Video</a>
          {/* <a className="text-sm text-blue-400" href="https://github.com/notbenwang/Project-Z">Github</a> */}
          <p className="text-left">
            A little game following a delivery robot as it travels down a long road with no end in sight. 
            <br/>
          </p>
          <br/>
          <img src="endlessroad.jpg" className=""/>
        </div>
        
        <hr/>
        <p className="text-xl font-bold">Portfolio (2025)</p>
        I also made this portfolio! You can find details about the process of how I designed it <a target="_blank" href="https://github.com/notbenwang/notbenwang.github.io/" className="underline text-blue-400">here</a>.
        
    </DialogPanel>
  )
}
