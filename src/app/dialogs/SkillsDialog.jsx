import React from 'react'
import {DialogPanel} from '@headlessui/react'
import { Tooltip } from '@mui/material'
export default function SkillsDialog() {
  return (
    <DialogPanel className="w-[min(60%,_25em)] h-fit space-y-4 border rounded-xl font-light bg-white p-10 
        z-[150] text-black text-center ">
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <p className="font-bold text-2xl">SKILLS</p>
        
        <p>My Go To's</p>
        <div className="flex flex-row justify-between p-3">
            <Tooltip title="Python">
                <img className="w-1/6"src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"/>
            </Tooltip>
            <Tooltip title="Javascript">  
                <img className="w-1/6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
            </Tooltip>
            <Tooltip title="Java">
                <img className="w-1/6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />    
            </Tooltip>  
        </div>

        <div className="flex flex-row justify-between px-3">
            <Tooltip title="C">
                <img className="w-1/6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
            </Tooltip>
            <Tooltip title="HTML-5">
                <img className="w-1/6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
            </Tooltip>
            <Tooltip title="CSS-3">
                <img className="w-1/6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
            </Tooltip>
        </div>
        <p>Technologies</p>
        <div className="flex flex-row justify-between px-3">
            <Tooltip title="React">
                <img className="w-1/6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            </Tooltip>
            <Tooltip title="TailwindCSS">
                <img className="w-1/6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
            </Tooltip>
            <Tooltip title="Express.js">
                <img className="w-1/6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"/>
            </Tooltip>
            <Tooltip title="Nodejs">
                <img className="w-1/6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
            </Tooltip>
        </div>
        <div className="flex flex-row justify-between px-3">
            <Tooltip title="Django">
                <img className="w-1/6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
            </Tooltip>
            <Tooltip title="Adobe Photoshop">
                <img className="w-1/6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" />
            </Tooltip>
            <Tooltip title="Adobe Premiere">
                <img className="w-1/6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg"/>
            </Tooltip>
            <Tooltip title="Solidity">
                <img className="w-1/6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg"/>
            </Tooltip>
        </div>
    </DialogPanel>
  )
}
