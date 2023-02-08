import React from 'react'
import LandPreview from '../assets/img/LandPreview.avif';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebookF, FaMapMarkerAlt, FaRedditAlien, FaTwitter } from 'react-icons/fa';
const Modal = (props) => {
  return (
    <div id='modal' className=' invisible absolute p-8 w-1/5 border-0 border-gray-100 top-32 rounded-lg right-1 bg-black z-30 h-auto transition-all duration-500'>
      <div className='flex justify-end'>
        <button onClick={() => {
          const div = document.getElementById("modal");
          div.classList.add("invisible")
        }}>
          <AiOutlineClose className='text-gray-400 hover:animate-spin hover:text-purple-500' />
        </button>
      </div>
      <img className='mx-auto' width={"80%"} src={LandPreview} />
      <br />
      <br />

      <div className='flex'>
        <h4 className='text-white text-base'>Serial Number:  {props.selectedBoxId}</h4>
      </div>


      <br />
      <div className=' w-full flex gap-3'>
        <button className='bg-purple-400 transition-all hover:bg-purple-600 rounded-sm w-20 p-1 uppercase text-center text-xs text-white font-bold' onClick={() => { document.getElementById("buy-modal").classList.remove("scale-0") }}>Buy</button>
        <button className='bg-yellow-700 transition-all hover:bg-yellow-800 rounded-sm w-20 p-1 uppercase text-center text-xs text-white font-bold'>Claim</button>
      </div>

      <br />
      <br />


      <div className=' flex'>
        <FaMapMarkerAlt className=' text-cyan-400 my-auto ml-2 mr-1' /> <p className='text-white text-sm font-bold my-auto'>17, -35</p>
      </div>

      <br />


      <div className='flex gap-7 justify-center mt-4 transition-all'>
        <a href='#' className='bg-white transition-all duration-500 hover:bg-blue-600 hover:animate-bounce hover:text-white flex justify-center items-center  rounded-full w-10 border-none h-10 uppercase  text-xs font-bold'>
          <FaFacebookF className='text-xl' />
        </a>
        <a href='#' className='bg-white transition-all duration-500 hover:animate-bounce hover:bg-orange-700 hover:text-white flex justify-center items-center  rounded-full w-10 border-none h-10 uppercase  text-xs font-bold'>
          <FaRedditAlien className='text-2xl' />
        </a>
        <a href='#' className='bg-white transition-all duration-500 hover:animate-bounce hover:bg-blue-400 hover:text-white flex justify-center items-center   rounded-full w-10 border-none h-10 uppercase  text-xs font-bold'>
          <FaTwitter className='text-2xl' />
        </a>
      </div>
      <br />
    </div>
  )
}

export default Modal;