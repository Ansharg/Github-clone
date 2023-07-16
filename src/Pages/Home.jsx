import React from 'react'
import bgwebsite from '../Asests/Images/bgwebsite.png'
import Header from '../Components/Header'

export default function Home() {
  return (
    <div style={{background:` url(${bgwebsite}) no-repeat`, backgroundSize:"cover", }} className=' h-screen w-screen '>
        <Header />
        <div className='bg-transparent relative '>
            <img src="https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp" alt="space-ship" className='bg-transparent h-52 w-fit absolute right-20' style={{animation:"updown 10s infinite"}} />
        </div>
    </div>
  )
}
