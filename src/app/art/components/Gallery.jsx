import React from 'react';

const artworkData = [
    { id:5, title: 'sselanem', imageUrl: './art/sselanem.png'},
    { id:8, title: 'day3', imageUrl: './art/day03.png'},
    { id:6, title: 'day1', imageUrl: './art/day01.png'},
    { id:7, title: 'automaton', imageUrl: './art/002forest robot.jpg'},
    { id:3, title: 'desk_setup', imageUrl: './art/sk-112.png' },
    { id:1, title: 'clouds', imageUrl: './art/sk-119-5.png' },
    { id:9, title: 'cpu', imageUrl: './art/006.png'},
    { id:2, title: 'bugi 2', imageUrl: './art/sk-123-color.png' },
];

function Gallery() {
    return (
      <section id="gallery" className="py-12 px-4">
        <div className="columns-2 md:columns-2 gap-4 ">
          {artworkData.map((art) => (
              <div key={art.id} className="artwork-item">
              <img
                src={art.imageUrl}
                alt={art.title}
                className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
                />
              <h3 className="mt-4 text-center text-lg font-medium">{}</h3>
            </div>
          ))}
        
          </div>
      </section>
    );
  }
  
  export default Gallery;
  