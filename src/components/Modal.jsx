import React from 'react'
import LandPreview from '../assets/img/LandPreview.avif';
import { AiOutlineClose } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
const Modal = (props) => {
    return (
        <div id='modal' className=' invisible  absolute p-8 w-1/5 border-0 border-gray-100 top-14 rounded-lg right-1 bg-black z-30 h-5/6 transition-all duration-500'>
            <div className='flex justify-end'>
                <button onClick={() => {
                    const div = document.getElementById("modal");
                    div.classList.add("invisible")
                }}>
                    <AiOutlineClose className='text-gray-400' />
                </button>
            </div>
            <img src={LandPreview} />
            <h4 className='text-white'>{props.selectedBoxId}</h4>
            <div className=' w-full mt-1 flex'>
                <p className='bg-blue-500 rounded-sm w-20 p-1 uppercase text-center text-xs text-white font-bold'>regular</p>
                <div className=' flex'>
                    <FaMapMarkerAlt className=' text-cyan-400 my-auto ml-2 mr-1' /> <p className='text-white text-sm font-bold my-auto'>17, -35</p>
                </div>
            </div>

            <br />
            <small className='text-gray-400'>OWNER</small>
            <br />
            <a className='text-blue-500 text-xs font-semibold' href='#'>@ActionMask</a>
            <br />

            <small className='text-gray-400 font-semibold'>WHAT CAN I DO WITH LAND?</small>

            <ul className=' text-cyan-400 list-disc px-4'>

                <li>
                    <small className='text-gray-400 font-semibold'>Start building!</small>
                </li>
                <li>
                    <small className='text-gray-400 font-semibold'>Earn special rewards</small>
                </li>
                <li>
                    <small className='text-gray-400 font-semibold'>Exclusive LAND Owner staking</small>
                </li>
                <li>
                    <small className='text-gray-400 font-semibold'>Sell your LAND</small>
                </li>
                <li>
                    <small className='text-gray-400 font-semibold'>Publish and monetize your Experience (2023)</small>
                </li>
            </ul>
        </div>
    )
}

export default Modal;