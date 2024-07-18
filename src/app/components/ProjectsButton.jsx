import React from 'react'

export default function ProjectsButton({Tilt, setOpen, setDialogTo}) {
    const options = {
        scale: 1.2,
        speed: 1000,
        max: 10,
        reverse: true
      };
  return (
    
        <div className="-translate-y-[120px] translate-x-[250px]">
        <div className="container w-fit">
            <div className="flex-row">
            {/* <Tilt options={options}> */}
            <a onClick={() => {setOpen(true); setDialogTo(true);}}>
                <div className=" box-border w-fit rounded-lg 
                bg-slate-500 hover:bg-amber-500 shadow-inner hover:scale-110 transition ease-in-out p-3">
                        <p className='text-center text-white font-bold text-sm'>
                            PROJECTS
                        </p>
                </div>
                </a>
            {/* </Tilt> */}
            </div>
        </div>
    </div>

  )
}
