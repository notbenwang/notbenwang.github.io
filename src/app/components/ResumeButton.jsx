import React from 'react'

export default function ResumeButton() {
  return (
    <div className="perspective-400 -translate-y-[0px] translate-x-[50px]">
      <div className="container w-fit transform rotate-x-[-20deg] rotate-y-[60deg] translate-z-10">
        <a href="/resume.pdf">
          <div className=" box-border w-fit rotate-[-2deg] rounded-lg bg-sky-500 shadow-inner 
          transition ease-in-out duration-200 hover:scale-125 hover:bg-sky-400 p-3"
          >
          <p className='text-center text-white font-bold text-sm'>
              RESUMÉ
          </p>
        </div>
        </a>
      </div>
    </div>
  )
}
