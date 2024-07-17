import React from 'react'

export default function ProjectsButton({Tilt, setOpen, setDialogTo}) {
    const options = {
        scale: 1.2,
        speed: 1000,
        max: 10,
        reverse: true
      };
  return (
    
        <div className=" perspective-400 -translate-y-[80px] translate-x-[250px]">
        <div className="container w-fit transform rotate-x-[-0deg] rotate-y-[-15deg] translate-z-10">
            <div className="flex-row">
            <Tilt options={options}>
            <a onClick={() => {setOpen(true); setDialogTo(true);}}>
                <div className=" box-border w-fit rotate-[8deg] rounded-lg 
                bg-orange-500 hover:bg-orange-400 shadow-inner p-3">
                        <p className='text-center text-white font-bold text-xs'>
                            PROJECTS
                        </p>
                </div>
                </a>
            </Tilt>
            </div>
        </div>
    </div>

  )
}
