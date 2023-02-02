import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent } from 'react-leaflet'



const Home = () => {
    const [gridNumber, setGridNumber] = useState(60000);


    var counter = 1;
    const zoomIn = () => {
        const square = document.getElementById('grid-container');
        if (counter < 2) {
            counter += 0.1;
            square.style.transform = `scale(${counter})`;

            square.classList.add("opacity-0");

            setTimeout(() => {
                square.classList.remove("opacity-0");
            }, 500)
        }
    }

    const zoomOut = () => {
        const square = document.getElementById('grid-container');
        if (counter > 0.2) {
            counter -= 0.1;
            square.style.transform = `scale(${counter})`;
            square.classList.add("opacity-0");

            setTimeout(() => {
                square.classList.remove("opacity-0");
            }, 500)
        }
    }

    useEffect(() => {

        let boxes = "";

        for (let i = 0; i < gridNumber; i++) {
            boxes += '<div class="w-2 h-2 border border-blue-900 flex-none" id="box-' + i + '"></div>'
        }

        document.getElementById('grid-box').innerHTML = boxes;


        let scrollPos = 0;

        const dbAbba = document.getElementById('grid-container')

        dbAbba.addEventListener('scroll', function () {
            // detects new state and compares it with the new one
            if ((document.body.getBoundingClientRect()).top > scrollPos) {
                console.log('ab scale barhe ga')
                document.getElementById('grid-box').style.transform = 'scale(110%)'
            }
            else {
                console.log('ab scale gire ga')
                document.getElementById('grid-box').style.transform = 'scale(90%)'
            }
            // saves the new position for iteration.
            scrollPos = (document.body.getBoundingClientRect()).top;
        });
    }, [gridNumber])

    return (


        <div className="w-full gap-4 h-screen ">


            <div className="w-full col-span-4 h-full flex justify-center items-center">
                <div id="grid-container" className="w-full h-[45rem] overflow-hidden relative transition-all duration-300" >

                    <div className="w-full transition-all  duration-300 h-full flex flex-row flex-wrap bg-gray-900 cursor-pointer overflow-hidden" id="grid-box" >

                    </div>
                </div>
            </div>

            <button onClick={() => {
                zoomIn()

            }} className='absolute bottom-0 left-10 z-20 bg-white w-10 p-1'>
                +
            </button>
            <button onClick={() => {
                zoomOut();
            }} className='absolute bottom-0 left-0 z-20 bg-white w-10 p-1'>
                -
            </button>
        </div>



    )
}

export default Home