import React from 'react'
import Header from '../components/Header'
import Bio from '../components/Bio'

export function generateStaticParams() {
  const artworkData = [
    { id:'5'},
    { id:'4'},
    { id:'8'},
    { id:'2'},
    { id:'6'},
    { id:'7'},
    { id:'1'},
    { id:'10'},
    { id:'3'},
    { id:'9'},
    { id:'13'},
    { id:'12'},
    { id:'11'},
  ];
    return artworkData
}


const artworkData = {
  "4" : { "id":"4", "title": "The Surface", "imageURL": "../art/environment.png", "date":"June 2024"},
  "5" : { "id":"5", "title": "Deity", "imageURL": "../art/sselanem.png", "date":"October 2024"},
  "8" : { "id":"8", "title": "Rotten Stumps", "imageURL": "../art/day03.png", "date":"September 2024"},
  "2" : { "id":"2", "title": "Marsh", "imageURL": "../art/shrooms.jpg", "date":"August 2024"},
  "6" :  { "id":"6", "title": "Neighbor", "imageURL": "../art/day01.png", "date":"September 2024"},
  "7" : { "id":"7", "title": "Automaton", "imageURL": "../art/002forest robot.jpg", "date":"November 2022"},
  "1" : {"id":"1", "title": "Flight", "imageURL": "../art/sk-119-5.png", "date":"August 2024"},
  "10" : {"id":"10", "title": "Cavern", "imageURL": "../art/cavern.jpg", "date":"March 2024"},
  "3" : {"id":"3", "title": "Room", "imageURL": "../art/sk-112.png", "date":"July 2023"},
  "9" : {"id":"9", "title": "cPU", "imageURL": "../art/006.png", "date":"April 2023"},
  "13" : {"id":"13", "title": "Swordsman", "imageURL": "../art/sk-117.png", "date":"October 2024"},
  "12" : { "id":"12", "title": "Monarch", "imageURL": "../art/monarch.png", "date":"March 2024"},
  "11" : { "id":"11", "title": "Dinner", "imageURL": "../art/spaghetti.jpg", "date":"November 2023"}
}


export default async function page({ 
  params 
}: { 
  params: { id: string, title: string, imageUrl:string, date:string } 
}) {

  const {id, title, imageUrl, date} = await params
    return (
      <div className="container mx-auto bg-white">
        <div className="flex flex-col justify-center items-center py-5 w-full">
            <Header/>
            <Bio/>
            <div>
            <div className="px-3"> 
            <a href={artworkData[id].imageURL}>

            <img src={artworkData[id].imageURL} className="w-full  mb-2 mx-auto h-auto shadow-lg"></img>
            </a>
              <div className="flex flex-row justify-between">
              <a href="../art" className="text-black opacity-50 hover:opacity-100 transition ease-in-out">
              Back
              </a>
              <div className="text-black text-right font-light ">
                <p className=" font-semibold">
                  {artworkData[String(id)].title}
                  </p>
                  {artworkData[String(id)].date}
              </div>

              </div>
            </div>

          

            </div>
            <footer className="text-black text-sm font-extralight">
            © 2024 Benjamin Wang 
          </footer>
        </div>
      </div>
  )
}
