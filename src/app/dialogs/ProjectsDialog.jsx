import React from 'react'
import {DialogPanel} from '@headlessui/react'

export default function ProjectsDialog() {
  return (
    <DialogPanel className="w-[clamp(40em,_60%,_40em)] h-3/4 overflow-y-scroll space-y-4 border bg-white p-12 
        z-[150] text-black text-center font-light">
        <p>PROJECTS</p>
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
        <p className="text-2xl font-bold">Untitled Project "Z"</p>
        <a className="italic">December 2021 - Present</a>
          <a className="text-sm font-extralight">Top Down Survival Game Shooter</a>
          <a className="text-sm text-blue-400" href="https://github.com/notbenwang/Project-Z">Github</a>
          <p className="mx-12 text-left">
            <br/>
            Originally a final project for the Intro CS course I took, I have been working on and off on this project, 
            continuing to expand, refactor, and evolve the idea over the years. The
            <a className="text-blue-400"href="https://github.com/notbenwang/CS1110-Final-Project"> game </a> was originally coded
            in Python using a combination of the Pygame library and
            another special python library created specifically for that Intro CS course, and over the last couple of years, I have
            sought to refactor many of the more convoluded and inefficient aspects of that first project, including moving the 
            project to C# and the implementation of my own collision/pathfinding libraries.
            <br/>
          </p>
          <div className="ratio ratio-16x9 self-center pt-5">
          <iframe
              className=""
              width="460"
              height="315"
              src={"https://youtube.com/embed/IcFWLHF7noU"
              }
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>

          </div>
          <p className="mx-56 text-left">

          </p>
        </div>
    </DialogPanel>
  )
}
