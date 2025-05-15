import React from 'react'
import {DialogPanel} from '@headlessui/react'
import { Tooltip } from '@mui/material'
export default function SkillsDialog({a1, a2}) {

  return (
    <DialogPanel className="w-[min(90%,_40em)] border rounded-xl font-light bg-white p-10 
        z-[150] text-black">
        <p className="text-2xl">Links</p>
        <br/>
        <div className="flex justify-between px-3 outline outline-1 outline-gray-400">
            <a href="https://github.com/notbenwang" className="scale-50 on hover:scale-75 transition ease-in-out" target="_blank" onMouseEnter={a1}>
                <Tooltip title="Github">
                <img  src="https://www.svgrepo.com/show/512317/github-142.svg" />
                </Tooltip>
            </a>
            <a href="https://www.linkedin.com/in/notbenwang/" className="scale-50 on hover:scale-75 transition ease-in-out" target="_blank"onMouseEnter={a2}>
                <Tooltip title="LinkedIn">
                <img src="https://www.svgrepo.com/show/473701/linkedin.svg"/>
                </Tooltip>
            </a>
            <a href="https://www.artstation.com/binji_man" className="scale-50 on hover:scale-75 transition ease-in-out"  target="_blank" onMouseEnter={a1}>
                <Tooltip title="ArtStation">
                <img src="https://www.svgrepo.com/show/341618/artstation.svg" />
                </Tooltip>
            </a>
            <a href="/resume.pdf" className="scale-50 on hover:scale-75 transition ease-in-out"  target="_blank" onMouseEnter={a2}>
                <Tooltip title="Resume">
                <img src="https://www.svgrepo.com/show/483015/resume-4.svg" />
                </Tooltip>
            </a>

        </div>
        <br/>
        <img src="./avalon.jpg"/>
    </DialogPanel>
  )
}
