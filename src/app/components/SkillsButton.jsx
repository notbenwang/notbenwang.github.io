import React from 'react'

export default function SkillsButton({Tilt, setOpen, setDialogTo}) {
  const options = {
    scale: 1.1,
    speed: 1000,
    max: 10,
    reverse: true
  };
  return (
    <div className="perspective-400 -translate-y-[2em] translate-x-[150px]">
      <div className="container w-fit transform rotate-x-[0deg] rotate-y-[-10deg] -translate-z-[15px]">
        <Tilt options={options}>
          <div className=" box-border w-fit rotate-[12deg] rounded-lg bg-emerald-600 
            hover:bg-emerald-500 shadow-inner p-3"
            onClick={() => {setOpen(true); setDialogTo(true);}}>
              <p className='text-center text-white font-bold text-sm'>
                  SKILLS
              </p>
          </div>
        </Tilt>
      </div>
    </div>
  )
}
