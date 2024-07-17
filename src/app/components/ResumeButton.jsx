import React from 'react'

export default function ResumeButton() {
  return (
    <div className="-translate-y-[60px] translate-x-[290px]">
      <div className="container w-fit">
        <a href="/resume.pdf">
          <div className=" box-border w-fit rounded-lg bg-slate-900 shadow-inner 
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
