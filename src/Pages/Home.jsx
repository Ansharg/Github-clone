import React from 'react'
import bgwebsite from '../Asests/Images/bgwebsite.png'
import Header from '../Components/Header'
import {AiOutlineRight} from 'react-icons/ai'
import {BsCode} from 'react-icons/bs'

export default function Home() {
  return (
    <div style={{background:` url(${bgwebsite}) no-repeat`, backgroundSize:"cover", }} className=' h-screen w-screen '>
        <Header />
        <div className='bg-transparent relative '>
            <img src="https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp" alt="space-ship" className='bg-transparent h-52 w-fit absolute right-20 ' style={{animation:"updown 10s infinite"}} />
        </div>
        <div className='bg-transparent flex'>
            <div className='bg-transparent w-[50%]'>
                <img src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg" alt="svg" className='bg-transparent top-[50px] relative left-28 ' />
                <div className='h-12 w-12 flex items-center justify-center relative top-16 text-3xl left-[6.5rem]' style={{background:"radial-gradient(49.69% 49.90% at 49.90% 49.69%, rgba(156, 109, 255, 0.69) 0%, rgba(147, 129, 185, 0.00) 100%)"}}>
                    <BsCode className='text-white text-3xl bg-transparent' />
                </div>
                <div className='h-[28rem] bg-gradient-to-b from-[#6b43c1] to-green-500 w-1 rounded-full relative left-[7.8rem] top-20 '></div>
            </div>
            <div className='bg-transparent mt-[23rem] ml-[-280px] relative'>
                <div className='bg-transparent'>
                    <button className='flex rounded-full px-5 py-3 items-center bg-transparent border border-gray-600 space-x-6' style={{background: "radial-gradient(137.80% 80.58% at 49.90% 49.69%, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%)"}}>
                        <img src="https://github.githubassets.com/images/modules/site/eyebrow-banner-icon-copilot-x.svg" alt="" className='bg-transparent h-[45px]' />
                        <div className='text-white bg-transparent'>
                            <p className=' text-left bg-transparent font-semibold'>Introducing GitHub Copilot X</p>
                            <p className='bg-transparent text-gray-500'>Your AI pair programmer is leveling up</p>
                        </div>
                        <AiOutlineRight className='text-white bg-transparent'/>
                    </button>
                </div>
                <div className=' mt-7 text-left bg-transparent space-y-2'>
                    <p className='text-white text-[5.2rem] font-semibold bg-transparent'>Let's build from here</p>
                    <p className='text-gray-500 text-4xl w-[70%] leading-10'>Harnessed for productivity. Designed for collaboration. Celebrated for built-in security. Welcome to the platform developers love.</p>
                </div>
                <div className='mt-16 flex items-center'>
                    <input type="text" id='emailaddress' className='bg-white h-12 w-[25%] rounded-l-lg px-5' placeholder='Email address'/>
                    <button className='bg-[#6b43c1] text-white h-12 px-5 rounded-r-lg font-bold'>Sign up for GitHub</button>
                </div>
                <div className='mt-[140px]'>
                    <p className='text-gray-500 text-lg font-light'>Trusted by the world’s leading organizations </p>
                    <div id='icons' className='flex space-x-16 items-center mt-8'>
                        <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/stripe.svg" alt="stripe" className='h-12'/>
                        <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pinterest.svg" alt="pinterest" className='h-12' />
                        <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/kpmg.svg" alt="kpmg" className='h-12' />
                        <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/mercedes.svg" alt="Mercedes Benz" className='h-12' />
                        <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pg.svg" alt="P&G" className='h-8' />
                        <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/telus.svg" alt="Telus" className='h-8' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
