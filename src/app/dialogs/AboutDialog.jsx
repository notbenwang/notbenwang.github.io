import React from 'react'
import { Description, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react'

export default function AboutDialog() {
  return (
    <>
        <DialogPanel className="max-w-xl space-y-4 border bg-white p-12 z-[150] text-black text-left h-[min(65%,_800px)] 
        overflow-y-scroll">
          <img src="/me.png"/>
          <div className="font-light mx-8">
            <br/>
            <p className="text-lg text-center">
            My name is Benjamin ("Ben") Wang, and I'm currently a fourth year student studying at the University
            of Virginia and about to complete my B.S in Computer Science in Spring 2025.
            </p>
            <br/>
            <br/>
            <p>
              I like to create things, I like to solve problems, and I like to learn. I also like to code,
              because it's an occupation that allows me to do all three of those things. 
            </p>
            <br/>
            <p>
              I also like to work. Some might call me a hard worker, but honestly I think I'm just stubborn.
              Like I said, I really like to solve problems, so if there's a problem I haven't solved and I have the capacity to solve it, then I'll just 
              keep at it. And if I don't have the capacity to solve it, then I'll just study and learn until I can.
            </p>
            <br/><p>
              Right now, I'm looking for more opportunities to grow in software engineering, so if you're looking for
              a creative developer who likes to work, then you're at the right place.
            </p>
            <br/>
            <p className="font-extralight italic">
              When I'm not on the computer, working, or studying, you can find me 
              playing music, drawing ink sketches, or folding
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
