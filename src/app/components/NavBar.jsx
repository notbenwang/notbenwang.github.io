import React from 'react'

export default function NavBar({setIsOpen, setAbout, setProjects, setContact}) {
  return (
    <nav className="nav mx-5 h-[5vh] gap-4 list-none flex justify-between items-center">
        <img src="/notbenwang.png" className="w-32 transition ease-in-out"/>
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

        </ul>
    </nav>
  )
}
