import React from 'react'

export default function SkillsButton({Tilt, setOpen, setDialogTo}) {
  const options = {
    scale: 1.1,
    speed: 1000,
    max: 10,
    reverse: true
  };
  return (
    <div className="-translate-y-[100px] translate-x-[300px]">
      <div className="container w-fit">
          <div className=" box-border w-fit rounded-lg bg-slate-600 
            hover:bg-green-500 hover:scale-110 shadow-inner transition ease-in-out p-3"
            onClick={() => {setOpen(true); setDialogTo(true);}}>
              <p className='text-center text-white font-bold text-sm'>
                  SKILLS
              </p>
          </div>
      </div>
    </div>
  )
}
