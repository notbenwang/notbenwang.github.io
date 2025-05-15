"use client"
import AnimatedHeader from "./components/AnimatedHeader";
import BioBox from "./components/BioBox";
import Rotunda from "./components/Rotunda";
import React, {useState, useEffect, useRef} from "react";
import VanillaTilt from "vanilla-tilt";
import ProjectsButton from "./components/ProjectsButton";
import {Dialog, DialogBackdrop} from '@headlessui/react'
import AboutDialog from "./dialogs/AboutDialog";
import NavBar from "./components/NavBar";
import ResumeButton from "./components/ResumeButton";
import SkillsButton from "./components/SkillsButton";
import ContactButton from "./components/ContactButton";
import ContactDialog from "./dialogs/ContactDialog"
import ProjectsDialog from "./dialogs/ProjectsDialog";
import SkillsDialog from "./dialogs/SkillsDialog";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)
  
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isSkillsOpen, setIsSkillsOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [muted, setMuted] = useState(false);
  
  const audioRef1 = useRef(null)
  const audioRef2 = useRef(null)
  const playSound1 = () => {if (muted) return; audioRef1.current.play();}
  const playSound2 = () => {if (muted) return; audioRef2.current.play();}
  function Tilt(props) {
    const { options, ...rest} = props;
    const tilt = useRef(null)
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }
  const toggleMute = () => {
    setMuted(prev => !prev);
  };

  function handleDialogClose() {
    setIsOpen(false);
    setIsAboutOpen(false);
    setIsSkillsOpen(false);
    setIsProjectsOpen(false);
    setIsContactOpen(false);
  }

  return (
    <body>
      <div className="min-w-[900px] w-screen  absolute overflow-hidden z-[99]">
        
        <div className=" bg-gray-950 bg-[url('/front-white.svg')] bg-no-repeat bg-cover overflow-hidden bg-bottom min-h-screen"> 
        
          <main className="flex flex-col justify-start mt-auto p-24 max-w-fit
            mx-auto ml-15 ">
            <Rotunda className="rotunda" a1={playSound1} a2={playSound2}/>
            <div className="flex-col m-auto z-[98]">
              <AnimatedHeader Tilt={Tilt} a1={playSound1} a2={playSound2}/>
              <div className="flex-col tracking-widest pt-40 mx-auto -translate-y-[0px] translate-x-[155px] z-[98]">
                <BioBox Tilt={Tilt} setOpen={setIsOpen} setDialogTo={setIsAboutOpen} hoverSound={playSound1}/>
                <ProjectsButton Tilt={Tilt} setOpen={setIsOpen} setDialogTo={setIsProjectsOpen} hoverSound={playSound2}/>
                <SkillsButton Tilt={Tilt} setOpen={setIsOpen} setDialogTo={setIsSkillsOpen} hoverSound={playSound1}/>
                <ContactButton Tilt={Tilt} setOpen={setIsOpen} setDialogTo={setIsContactOpen} hoverSound={playSound2}/>
              </div>
            </div>
          </main>
        </div>
           <button
            onClick={toggleMute}
            className={`absolute bottom-0 w-[50px] px-4 py-2 rounded ${muted ? 'opacity-25' : 'opacity-90'}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/500px-Speaker_Icon.svg.png"/>
          </button>
      
      <Dialog transition open={isOpen} onClose={() => handleDialogClose()} 
        className="relative z-[100] transition duration-300 ease-in-out data-[closed]:opacity-0 ">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogBackdrop transition className="fixed inset-0 ease-in bg-black/30"/>
          {isAboutOpen && <AboutDialog/>}
          {isProjectsOpen && <ProjectsDialog/>}
          {isContactOpen && <ContactDialog/>}
          {isSkillsOpen && <SkillsDialog a1={playSound1} a2={playSound2}/>}
        </div>
      </Dialog>
     
        <audio ref={audioRef1} src="/sounds/Abstract1.mp3" preload="auto"/>
        <audio ref={audioRef2} src="/sounds/Abstract2.mp3" preload="auto"/>
    </div>
  </body>
  );
}
