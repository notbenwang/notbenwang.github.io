import React from 'react'

export default function NavBar({setIsOpen, setAbout, setProjects, setContact}) {
  return (
    <nav className="nav h-[5vh] gap-4 list-none flex justify-between items-center bg-black">
        <img src="/notbenwang.png" className="mx-5 w-32 transition ease-in-out"/>
        <div className="mx-5">
        {/* <a href="https://github.com/notbenwang/notbenwang.github.io/"
         className="font-sans font-light text-gray-100 opacity-50 transition ease-in-out hover:opacity-100 hover:scale-105">
            
        </a> */}
        <ul className='flex gap-6 font-sans font-light text-gray-100'>
            <li className="opacity-50 transition ease-in-out hover:opacity-100 hover:scale-105" 
                onClick={() => {setIsOpen(true); setAbout(true)}}>
            <a>
                About
            </a></li>
            <li className="opacity-50 transition ease-in-out hover:opacity-100 hover:scale-105"
                onClick={() => {setIsOpen(true); setProjects(true)}}
            >
            <a>
                Projects
            </a>
            </li>
            <li className="opacity-50 transition ease-in-out hover:opacity-100 hover:scale-105"
                onClick={() => {setIsOpen(true); setContact(true)}}>
            <a>
                Contact
            </a>
            </li>
            <li className="opacity-50 transition ease-in-out hover:opacity-100 hover:scale-105">
            <a href="/resume.pdf">
                Resumé
            </a>
            </li>
            <li>
            <a href="https://github.com/notbenwang/notbenwang.github.io/"
         className="font-sans font-light text-gray-100 opacity-50 transition ease-in-out hover:opacity-100 hover:scale-105">
            Building the Portfolio
        </a>
            </li>

        </ul>

        </div>
    </nav>
  )
}
