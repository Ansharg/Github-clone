import React from 'react'
import Githubfavicon from '../Asests/github-mark/github-mark-white.png'
import {AiOutlineDown} from 'react-icons/ai'
import {GoSearch} from 'react-icons/go'
import {BsSlashSquare} from 'react-icons/bs'

export default function Header() {
  return (
    <div className='w-full py-4 px-3  bg-transparent' id='navbar'>
        <div className='flex justify-between bg-transparent items-center'>
            <div className='ml-1 bg-transparent'>
                <ul className='flex space-x-5 items-center bg-transparent'>
                    <li className='bg-transparent'>
                        <div className='bg-transparent'>
                            <img src={Githubfavicon} alt="logo" className='h-8 mr-1 bg-transparent'/>
                        </div>
                    </li>
                    <li className='bg-transparent'>
                        <div className='flex items-center bg-transparent '>
                            <p className='text-white mr-1 bg-transparent'> Product </p>
                            <AiOutlineDown className='text-gray-300 font-extralight h-7 w-3 bg-transparent'/>
                        </div>
                    </li>
                    <li className='bg-transparent'>
                        <div className='flex items-center bg-transparent'>
                            <p className='text-white mr-1 bg-transparent'>Solutions </p>
                            <AiOutlineDown className='text-gray-300 font-extralight h-7 w-3 bg-transparent'/>
                        </div>
                    </li>
                    <li className=' bg-transparent'>
                        <div className='flex items-center bg-transparent'>
                            <p className='text-white mr-1 bg-transparent'>Open Source </p>
                            <AiOutlineDown className='text-gray-300 font-extralight h-7 w-3 bg-transparent'/>
                        </div>
                    </li>
                    <li className=' bg-transparent'>
                        <div className=' bg-transparent'>
                            <p className='text-white bg-transparent'>Pricing</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='flex items-center w-[500px] space-x-3 bg-transparent'>
                <div className='w-full flex items-center relative h-10 ml-1.5 bg-transparent'>
                    <GoSearch className='text-gray-600 bg-[#2a303f] absolute text-lg ml-2'/>
                    <input type="text" id='search' placeholder='Search or jump to ...' className=' bg-[#2a303f] w-full rounded-md py-1.5 pl-8 border border-gray-600 text-sm' />
                    <BsSlashSquare className='text-gray-600 absolute text-lg right-3 bg-[#2a303f]'/>
                </div>
                <div className=' bg-transparent'>
                    <button type='button' className='text-white w-16 '>Sign in</button>
                </div>
                <div className=' bg-transparent'>
                    <button type='button' className='text-white w-20 py-1 rounded border-white border'>Sign up</button>
                </div>
            </div>
        </div>
    </div>
  )
}
