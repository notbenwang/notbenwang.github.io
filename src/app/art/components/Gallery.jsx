import React from 'react';

const artworkData = [
    { id:5, title: 'Deity', imageUrl: './art/sselanem.png', date:"October 2024"},
    { id:8, title: 'Rotten Stumps', imageUrl: './art/day03.png', date:"September 2024"},
    { id:2, title: 'Marsh', imageUrl: './art/shrooms.jpg' , date:"September 2024"},
    { id:6, title: 'My Neighbor', imageUrl: './art/day01.png', date:"September 2024"},
    { id:7, title: 'Automaton', imageUrl: './art/002forest robot.jpg', date:"November 2022"},
    { id:1, title: 'fLight', imageUrl: './art/sk-119-5.png' , date:"August 2024"},
    { id:10, title: 'Cavern', imageUrl: './art/cavern.jpg', date:"March 2024"},
    { id:3, title: 'Room', imageUrl: './art/sk-112.png' , date:"July 2024"},
    { id:9, title: 'cPU', imageUrl: './art/006.png', date:"April 2023"},
    { id:13, title: 'Swordsman', imageUrl: './art/sk-117.png', date:"October 2024"},
    { id:12, title: 'Monarch', imageUrl: './art/monarch.png', date:"March 2024"},
    { id:11, title: 'Spaghetti', imageUrl: './art/spaghetti.jpg', date:"October 2024"},
];

function Gallery() {
    // const res = await fetch('http://localhost:4000/art')
    // const res = await fetch('http://notbenwang.github.io/art')
    return (
      <section id="gallery" className="py-12 px-4">
        <h1 className="text-black font-light text-2xl pb-5">Works</h1>
        

        <div className="columns-3 md:columns-3 gap-6 ">
          {artworkData.map((art) => (
        <a href= {"../art/"+art.id}> 
            <div key={art.id} className="artwork-item">
              <img
                src={art.imageUrl}
                alt={art.title}
                className="w-full mb-6 max-w-2xl h-auto shadow-lg"
                />
              {/* <h3 className="mt-2 mb-6 text-right text-xs font-extralight text-black">
                  <p className="font-semibold">{art.title}</p>
                  {art.date}
                  </h3> */}
              {/* <p className=''></p> */}
            </div>
          </a>
          ))}
        
          </div>
      </section>
    );
  }
  
  export default Gallery;
  