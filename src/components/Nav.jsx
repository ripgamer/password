import React, { Component } from 'react'

export class Nav extends Component {
    render() {
        return (
            <nav className='flex h-20 items-center justify-around bg-slate-800 p-3 text-white font-sans font-bold'>
                <div className='left flex justify-center items-center text-center gap-0 '> <iframe className='w-20 overflow-hidden' src="https://lottie.host/embed/aed1055c-26fb-45e2-90b4-be098289268d/XWS9RtrkGX.json"></iframe> Password Manager</div>
                <ul className='right flex justify-center items-center text-center gap-3 '>
                    <a href="#"><li className='on hover:text-gray-400'>Home</li></a>
                    <a href="#"><li className='on hover:text-gray-400'>About</li></a>
                    <a href="#"><li className='on hover:text-gray-400'>Contact</li></a>
                </ul>

            </nav>
        )
    }
}

export default Nav;