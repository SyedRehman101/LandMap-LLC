import React from 'react'
import LandPreview from '../assets/img/LandPreview.avif';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebookF, FaMapMarkerAlt, FaRedditAlien, FaTwitter } from 'react-icons/fa';
import { Input } from '@material-tailwind/react';
import { toast, ToastContainer } from 'react-toastify';
const BuyModal = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault();
        toast('🦄 Details Secured', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    }


    return (
            
        <div id='buy-modal' className='absolute scale-0 p-8 w-1/3 border-0 border-gray-100 top-28 rounded-lg bg-black z-30 h-auto left-1/3 transition-all duration-500'>
            <div className='flex justify-end transition-all'>
                <button onClick={() => {
                    const div = document.getElementById("buy-modal");
                    div.classList.add('scale-0')
                }}>
                    <AiOutlineClose className='text-gray-400  hover:animate-spin hover:text-purple-500' />
                </button>
            </div>

            <br />
            <form onSubmit={(e) => SubmitHandler(e)}>
                
                <Input variant='standard' color="purple" label="Name" />

                <br />
                <Input variant='standard' color="purple" label="Facebook link" />
                <br />

                <Input variant='standard' color="purple" label="Twitter link" />
                <br />

                <Input variant='standard' color="purple" label="Reddit link" />

                <br />
                <button type='submit' className='w-full h-auto bg-purple-500 text-sm  text-white p-2 uppercase transition-all hover:bg-purple-600'>
                    Submit
                </button>
            </form>

        </div>
    )
}

export default BuyModal