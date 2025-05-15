import React from 'react'

export default function SkillsButton({Tilt, setOpen, setDialogTo, hoverSound}) {
  const options = {
    scale: 1.1,
    speed: 1000,
    max: 10,
    reverse: true
  };
  return (
    <div className=" ml-[55%]">
      <div className="container w-fit">
          <div className=" mb-5 box-border w-28 rounded-lg bg-slate-600 
            hover:bg-green-500 hover:scale-110 shadow-inner transition ease-in-out p-3"
            onClick={() => {setOpen(true); setDialogTo(true); hoverSound();}} onMouseEnter={hoverSound}>
              <p className='text-center text-white font-bold text-sm'>
                  LINKS
              </p>
          </div>
      </div>
    </div>
  )
}
