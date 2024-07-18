"use client"
import React, {useState} from 'react'

export default function BioBox({Tilt, setOpen, setDialogTo}) {


  
  const options = {
    scale: 1.1,
    speed: 1000,
    max: 10,
    reverse: true
  };
  return (
    <div className="-translate-y-[120px] translate-x-[220px]">
  <div className="container">
  {/* <Tilt options={options} className="container"> */}
        {/* <div className="absolute box-border w-96 -mr-10  mb-5  ml-4" onClick={()=>{setOpen(true); setDialogTo(true)}}>
            <p className="transition ease-in-out opacity-0 hover:opacity-100 font-mono text-center
              text-white text-2xl font-extrabold p-[68px] bg-slate-600 bg- bg-opacity-75 shadow-inner">
              Expand
            </p>
        </div> */}
        <div className="w-fit rounded-md hover:scale-110 transition ease-in-out -mt-6 outline
         outline-black/5 bg-slate-400 shadow-inner mb-5 p-3  hover:bg-rose-500"
         onClick={()=>{setOpen(true); setDialogTo(true)}}>
            <p className=" font-bold text-center text-white text-sm">
            ABOUT
            </p>
        </div>
    {/* </Tilt> */}
  </div>
</div>
  )
}
