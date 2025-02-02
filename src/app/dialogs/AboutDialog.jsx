import React from 'react'
import { Description, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react'

export default function AboutDialog() {
  return (
    <>
        <DialogPanel className="w-[clamp(40em,_60%,_50em)] h-3/4 space-y-4 border bg-white p-12 z-[150] text-black text-left ] 
        overflow-y-scroll">
          <img src="/me.png" className="w-3/4 mx-auto"/>
          <div className="font-light mx-8">
            <br/>
            <p className="text-lg text-center">
            My name is Benjamin ("Ben") Wang, and I'm currently a fourth year student studying at the University
            of Virginia and on track to completing my B.S in Computer Science in Spring 2025.
            </p>
            <br/>
            <br/>
            <p>
              A little about myself: I like to be creative, I like to solve problems, and I like to learn. I also like to code,
              because it's an occupation that allows me to do all three of those things. 
            </p>
            <br/>
            <p>
              I also like to work hard. My work ethic is as follows: 
              if there's a problem I haven't solved and I have the capacity to solve it, then I'll keep at it 
              until I can. And if I don't have the capacity to solve it, then I'll learn until I have the capacity.
              One reason I enjoy programming is that there's always some new problem, some new technology
              for me to learn and grow and improve in, and tons of resources to learn from areas I lack in.
            </p>
            <br/><p>
              Right now, I'm looking for more opportunities to grow in software engineering, so if you're looking for
              a creative developer who likes to work and is eager to grow, then you're at the right place.
            </p>
            <br/>
            <p className="font-extralight italic text-center">
              When I'm not on the computer, working, or studying, you can find me 
              doing creative stuff like playing music, <a href="../art" className="underline">drawing ink sketches</a>, or folding
              origami.
            </p>
            <br/>
            {/* <p className="">
            For as long as I can remember, I've always wanted to create things. 
            From the overflowing bin with origami models in my closet to the folders of unfinished coding ventures
            cluttering my desktop, I've always
            seem to been looking for ways to scratch my creative itch.
            </p>
            <br/>
            <p>
                I also have a passion for learning; 
                after all, it's one thing to have an idea in your head, but it's a completely different skill
                to know how to make it a reality. While some might find the journey of learning
                tedious, I like to see it as a lifetime-long puzzle, one that even the smallest steps in
                progress can be just as satisfying as scratching that creative itch.
            </p>
            <br/>
            <p>
                Right now, I'm looking for opportunities to grow in software engineering,
                so if you're looking for a developer who's passionate about coding and eager to learn,
                then you're at the right place!
            </p> */}

          </div>
        </DialogPanel>
    </>

  )
}
