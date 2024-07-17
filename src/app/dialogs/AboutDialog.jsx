import React from 'react'
import { Description, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react'

export default function AboutDialog() {
  return (
    <>
        <DialogPanel className="max-w-xl space-y-4 border bg-white p-12 z-[150] text-black text-center h-[min(75%,_900px)] 
        overflow-y-scroll">
          <img src="/me.png"/>

            <p>
            My name is Benjamin Wang, and I'm currently a fourth year student studying at the University
            of Virginia and about to complete my B.S in Computer Science in Spring 2025.
            </p>
            <p className="">
            For as long as I can remember, I've always wanted to create things. 
            From the overflowing bin with origami models in my closet to the folders of unfinished coding ventures
            cluttering my desktop, I've always
            seem to been looking for ways to scratch my creative itch.
            </p>
            <p>
                I also have a passion for learning; 
                after all, it's one thing to have an idea in your head, but it's a completely different skill
                to know how to make it a reality. While some might find the journey of learning
                tedious, I like to see it as a lifetime-long puzzle, one that even the smallest steps in
                progress can be just as satisfying as scratching that creative itch.
            </p>
            <p>
                Right now, I'm looking for opportunities to grow in software engineering
                as a full-stack developer, so if you're looking for a developer who's passionate about coding and eager to learn,
                then you're at the right place!
            </p>

        </DialogPanel>
    </>

  )
}
