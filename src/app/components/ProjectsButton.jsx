import React from 'react'

export default function ProjectsButton({Tilt, setOpen, setDialogTo, hoverSound}) {
    const options = {
        scale: 1.2,
        speed: 1000,
        max: 10,
        reverse: true
      };
  return (
    
        <div className="ml-[55%]">
        <div className="container w-fit">
            <div className="flex-row">
            {/* <Tilt options={options}> */}
            <a onClick={() => {setOpen(true); setDialogTo(true); hoverSound();}} onMouseEnter={hoverSound}>
                <div className=" box-border w-28 rounded-lg 
                bg-slate-500 hover:bg-sky-400 shadow-inner hover:scale-110 mb-5 transition ease-in-out p-3">
                        <p className='text-center text-white font-bold text-sm'>
                            WORK
                        </p>
                </div>
                </a>
            {/* </Tilt> */}
            </div>
        </div>
    </div>

  )
}
