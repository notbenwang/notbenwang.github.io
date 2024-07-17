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
    <div className="perspective-400 -translate-y-[70px] translate-x-[80px]">
  <div className="container transform rotate-x-[-15deg] rotate-y-[-25deg] -translate-z-10 rotate-2">
  <Tilt options={options} className="container">
        <div className="absolute box-border w-96 -mr-10  mb-5  ml-4 " onClick={()=>{setOpen(true); setDialogTo(true)}}>
            <p className="transition ease-in-out opacity-0 hover:opacity-100 font-mono text-center
              text-white text-2xl font-extrabold p-[68px] bg-slate-900 bg- bg-opacity-75 shadow-inner">
              Expand
            </p>
        </div>
        <div className="box-border w-96 -mr-10 -mt-6 outline outline-black/5 bg-white shadow-inner mb-5 p-3 ml-4 ">
            <p className="font-mono text-center text-black text-lg">
            Hello! My name is Benjamin Wang, and I'm currently a fourth year student studying Computer Science at the University of Virginia.
            </p>
        </div>
        
    </Tilt>
  </div>
</div>
  )
}
