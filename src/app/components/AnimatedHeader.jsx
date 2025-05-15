export default function AnimatedHeader({Tilt, a1, a2}) {

  const options = {
    scale: 1.2,
    speed: 1000,
    max: 5,
    reverse: true
  };

  return (
    <div>
      <div className="-translate-x-24 -translate-y-10 p-5 w-fit" onMouseEnter={a1} onMouseLeave={a2}>
        <Tilt options={options}>
              <div className="perspective-400">
                  <div className="container transform rotate-x-[-20deg] rotate-y-[30deg] translate-z-[25px]
                      w-fit">
                      <div className="bg-white shadow-inner outline-black ">
                      <div className='w-[500px]'><img id="dynamic-title"className=" " src="/bwang.png"/>
                      </div>
                      
                  </div>
              </div>
          </div>
        </Tilt>
      </div>
    </div>
  )
}
