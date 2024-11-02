import React, { useState } from 'react';

function Input() {
    const [eye, setEye] = useState('eyeopen.svg');

    const handleClick = () => {
        setEye(prevEye => prevEye === 'eyeopen.svg' ? 'eyeclose.svg' : 'eyeopen.svg');
    }

    return (
        <div className='text-black flex-col items-center justify-center w-[50vw] m-40'>
            <div className='mb-4'>
                <label className='pl-4 block mb-2' htmlFor="url">URL</label>
                <input className='border-black border rounded-full px-4 py-2 w-full' type="text" id="url" placeholder="URL" />
            </div>

            <div className='flex items-center justify-center w-full mb-4'>
                <div className='w-full mr-2'>
                    <label className='pl-4 block mb-2' htmlFor="username">Username</label>
                    <input className='border-black border rounded-full px-4 py-2 w-full' type="text" id="username" placeholder="Username" />
                </div>
                
                <div className='w-full ml-2'>
                    <label className='pl-4 block mb-2' htmlFor="password">Password</label>
                    <div className='flex justify-end '>
                        <input className='border-black border rounded-full px-4 py-2 w-full' type={eye === 'eyeopen.svg' ? 'password' : 'text'} id="password" placeholder="Password" />
                        <img onClick={handleClick} className='w-8 absolute mt-1 mx-2 ' src={eye} alt="" />
                    </div>
                </div>
            </div>
            <button className='border-black text-center border rounded-full px-4 py-2 w-40 h-10 mt-8 hover:bg-red-500 bg-red-400 text-white '>Save</button>
        </div>
    )
}

Input.propTypes = {}

export default Input
