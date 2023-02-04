import React, { useEffect, useState } from 'react'
import selectedMarker from '../assets/img/selectedMarker.svg'
import Modal from './Modal';
import Draggable from 'react-draggable';

const Home = () => {
    const gridNumber = 60000;

    const [selectedBoxId, setSelectedBoxId] = useState("");


    var counter = 1;
    const ZoomIn = () => {
        const square = document.getElementById('grid-container');
        if (counter < 2) {
            counter += 0.01;
            square.style.transform = `scale(${counter})`;

            square.classList.add("opacity-0");

            setTimeout(() => {
                square.classList.remove("opacity-0");
            }, 500)
        }
    }

    const ZoomOut = () => {
        const square = document.getElementById('grid-container');
        if (counter > 0.2) {
            counter -= 0.01;
            square.style.transform = `scale(${counter})`;
            square.classList.add("opacity-0");

            setTimeout(() => {
                square.classList.remove("opacity-0");
            }, 500)
        }
    }

    useEffect(() => {

        window.addEventListener("wheel", (e) => {
            if (e.deltaY > 0.2) {
                ZoomOut()
            }
            else if (e.deltaY < 2) {
                ZoomIn()
            }
            else { }
        })

        let boxes = "";

        for (let i = 0; i < gridNumber; i++) {
            boxes += '<button name="btns" class=" focus:bg-red-700 w-2 h-2 border-t-[0.5px] border-l-[0.5px]  border-blue-800 flex-none" id="box-' + i + '"></button>'
        }

        document.getElementById('grid-box').innerHTML = boxes;

        const btns = [...document.getElementsByName("btns")];


        btns.forEach((elem) => {
            elem.addEventListener('click', (e) => {
                const img = document.getElementById('marker');

                setSelectedBoxId(elem.id)

                const modal = document.getElementById("modal");

                modal.classList.remove('invisible');

                img.style.left = `${e.pageX - 14.45}px`;
                img.style.top = `${e.pageY - 47}px`;
                img.style.right = `${-e.pageX - 14.45}`
            })
        })

    }, [])

    return (
        <Draggable>
            <div className="w-full gap-4 h-screen overflow-auto">
                <div className="w-full col-span-4 h-full flex justify-center items-center">
                    <div id="grid-container" className="w-full h-[45rem]  absolute transition-all duration-300 flex" >
                        <div className="w-full transition-all  duration-300 h-full flex flex-row flex-wrap bg-gray-900 cursor-pointer overflow-hidden" id="grid-box" >
                        </div>
                        <div id='marker' className='flex justify-center absolute items-center'>
                            <img src={selectedMarker} />
                        </div>
                        <div className='fixed bottom-5 left-10 z-20'>

                            <button onClick={() => {
                                ZoomOut();
                            }} className=' bg-white w-10 p-1'>
                                -
                            </button>
                            <button onClick={() => {
                                ZoomIn()

                            }} className='  bg-white w-10 p-1'>
                                +
                            </button>
                        </div>
                        <Modal selectedBoxId={selectedBoxId} />
                    </div>
                </div>
            </div>
        </Draggable>
    )
}

export default Home