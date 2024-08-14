'use client'
import React, {useState, useEffect} from 'react'
import DesktopPage from './desktop_page'
import MobilePage from './mobile_page'

function useWindowDimensions() {
    // https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions())
        }
        window.addEventListener('resize', handleResize);
        return ()=> {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    return windowDimensions;
}

export default function Home() {
    
    const { height, width } = useWindowDimensions();


    return (
    <div>
      {width > 768 && <DesktopPage/>}
      {width <= 768 && <MobilePage/>}
    </div>
  )
}
