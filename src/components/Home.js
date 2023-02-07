import React, { useEffect, useState } from 'react'
import selectedMarker from '../assets/img/selectedMarker.svg'
import Modal from './Modal';
import Draggable from 'react-draggable';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { AiOutlineDrag } from 'react-icons/ai';
import BuyModal from './BuyModal';
const Home = () => {
    const gridNumber = 20161;

    const [selectedBoxId, setSelectedBoxId] = useState("");

    const [nftInfo, setNFTInfo] = useState({
        name: "",
        facebookLink: "",
        twitterLink: "",
        redditLink: ""
    })
    const [isDragging, setIsDragging] = useState(false);

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

        // window.addEventListener("wheel", (e) => {
        //     if (e.deltaY > 0.2) {
        // style="border-color:#2D4065"
        //         ZoomOut()
        //     }
        //     else if (e.deltaY < 2) {
        //         ZoomIn()
        //     }
        //     else { }
        // })

        let boxes = "";

        for (let i = 1; i < gridNumber; i++) {
            boxes += '<button  name="btns" style="border-color:#4a0c5f" class="cursor-grab focus:bg-red-600 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-b-[0.5px] border-r-[0.5px]  flex-none" id="box-' + i + '"></button>'
        }

        document.getElementById('grid-box').innerHTML = boxes;

        const btns = [...document.getElementsByName("btns")];


        btns.forEach((elem, index) => {
            elem.addEventListener('click', (e) => {
                // const index = elem.id.split('-');
                // const img = document.getElementById('img-' + index);

                // img.classList.remove('hidden')
                setSelectedBoxId(elem.id.split('-')[1])

                const modal = document.getElementById("modal");

                modal.classList.remove('invisible');


                // img.style.right = `${-e.pageX - 14.45}`
            })
        })

    }, [])

    return (
        <>
            <div className="w-full gap-4 h-screen overflow-hidden relative">
                <div className="w-full col-span-4 h-full flex justify-center items-center absolute">
                    <TransformWrapper
                        initialScale={1}

                    >
                        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                            <>
                                <TransformComponent>
                                    <div id="grid-container" className=" w-full h-full  relative transition-all duration-300 flex" >
                                        <Draggable onMouseDown={(e) => {

                                            e.stopPropagation()
                                        }}>
                                            {/*Border-360 */}
                                            <div className="w-full border-1 border-gray-900 transition-all relative  duration-300 h-full flex flex-row flex-wrap bg-gray-900 cursor-grab overflow-hidden" id="grid-box" >
                                            </div>

                                            {/* <AiOutlineDrag className='text-white' /> */}
                                        </Draggable>
                                    </div>

                                </TransformComponent>
                                <div className='fixed bottom-5 left-10 z-20'>

                                    <button onPointerDown={(e) => {
                                        e.preventDefault()
                                        zoomOut();
                                    }} className=' bg-white w-10 p-1'>
                                        -
                                    </button>
                                    <button onPointerDown={(e) => {
                                        e.preventDefault()
                                        zoomIn()

                                    }} className='  bg-white w-10 p-1'>
                                        +
                                    </button>
                                </div>
                            </>
                        )}
                    </TransformWrapper>
                </div>
            </div>
            <Modal selectedBoxId={selectedBoxId} />
            <BuyModal nftInfo={nftInfo} />
        </>
    )
}

export default Home