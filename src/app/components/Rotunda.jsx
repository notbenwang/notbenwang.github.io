import React from 'react'

export default function Rotunda() {
  return (
    <>
    <div className="absolute bottom-0 translate-y- translate-x-[156px] -rotate-[-6deg] right-1/2 w-52
      transition ease-in-out hover:rotate-[0deg] z-[99]">
      <a href="https://en.wikipedia.org/wiki/The_Rotunda_(University_of_Virginia)" target="_blank">
      <img className="overflow-hidden animate-floating1" src="/bg-bot.svg"/>
      </a>
    </div>
    <div className="absolute bottom-0 -translate-y-[100px] right-1/2 translate-x-[180px] rotate-[30deg] w-52">
      <img className="animate-floating2" src="/bg-breaker.svg"/>
    </div>
    <div className="absolute bottom-0 -translate-y-[180px] right-1/2 translate-x-[155px] rotate-[-12deg] w-[350px] ">
    <img className="animate-floating3 opacity-[75%]" src="/bg-front.svg"/>
    </div>
    <div className="h-auto absolute bottom-96 translate-x-[20px] translate-y-[80px] right-1/2 w-80 -mr-45 -rotate-[50deg]">
    <img className="animate-floating4 opacity-[50%]" src="/petals.svg"></img>
    </div>
    <div className="h-auto absolute bottom-96 translate-x-[250px] -translate-y-[150px] w-[750px] right-1/2 -mr-45 rotate-[0deg]">
    <img className="animate-floating4 opacity-[20%]" src="/bg-back.svg"></img>
    </div>
    <div className="h-auto absolute bottom-96 translate-x-[250px] -translate-y-[150px] w-[700px] right-1/2 -mr-45 -scale-100 rotate-[-90deg]">
    <img className="animate-floating4 opacity-[15%]" src="/bg-back.svg"></img>
    </div>
    </>
    
  )
}
