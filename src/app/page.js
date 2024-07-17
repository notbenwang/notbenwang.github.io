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

  function Tilt(props) {
    const { options, ...rest} = props;
    const tilt = useRef(null)
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }

  function handleDialogClose() {
    setIsOpen(false);
    setIsAboutOpen(false);
    setIsSkillsOpen(false);
    setIsProjectsOpen(false);
    setIsContactOpen(false);
  }

  return (
    <body>

      <NavBar className="z-[100]" 
        setIsOpen={setIsOpen}
        setAbout={setIsAboutOpen}
        setProjects={setIsProjectsOpen}
        setContact={setIsContactOpen}/>

      <div className="min-w-[900px] w-screen min-h-[750px] h-[95vh] absolute overflow-hidden z-[99]">
        
        <div className=" bg-black bg-[url('/front-white.svg')] bg-no-repeat bg-cover overflow-hidden bg-bottom min-h-screen"> 
          <main className="flex flex-col justify-start mt-auto p-24 max-w-fit
            mx-auto ml-15 ">
            <Rotunda className="rotunda"/>
            <div className="flex-col m-auto z-[98]">
              <AnimatedHeader Tilt={Tilt}/>
              <div className="flex-col tracking-widest pt-40 mx-auto -translate-y-[0px] translate-x-[155px] z-[98]">
                <BioBox Tilt={Tilt} setOpen={setIsOpen} setDialogTo={setIsAboutOpen}/>
                <ProjectsButton Tilt={Tilt} setOpen={setIsOpen} setDialogTo={setIsProjectsOpen}/>
                <SkillsButton Tilt={Tilt} setOpen={setIsOpen} setDialogTo={setIsSkillsOpen}/>
                <ContactButton Tilt={Tilt} setOpen={setIsOpen} setDialogTo={setIsContactOpen}/>
                <ResumeButton Tilt={Tilt} />
              </div>
            </div>
          </main>
        </div>
      
      <Dialog transition open={isOpen} onClose={() => handleDialogClose()} 
        className="relative z-[100] transition duration-300 ease-in-out data-[closed]:opacity-0 ">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogBackdrop transition className="fixed inset-0 ease-in bg-black/30"/>
          {isAboutOpen && <AboutDialog/>}
          {isProjectsOpen && <ProjectsDialog/>}
          {isContactOpen && <ContactDialog/>}
          {isSkillsOpen && <SkillsDialog/>}
        </div>
      </Dialog>

    </div>
  </body>
  );
}
