import React from 'react'
import bgwebsite from '../Asests/Images/bgwebsite.png'
import Header from '../Components/Header'
import {AiOutlineRight} from 'react-icons/ai'

export default function Home() {
  return (
    <div style={{background:` url(${bgwebsite}) no-repeat`, backgroundSize:"cover", }} className=' h-screen w-screen '>
        <Header />
        <div className='bg-transparent relative '>
            <img src="https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp" alt="space-ship" className='bg-transparent h-52 w-fit absolute right-20 ' style={{animation:"updown 10s infinite"}} />
        </div>
        <div className='bg-transparent flex'>
            <div className='bg-transparent w-[35%]'>
                <img src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg" alt="svg" className='bg-transparent top-[43px] relative left-28 ' />
            </div>
            <div className='bg-transparent mt-[23rem] relative'>
                <div className='bg-transparent ml-[-320px]'>
                    <button className='flex rounded-full px-5 py-3 items-center bg-transparent border border-gray-600 space-x-6' style={{background: "radial-gradient(137.80% 80.58% at 49.90% 49.69%, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%)"}}>
                        <img src="https://github.githubassets.com/images/modules/site/eyebrow-banner-icon-copilot-x.svg" alt="" className='bg-transparent h-[45px]' />
                        <div className='text-white bg-transparent'>
                            <p className=' text-left bg-transparent font-semibold'>Introducing GitHub Copilot X</p>
                            <p className='bg-transparent text-gray-500'>Your AI pair programmer is leveling up</p>
                        </div>
                        <AiOutlineRight className='text-white bg-transparent'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
