import React from 'react'
import {DialogPanel} from '@headlessui/react'

export default function ProjectsDialog() {
  return (
    <DialogPanel className="w-[clamp(40em,_60%,_50em)] h-3/4 overflow-y-scroll space-y-4 border bg-white p-12 
        z-[150] text-black text-center font-light">
        <h1 className="text-lg font-semibold">PROJECTS</h1>
        <div className='flex flex-col'>
          <hr/>
            <br/>
            <p className="text-2xl font-bold">Personal Portfolio</p>
            <a className="italic">July 2024</a>
            <a className="text-sm font-extralight text-blue-400" href="https://github.com/notbenwang/notbenwang.github.io">Github</a>
            <br/>
            <img src="day3.png" className="outline"/>
            <br/>
            <p className="mx-12 text-left">
                The motivation behind this project was two things: a desire to create a portfolio that
                better captured my own creativity and a test to push the limits of my developer skills, especially
                on the front-end side. The final product was created using React, TailwindCSS, and Next.js,
                and deployed using Github Pages. In terms of demoing the project, well you're already on it!
                <br/>
                <br/>
                For more information on how I built this project, check out the 
                <a href="https://github.com/notbenwang/notbenwang.github.io?tab=readme-ov-file#portfolio" className="text-blue-400"> ReadMe </a> 
                on the site's Github page, where I go much more in depth with the development process, motivation, and review of this project.
            </p>
            <br/>
        </div>
        <hr className=""/>
        <div className="flex flex-col">
        <p className="text-2xl font-bold">Puzzle App @ UVA</p>
        <a className="italic">September 2023 - December 2023</a>
        <a className="text-sm font-extralight">Geographical-Based Puzzle Hunt Web Application</a>
          <a className="text-sm font-extralight text-blue-400" href="https://github.com/notbenwang/PuzzleApp-UVA">Github</a>
          <br/>
          <p className="mx-12 text-left">
          This project was a collaboration between four other developers to create a Django web-game application
          that allowed for both the creation and playing of geographical-based puzzle hunts. I was responsible
          for implementation of most of the game's core features, like puzzle creation, puzzle play, and moderation management. Along
          with programming, I also acted as the group's Scrum Master, helping facilitating team collaboration through
          weekly meetings and bi-weekly sprint reports.
          </p>
          <div className="ratio ratio-16x9 self-center pt-5">
          <iframe
              className="m-5"
              width="460"
              height="315"
              src={"https://youtube.com/embed/0AF8mhfNQYg?si=s37dVwndBR-PVWCS"
              }
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>

          </div>
        </div>
        <hr className=""/>
        <div className="flex flex-col">
          <br/>
        <p className="text-2xl font-bold">The Endless Road</p>
        <a className="italic">July 2024 - Present</a>
          <a className="text-sm font-extralight">Point and Click Side-Scroller</a>
          {/* <a className="text-sm text-blue-400" href="https://github.com/notbenwang/Project-Z">Github</a> */}
          <p className="mx-12 text-left">
            <br/>
            A little passion project following a delivery robot as it travels down a long road with no end in sight.
            Along the road are creatures and obstacles that the robot must overcome if it wishes to deliver
            its package to the destination lying at the end of this endless road. Currently being developed by myself
            using the Godot Game Engine.
            <br/>
          </p>
          <div className="ratio ratio-16x9 self-center pt-5">
          <iframe
              className=""
              width="460"
              height="315"
              src={"https://youtube.com/embed/5OR1FjGGVHo"
              }
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
            <br/>
          </div>
        </div>
        
    </DialogPanel>
  )
}
