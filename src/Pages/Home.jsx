import React, { useState } from 'react'
import bgwebsite from '../Asests/Images/bgwebsite.png'
import Header from '../Components/Header'
import {AiOutlineRight} from 'react-icons/ai'
import {BsCode} from 'react-icons/bs'
import {TfiBag} from 'react-icons/tfi'
import {AiOutlinePlus} from 'react-icons/ai'
import {FiLock} from 'react-icons/fi'
import {GoSync} from 'react-icons/go'
import {RxHamburgerMenu} from 'react-icons/rx'
import {GoBell} from 'react-icons/go'
import Githubfavicon from '../Asests/github-mark/github-mark-white.png'
import {Tilt} from 'react-tilt'
import {FaPython} from 'react-icons/fa'
import {BiLogoJavascript} from 'react-icons/bi'
import {FaGolang} from 'react-icons/fa6'
import {BsArrowRight} from 'react-icons/bs'
import {LuHeartHandshake} from 'react-icons/lu'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import "animate.css/animate.min.css";
import Sponsors from '../Components/Sponsors'

export default function Home() {
    const [buttonOne,setButtonOne] = useState(false);
    const [buttonTwo,setButtonTwo] = useState(false);
    const [lineAfter,setLineAfter] = useState(false);
    const [lineAfterGithub,setLineAfterGithub] = useState(false);
    const [githubActions,setGithubActions] = useState(false);
    const [githubMobile,setGithubMobile] = useState(false);
    const [exploreGithub,setExploreGithub] = useState(false);
    const [githubDiscussion,setGithubDiscussion] = useState(false);
    const [pullRequest,setPullRequest] = useState(false);
    const [githubSponsors,setGithubSponsors] = useState(false);
    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            5,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          100,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
  return (
    <div style={{background:` url(${bgwebsite}) no-repeat`, backgroundSize:"cover", }} className=' h-screen w-screen '>
        <Header />
        <div className='bg-transparent relative'>
            <img src="https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp" alt="space-ship" className='bg-transparent h-52 w-fit absolute right-20 ' style={{animation:"updown 7s infinite",transition:"ease-in-out"}} />
        </div>
        <div className='bg-transparent flex '>
            <div className='bg-transparent'>
                <img src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg" alt="svg" className='bg-transparent top-12 relative left-28 w-[68vw]' />
                <div className='h-12 w-12 flex items-center justify-center relative top-[3.3rem] text-3xl left-[6.5rem]' style={{background:"radial-gradient(49.69% 49.90% at 49.90% 49.69%, rgba(156, 109, 255, 0.69) 0%, rgba(147, 129, 185, 0.00) 100%)"}}>
                    <BsCode className='text-white text-3xl bg-transparent' />
                </div>
                <div className='h-[27rem] bg-gradient-to-b from-[#6b43c1] to-green-500 w-1 rounded-full relative left-[124px] top-[3.5rem] '></div>
                <div className='relative z-10'>
                    <AnimationOnScroll animateIn='animate__fadeIn'>
                    <div className='w-16 h-16 absolute flex justify-center items-center left-24 top-16 ' style={{background:"radial-gradient(50% 50% at 50.00% 50.00%, rgba(49, 255, 45, 0.55) 0%, rgba(255, 255, 255, 0.00) 100%)"}}>
                        <TfiBag className='text-white text-2xl bg-transparent isolate'/>
                    </div>
                    </AnimationOnScroll>
                </div>
                <div className='bg-transparent z-0'>
                    <AnimationOnScroll animateIn='animate__fadeInDown' className='bg-transparent' delay={800} offset={50}>
                        <div className='h-[17rem] bg-gradient-to-b from-green-500 to-[#0e1116] w-1 rounded-full relative left-[7.8rem] top-36 '></div>
                    </AnimationOnScroll>
                </div>
            </div>
            <div className='bg-transparent mt-[22rem] ml-[-16rem] relative'>
                <div className='bg-transparent'>
                    <button className='flex rounded-full px-5 py-3 items-center bg-transparent border border-gray-600 space-x-6' style={{background: "radial-gradient(137.80% 80.58% at 49.90% 49.69%, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%)"}} onMouseOver={()=>setButtonOne(true)} onMouseLeave={()=>setButtonOne(false)}>
                        <img src="https://github.githubassets.com/images/modules/site/eyebrow-banner-icon-copilot-x.svg" alt="" className='bg-transparent h-[45px]' />
                        <div className='text-white bg-transparent'>
                            <p className=' text-left bg-transparent font-semibold'>Introducing GitHub Copilot X</p>
                            <p className='bg-transparent text-gray-500'>Your AI pair programmer is leveling up</p>
                        </div>
                        <div className='transition duration-150 ease-in-out'>
                            {!buttonOne ? (
                                <AiOutlineRight className='text-white bg-transparent'/>
                            ) : (
                                <BsArrowRight className='text-white bg-transparent text-lg'/>
                            )}
                        </div>
                    </button>
                </div>
                <div className=' mt-6 text-left bg-transparent space-y-2'>
                    <p className='text-white text-[5.2rem] font-semibold bg-transparent'>Let's build from here</p>
                    <p className='text-gray-500 text-4xl w-[70%] leading-10 bg-transparent'>Harnessed for productivity. Designed for collaboration. Celebrated for built-in security. Welcome to the platform developers love.</p>
                </div>
                <div className='mt-16 flex items-center'>
                    <input type="text" id='emailaddress' className='bg-white h-12 w-[25%] rounded-l-lg px-5' placeholder='Email address'/>
                    <button className='bg-[#6b43c1] text-white h-12 px-5 rounded-r-lg font-bold'>Sign up for GitHub</button>
                    <div className='h-12 rounded-full ml-3 mr-3 w-[2px] border border-gray-500'></div>
                    <button className='bg-transparent text-white h-12 px-6 border border-[#8f62f0] text-lg rounded-lg font-bold hover:border-white hover:border-2 transition duration-150 ease-in-out flex justify-center items-center' onMouseOver={()=>setButtonTwo(true)} onMouseLeave={()=>setButtonTwo(false)}>start a free enterprise trial 
                    {!buttonTwo ? (
                                <AiOutlineRight className='text-white bg-transparent text-sm ml-1'/>
                            ) : (
                                <BsArrowRight className='text-white bg-transparent text-lg ml-1'/>
                            )}
                    </button>
                </div>
                <div className='mt-[130px]'>
                    <p className='text-gray-500 text-lg font-light'>Trusted by the world's leading organizations </p>
                    <div id='icons' className='flex space-x-16 items-center mt-7'>
                        <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/stripe.svg" alt="stripe" className='h-12'/>
                        <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pinterest.svg" alt="pinterest" className='h-12' />
                        <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/kpmg.svg" alt="kpmg" className='h-12' />
                        <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/mercedes.svg" alt="Mercedes Benz" className='h-12' />
                        <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pg.svg" alt="P&G" className='h-8' />
                        <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/telus.svg" alt="Telus" className='h-8' />
                    </div>
                </div>
                <div className='mt-[10rem] overflow-hidden'>
                    <AnimationOnScroll animateIn='animate__fadeInLeft'>
                    <p className='text-white text-2xl font-semibold mb-12'>Productivity</p>
                    </AnimationOnScroll>
                    <div className='w-[70%]'>
                        <AnimationOnScroll animateIn='animate__fadeIn' delay={800}>
                        <p className='text-white font-semibold text-5xl bg-transparent'><span className='text-green-400'>Accelerate high-quality software development.</span> Our AI-powered platform drives innovation with tools that boost developer velocity.</p>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div>
        <section className=' mt-20 w-screen max-h-[96%] px-20'>
            <div className='max-w-7xl mx-auto max-h-5xl bg-[#171b21] rounded-2xl border border-gray-500'>
                <div className='h-16 rounded-t-2xl bg-transparent p-4 flex justify-between border-b border-gray-500'>
                    <div className='bg-transparent flex justify-center items-center'><BsCode className='bg-transparent text-3xl text-gray-500'/></div>
                    <div className='bg-transparent flex items-center justify-center w-[40%] relative'>
                        <FiLock className=' text-gray-500 bg-transparent absolute left-3' />
                        <input type="text" id='vscode' className='text-center border border-gray-500 w-full rounded-md' placeholder='mona-github-github-g59jpq2w5w7.github.dev'/>
                        <GoSync className='text-gray-500 bg-transparent absolute right-2'/>
                    </div>
                    <div className='bg-transparent flex justify-center items-center'><AiOutlinePlus className='bg-transparent text-2xl text-gray-500' /></div>
                </div>
                <div className='flex bg-transparent h-[92%]'>
                    <div className='bg-transparent p-6 border-r border-gray-500'><RxHamburgerMenu className='bg-transparent text-gray-500 text-2xl'/></div>
                    <div className=' w-full bg-transparent'>
                        <div className='h-[3.5rem] bg-transparent flex justify-start space-x-3'>
                            <div className='p-2 ml-3 bg-transparent'>
                                <div className='p-2 rounded-t-lg mt-2'>
                                    <p className='text-white'>index.html</p>
                                </div>
                            </div>
                            <div className='p-2 bg-transparent'>
                                <div className='p-2 mt-2 bg-transparent'>
                                    <p className='text-gray-500 bg-transparent'>script.js</p>
                                </div>
                            </div>
                            <div className='p-2 bg-transparent'>
                                <div className='p-2 mt-2 bg-transparent'>
                                    <p className='text-gray-500 bg-transparent'>package.json</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-[46%] border-b border-gray-500 flex' id='vscodecode'>
                            <div className='w-[8%]'>
                                <div className='text-gray-500 pt-5 pr-2 text-right font-semibold'>
                                    <p>1</p>                                    
                                    <p>2</p>                                    
                                    <p>3</p>                                    
                                    <p>4</p>                                    
                                    <p>5</p>                                    
                                    <p>6</p>                                    
                                    <p>7</p>                                    
                                    <p>8</p>                                    
                                    <p>9</p>                                    
                                    <p>10</p>                                    
                                    <p>11</p>                                    
                                    <p>12</p>                                    
                                </div>
                            </div>
                            <div className='max-w-[33rem] pt-5 pl-1 overflow-x-scroll '>
                                <pre>
                                    <p className='text-white'>&lt;
                                        <span className='text-green-500'>div</span>
                                        <span className='text-[#cbaaf9]'> class</span>
                                        =
                                        <span className='text-[#afd5fb]'>"position-absolute width-full color-bg-default"</span>
                                        <span className='text-[#cbaaf9]'> style</span>
                                        =
                                        <span className='text-[#afd5fb]'>"bottom</span>
                                        :
                                        <span className='text-[#afd5fb]'>-4</span>
                                        <span className='text-[#ee8377]'>rem</span>
                                        ;
                                        <span className='text-[#afd5fb]'>"</span>
                                        &gt;
                                    </p>
                                    <p className='text-white ml-4'>&lt;
                                        <span className='text-green-500'>div</span>
                                        <span className='text-[#cbaaf9]'> class</span>
                                        =
                                        <span className='text-[#afd5fb]'>"container-xl p-responsive"</span>
                                        &gt;
                                    </p>
                                    <p className='text-white ml-8'>&lt;
                                        <span className='text-green-500'>div</span>
                                        <span className='text-[#cbaaf9]'> class</span>
                                        =
                                        <span className='text-[#afd5fb]'>"d-flex flex-justify-center flex-lg-justify-end color-bg-default"</span>
                                        &gt;
                                    </p>
                                    <p className='text-white ml-12'>&lt;
                                        <span className='text-green-500'>div</span>
                                        <span className='text-[#cbaaf9]'> class</span>
                                        =
                                        <span className='text-[#afd5fb]'>"col-8 col-sm-7 col-md-6 col-lg-5 position-relative z-2 right-lg-n12 events-none"</span>
                                        &gt;
                                    </p>
                                    <p className='text-white ml-16'>&lt;
                                        <span className='text-green-500'>picture</span>
                                        &gt;
                                    </p>
                                    <p className='text-white ml-20'>&lt;
                                        <span className='text-green-500'>source</span>
                                        <span className='text-[#cbaaf9]'> srcset</span>
                                        =
                                        <span className='text-[#afd5fb]'>"astro-mona.webp"</span>
                                        <span className='text-[#cbaaf9]'> type</span>
                                        =
                                        <span className='text-[#afd5fb]'>"image/webp"</span>
                                        &gt;
                                    </p>
                                    <p className='text-white ml-20'>&lt;
                                        <span className='text-green-500'>img</span>
                                        <span className='text-[#cbaaf9]'> src</span>
                                        =
                                        <span className='text-[#afd5fb]'>"astro-mona.svg"</span>
                                        <span className='text-[#cbaaf9]'> width</span>
                                        =
                                        <span className='text-[#afd5fb]'>"960"</span>
                                        <span className='text-[#cbaaf9]'> height</span>
                                        =
                                        <span className='text-[#afd5fb]'>"967"</span>
                                        <span className='text-[#cbaaf9]'> class</span>
                                        =
                                        <span className='text-[#afd5fb]'>"home-astro-mona width-full position-absolute bottom-0 height-auto"</span>
                                        <span className='text-[#cbaaf9]'> alt</span>
                                        =
                                        <span className='text-[#afd5fb]'>"Mona looking at GitHub activity across the globe"</span>
                                        &gt;
                                    </p>
                                    <p className='text-white ml-16'>&lt;/
                                        <span className='text-green-500'>picture</span>
                                        &gt;
                                    </p>
                                    <p className='text-white ml-12'>&lt;/
                                        <span className='text-green-500'>div</span>
                                        &gt;
                                    </p>
                                    <p className='text-white ml-8'>&lt;/
                                        <span className='text-green-500'>div</span>
                                        &gt;
                                    </p>
                                    <p className='text-white ml-4'>&lt;/
                                        <span className='text-green-500'>div</span>
                                        &gt;
                                    </p>
                                    <p className='text-white'>&lt;/
                                        <span className='text-green-500'>div</span>
                                        &gt;
                                    </p>
                                </pre>
                            </div>
                        </div>
                        <div className='h-[46%] bg-transparent'>
                            <div className='flex h-16 items-center bg-transparent space-x-5 text-sm justify-start'>
                                <p className='text-white bg-transparent ml-5'>Terminal</p>
                                <p className='text-gray-500 bg-transparent'>Output</p>
                                <p className='text-gray-500 bg-transparent'>Problems</p>
                                <p className='text-gray-500 bg-transparent'>Debug Console</p>
                            </div>
                            <div className='bg-transparent pl-5 tracking-wider'>
                                <p className='bg-transparent overflow-hidden'>
                                    <AnimationOnScroll animateIn='animate__fadeInUp' className='bg-transparent'>
                                    <span className='text-gray-500 bg-transparent'>[09:43:36] Starting '</span><span className='text-[#477fef] bg-transparent'>watch-extension:vscode-api-tests</span><span className='text-gray-500 bg-transparent'>' ...</span>
                                    </AnimationOnScroll>
                                </p>
                                <p className='bg-transparent overflow-hidden'>
                                    <AnimationOnScroll animateIn='animate__fadeInUp' className='bg-transparent'>
                                    <span className='text-gray-500 bg-transparent'>[09:43:36] Finished '</span><span className='text-[#477fef] bg-transparent'>clean-extension:typescript-language-features</span><span className='text-gray-500 bg-transparent'>'</span>
                                    </AnimationOnScroll>
                                </p>
                                <p className='bg-transparent overflow-hidden'>
                                    <AnimationOnScroll animateIn='animate__fadeInUp' className='bg-transparent'>
                                    <span className='text-gray-500 bg-transparent'>[09:43:36] Starting '</span><span className='text-[#477fef] bg-transparent'>watch-extension:typescript-language-features</span><span className='text-gray-500 bg-transparent'>'</span>
                                    </AnimationOnScroll>
                                </p>
                                <p className='bg-transparent overflow-hidden'>
                                    <AnimationOnScroll animateIn='animate__fadeInUp' className='bg-transparent'>
                                    <span className='text-gray-500 bg-transparent'>[09:43:36] Finished '</span><span className='text-[#477fef] bg-transparent'>clean-extension:php-language-features</span><span className='text-gray-500 bg-transparent'>' after</span>
                                    </AnimationOnScroll>
                                </p>
                                <p className='bg-transparent overflow-hidden'>
                                    <AnimationOnScroll animateIn='animate__fadeInUp' className='bg-transparent'>
                                    <span className='text-gray-500 bg-transparent'>[09:43:36] Starting '</span><span className='text-[#477fef] bg-transparent'>watch-extension:php-language-features</span><span className='text-gray-500 bg-transparent'>' ...</span>
                                    </AnimationOnScroll>
                                </p>
                                <p className='bg-transparent overflow-hidden'>
                                    <AnimationOnScroll animateIn='animate__fadeInUp' className='bg-transparent'>
                                    <span className='text-gray-500 bg-transparent'>[09:43:40] Finished '</span><span className='text-[#477fef] bg-transparent'>clean-extension:html-language-features-server</span>
                                    </AnimationOnScroll>
                                </p>
                                <p className='bg-transparent overflow-hidden'>
                                    <AnimationOnScroll animateIn='animate__fadeInUp' className='bg-transparent'>
                                    <span className='text-gray-500 bg-transparent'>[09:43:40] Starting '</span><span className='text-[#477fef] bg-transparent'>watch-extension:html-language-features-server</span>
                                    </AnimationOnScroll>
                                </p>
                                <p className='bg-transparent overflow-hidden'>
                                    <AnimationOnScroll animateIn='animate__fadeInUp' className='bg-transparent'>
                                    <span className='text-gray-500 bg-transparent'>[09:43:43] Finished '</span><span className='text-[#477fef] bg-transparent'>clean-client</span><span className='text-gray-500 bg-transparent'>' after</span><span className='text-[#8e5ed2] bg-transparent'> 7.33 s</span>
                                    </AnimationOnScroll>
                                </p>
                                <p className='bg-transparent overflow-hidden'>
                                    <AnimationOnScroll animateIn='animate__fadeInUp' className='bg-transparent'>
                                    <span className='text-gray-500 bg-transparent'>[09:43:43] Starting '</span><span className='text-[#477fef] bg-transparent'>watch-client</span><span className='text-gray-500 bg-transparent'>' ...</span>
                                    </AnimationOnScroll>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full h-fit bg-transparent border-l border-gray-500 overflow-hidden'>
                        <div className='h-[3.5rem] bg-transparent flex  justify-between items-center p-4'>
                            <RxHamburgerMenu className='bg-transparent text-white text-lg' />
                            <img src={Githubfavicon} alt="GitHub logo" className='bg-transparent h-6'/>
                            <GoBell className='bg-transparent text-white  text-lg'/>
                        </div>
                        <div className=' max-h-[39.3rem] w-full bg-[#060d21] overflow-hidden flex justify-between items-center rounded-br-2xl'>
                            <img src="https://github.githubassets.com/images/modules/site/home/globe.jpg" alt="Globe" className='h-[40rem] w-[35rem] ml-5 mt-10' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className=' max-h-[90vh] w-screen bg-transparent'>
            <div className='flex max-h-5xl  max-w-7xl mx-auto bg-transparent'>
                <div className='relative w-40 bg-transparent overflow-hidden'>
                    <AnimationOnScroll animateIn='animate__fadeInDown' >
                    <div className='w-2 h-[90vh] ml-12 text-white relative bg-transparent' style={{background: "radial-gradient(50% 50% at 50.00% 50.00%, rgba(49, 255, 45, 0.55) 0%, rgba(255, 255, 255, 0.00) 100%)"}}></div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='animate__fadeIn' offset={0} style={{animationDuration:"0.2 s"}} >
                    <img src="https://github.githubassets.com/images/modules/site/home-campaign/git-branch-productivity.svg" alt="line svg" className='bottom-8 right-3 absolute bg-transparent w-20' />
                    </AnimationOnScroll>
                </div>
                <div className='w-full pt-24 ' style={{background:"url('https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp')", backgroundSize:"cover"}}>
                    <div className='flex h-52 bg-transparent'>
                        <div className='w-[50%] bg-transparent'>
                            <AnimationOnScroll className='bg-transparent' animateIn='animate__fadeInRight'>
                            <p className='text-gray-500 text-2xl font-medium w-[85%] bg-transparent'><span className='text-white'>GitHub Codespaces</span> offers a complete dev environment in seconds, so you can code, build, test, and open pull requests from any repo anywhere.</p>
                            <button className='mt-5 text-white text-xl font-semibold py-2 flex items-center bg-transparent' onMouseOver={()=>setLineAfter(true)} onMouseLeave={()=>setLineAfter(false)}>Check out GitHub Codespaces 
                            {!lineAfter ? (
                                <AiOutlineRight className='text-white bg-transparent text-sm ml-1'/>
                            ) : (
                                <BsArrowRight className='text-white bg-transparent text-lg ml-1'/>
                            )}
                            </button>
                            {lineAfter ? (
                                <div className='w-[50%]'>
                                    <hr id='buttonbottom' />
                                </div>
                            ) : ""}
                            </AnimationOnScroll>
                        </div>
                        <div className='relative '>
                            <AnimationOnScroll animateIn='animate__fadeInRight'>
                            <div>
                                <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-ports.png" alt="" className='h-52 rounded-lg'/>
                            </div>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn='animate__fadeInLeft' className='absolute right-[-6rem] top-[-11rem] rounded-lg bg-transparent' offset={300}>
                            <div className='bg-transparent'>
                                <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-context-menu.png" alt="" className='h-72 rounded-lg bg-transparent border border-black shadow-xl'/>
                                <div className='relative bg-transparent h-12 w-full top-[-8rem]'>
                                    <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-cursor.png" alt="mouse" className='absolute h-12 bg-transparent right-16'/>
                                </div>
                            </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className='mt-12 bg-transparent overflow-hidden'>
                        <AnimationOnScroll animateIn='animate__fadeInLeft' className='bg-transparent'>
                        <div className='w-fit mb-4 bg-transparent'>
                            <p className='text-green-400 text-sm border px-2 border-green-400 rounded-full bg-transparent'>Did you know?</p>
                        </div>
                        <div className='mb-4 w-fit bg-transparent'>
                            <p className='text-6xl text-green-400 bg-transparent'>22% increase</p>
                        </div>
                        <div className='w-fit bg-transparent'>
                            <p className='text-xl text-white bg-transparent'>in developer productivity</p>
                        </div>
                        <div className='w-fit bg-transparent'>
                            <p className='text-xl text-white bg-transparent'>after three years with GitHub<span className='text-lg relative top-[-8px] bg-transparent'>1</span></p>
                        </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </section>
        <section className=' w-screen max-h-[50vh]'>
            <div className=' max-w-7xl mx-auto h-full rounded-lg text-white'>
                <Tilt options={defaultOptions} className='h-full w-full text-white  rounded-xl border border-gray-600'>
                    <div className='h-full w-full rounded-lg p-10 flex bg-[#1A1B1D]'>
                        <div className='h-full w-1/2 bg-transparent'>
                            <div className='w-3/4 ml-6 mt-5 bg-transparent'>
                                <p className='text-gray-500 font-semibold text-2xl bg-transparent'><span className='text-white bg-transparent'>GitHub Copilot</span> is your AI pair programmer that empowers you to complete tasks 55% faster by turning natural language prompts into coding suggestions.</p>
                            </div>
                            <div className='mt-16 ml-6 bg-transparent h-12'>
                                <button className=' text-white text-xl bg-transparent font-semibold py-2 flex items-center transition ease-in-out' onMouseOver={()=>setLineAfterGithub(true)} onMouseLeave={()=>setLineAfterGithub(false)}>Meet GitHub Copilot 
                                {!lineAfterGithub ? (
                                    <AiOutlineRight className='text-white bg-transparent text-sm ml-1'/>
                                ) : (
                                    <BsArrowRight className='text-white bg-transparent text-lg ml-1'/>
                                )}
                                </button>
                                {lineAfterGithub ? (
                                    <div className='w-[32%]'>
                                        <hr id='buttonbottom' />
                                    </div>
                                ) : ""}
                            </div>
                        </div>
                        <div className='w-1/2 bg-transparent border border-gray-500 rounded-lg'>
                            <div className='h-[20%] bg-transparent flex items-end space-x-5 text-sm '>
                                <button className='flex items-center ml-2 p-3 border-t border-r border-l rounded-md bg-[#0e1116] border-gray-500'>
                                    <FaPython className='mr-1 text-lg' />draw_scatterplot.py
                                </button>
                                <button className='bg-transparent flex items-center p-3'>
                                    <BiLogoJavascript className='mr-1 text-lg bg-transparent' />time.js
                                </button>
                                <button className='bg-transparent flex items-center p-3'>
                                    <FaGolang className='mr-1 text-2xl bg-transparent' />memoize.go
                                </button>
                            </div>
                            <div className='h-[80%]'>
                                {/* here we have to data is it just wait for a while */}
                            </div>
                        </div>
                    </div>
                </Tilt>
            </div>
        </section>
        <section className=' max-h-screen w-screen'>
            <div className='max-w-7xl mx-auto h-full flex'>
                <div className='w-1/2 pt-8 pr-4'>
                    <Tilt className='h-full bg-[#1A1B1D] border flex flex-col justify-between border-gray-500 rounded-xl' options={defaultOptions}>
                        <div className=' bg-transparent pt-16 pl-16'>
                            <div className='w-[71%] bg-transparent'>
                                <p className='text-gray-500 text-2xl bg-transparent font-medium'><span className='text-white bg-transparent'>GitHub Actions</span> automates your build, test, and deployment workflow with simple and secure CI/CD.</p>
                            </div>
                        </div>
                        <div className='mt-9 h-12 pl-16 bg-transparent'>
                            <button className=' text-white text-xl bg-transparent font-semibold py-2 flex items-center' onMouseOver={()=>setGithubActions(true)} onMouseLeave={()=>setGithubActions(false)}>Discover GitHub Actions 
                            {!githubActions ? (
                                <AiOutlineRight className='text-white bg-transparent text-sm ml-1'/>
                            ) : (
                                <BsArrowRight className='text-white bg-transparent text-lg ml-1'/>
                            )}
                            </button>
                            {githubActions ? (
                                <div className='w-[40%]'>
                                    <hr id='buttonbottom' />
                                </div>
                            ) : ""}
                        </div>
                        <div className='mt-[3.4rem] bg-transparent'>
                            <img src="https://github.githubassets.com/images/modules/site/home-campaign/illu-actions.png?width=1209&format=webpll" alt="github" className=' bg-transparent rounded-xl'/>
                        </div>
                    </Tilt>
                </div>
                <div className='w-1/2 pt-8 pl-4'>
                    <Tilt className='h-full bg-[#1A1B1D] border flex flex-col justify-between border-gray-500 rounded-xl' options={defaultOptions}>
                        <div className=' bg-transparent pt-16 pl-16'>
                            <div className='w-[70%] bg-transparent'>
                                <p className='text-gray-500 text-2xl bg-transparent font-medium'><span className='text-white bg-transparent'>GitHub Mobile</span> fits your projects in your pocket, so you never miss a beat while on the go.</p>
                            </div>
                        </div>
                        <div className=' pl-16 bg-transparent'>
                            <button className=' text-white text-xl bg-transparent font-semibold py-2 flex items-center' onMouseOver={()=>setGithubMobile(true)} onMouseLeave={()=>setGithubMobile(false)}>Get GitHub Mobile 
                            {!githubMobile ? (
                                <AiOutlineRight className='text-white bg-transparent text-sm ml-1'/>
                            ) : (
                                <BsArrowRight className='text-white bg-transparent text-lg ml-1'/>
                            )}
                            </button>
                            {githubMobile ? (
                                <div className='w-[30%]'>
                                    <hr id='buttonbottom' />
                                </div>
                            ) : ""}
                        </div>
                        <div className='mt-[6rem] bg-transparent px-3 '>
                            <img src="https://github.githubassets.com/images/modules/site/home-campaign/illu-mobile.png?width=966&format=webpll" alt="github" className=' bg-transparent rounded-xl'/>
                        </div>
                    </Tilt>
                </div>
            </div>
        </section>
        <section className=' mt-4 h-[80vh] w-screen'>
            <div className='max-w-7xl mx-auto h-full flex'>
                <div className='w-20 flex flex-col justify-between'>
                    <div className='h-48 bg-transparent overflow-hidden'>
                    <AnimationOnScroll animateIn="animate__fadeInDown" className='h-full'>
                        <div className='w-1 mx-auto h-full rotate-180 rounded-t' style={{background:"linear-gradient(180deg, #D9D9D9 0%, #FFF 0.01%, #DC6F52 47.92%, #DC6D50 100%)"}}></div>
                    </AnimationOnScroll>
                    </div>
                    <AnimationOnScroll animateIn="animate__fadeIn">
                    <div className=' w-full h-20 flex justify-center items-center ' style={{background:"radial-gradient(48.08% 48.08% at 50.00% 51.92%, #FDFDFD 0%, rgba(220, 109, 80, 0.50) 0.01%, rgba(255, 255, 255, 0.00) 100%)"}}>
                        <LuHeartHandshake className='text-white text-2xl bg-transparent'/>
                    </div>
                    </AnimationOnScroll>
                    <div className='h-[55%] overflow-hidden'>
                    <AnimationOnScroll animateIn="animate__fadeInDown" className='h-full' delay={300}>
                        <div className='w-1 mx-auto h-full  rounded-t' style={{background:"linear-gradient(180deg, #D9D9D9 0%, #FFF 0.01%, #DC6F52 47.92%, #DC6D50 100%)"}}></div>
                    </AnimationOnScroll>
                    </div>
                </div>
                <div className='w-full pl-5'>
                    <div className='mt-[28vh] overflow-hidden'>
                    <AnimationOnScroll animateIn="animate__fadeIn" className='h-full' offset={300}>
                        <p className='text-white text-3xl'>Collaboration</p>
                    </AnimationOnScroll>
                    </div>
                    <div className='max-w-[65vw] mt-8 overflow-hidden'>
                    <AnimationOnScroll animateIn="animate__fadeIn" className='h-full' delay={200} offset={300}>
                        <p className='text-white text-5xl font-medium'><span className='text-[#df7457]'>Supercharge collaboration.</span> We provide unlimited repositories, best-in-class version control, and the world’s most powerful open source community—so your team can work more efficiently together.</p>
                    </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </section>
        <section className='w-screen'>
            <div className='max-w-7xl mx-auto rounded-xl overflow-hidden'>
                <img src="https://github.githubassets.com/images/modules/site/issues/illo/issues-plan.png?width=2500&format=webpll" alt="" />
            </div>
        </section>
        <section className=' h-screen w-screen bg-transparent '>
            <div className='flex max-w-7xl mx-auto bg-transparent'>
                <div className='relative w-40 bg-transparent overflow-hidden'>
                    <AnimationOnScroll animateIn='animate__fadeInDown'>
                    <div className='w-1 h-[110vh] ml-12 text-white relative bg-transparent' style={{background: "radial-gradient(113.42% 50.64% at 50.00% 51.92%, #DF7457 32.81%, rgba(223, 116, 87, 0.00) 100%)"}}></div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='animate__fadeIn' offset={10} style={{animationDuration:"0.2 s"}} >
                    <img src="https://github.githubassets.com/images/modules/site/home-campaign/git-branch-collaboration.svg" alt="line svg" className='bottom-24 right-3 absolute bg-transparent w-20' />
                    </AnimationOnScroll>
                </div>
                <div className='w-full pt-24 ' style={{background:"url('https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp')", backgroundSize:"cover",}}>
                    <div className='flex justify-between h-52 bg-transparent'>
                        <div className='w-[48%] bg-transparent'>
                            <AnimationOnScroll className='bg-transparent' animateIn='animate__fadeInRight'>
                            <p className='text-gray-500 text-2xl font-medium w-[85%] bg-transparent'><span className='text-white'>GitHub Issues and GitHub Projects</span> supply flexible project management tools that adapt to your team alongside your code.</p>
                            <button className='mt-5 text-white text-xl font-semibold py-2 flex items-center bg-transparent' onMouseOver={()=>setExploreGithub(true)} onMouseLeave={()=>setExploreGithub(false)}>Explore GitHub Issues 
                            {!exploreGithub ? (
                                <AiOutlineRight className='text-white bg-transparent text-sm ml-1'/>
                            ) : (
                                <BsArrowRight className='text-white bg-transparent text-lg ml-1'/>
                            )}
                            </button>
                            {exploreGithub ? (
                                <div className='w-[37%]'>
                                    <hr id='buttonbottom' />
                                </div>
                            ) : ""}
                            </AnimationOnScroll>
                        </div>
                        <div className='relative -top-[11rem] -right-6 bg-transparent'>
                            <div className=' overflow-hidden bg-transparent'>
                            <AnimationOnScroll animateIn='animate__fadeInUp' className='bg-transparent' offset={300}>
                                <img src="https://github.githubassets.com/images/modules/site/home-campaign/illu-projects.png" alt="" className='h-[28rem] rounded-lg'/>
                            </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                    <div className='mt-40 bg-transparent overflow-hidden'>
                        <AnimationOnScroll animateIn='animate__fadeInLeft' offset={0} delay={400} className='bg-transparent'>
                        <div className='w-fit mb-4 bg-transparent'>
                            <p className='text-[#df7457] text-sm border px-2 border-[#df7457] rounded-full bg-transparent'>Did you know?</p>
                        </div>
                        <div className='mb-4 w-fit bg-transparent'>
                            <p className='text-6xl text-[#df7457] bg-transparent'>80% reduction</p>
                        </div>
                        <div className='w-fit bg-transparent'>
                            <p className='text-xl text-white bg-transparent font-semibold'>in onboarding time with GitHub<span className='text-lg relative top-[-8px] bg-transparent'>1</span></p>
                        </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </section>
        <section className=' max-h-screen w-screen isolate bg-transparent'>
            <div className='max-w-7xl mx-auto h-full flex bg-transparent'>
                <div className='w-1/2 pt-8 pr-4 bg-transparent'>
                    <Tilt className='h-full bg-[#1A1B1D] border flex flex-col justify-between border-gray-500 rounded-xl ' options={defaultOptions}>
                        <div className=' bg-transparent pt-16 pl-16'>
                            <div className='w-[71%] bg-transparent'>
                                <p className='text-gray-500 text-2xl bg-transparent font-medium'><span className='text-white bg-transparent'>GitHub Discussions</span> create space to ask questions and have open-ended conversations.</p>
                            </div>
                        </div>
                        <div className='mt-9 h-12 pl-16 bg-transparent'>
                            <button className=' text-white text-xl bg-transparent font-semibold py-2 flex items-center' onMouseOver={()=>setGithubDiscussion(true)} onMouseLeave={()=>setGithubDiscussion(false)}>Enable GitHub Discussions  
                            {!githubDiscussion ? (
                                <AiOutlineRight className='text-white bg-transparent text-sm ml-1'/>
                            ) : (
                                <BsArrowRight className='text-white bg-transparent text-lg ml-1'/>
                            )}
                            </button>
                            {githubDiscussion ? (
                                <div className='w-[40%]'>
                                    <hr id='buttonbottom' />
                                </div>
                            ) : ""}
                        </div>
                        <div className='mt-[3.4rem] bg-transparent'>
                            <img src="https://github.githubassets.com/images/modules/site/home-campaign/illu-discussions.png?width=1208&format=webpll" alt="github" className=' bg-transparent rounded-xl'/>
                        </div>
                    </Tilt>
                </div>
                <div className='w-1/2 pt-8 pl-4'>
                    <Tilt className='h-full bg-[#1A1B1D] border flex flex-col justify-between border-gray-500 rounded-xl' options={defaultOptions}>
                        <div className=' bg-transparent pt-16 pl-16'>
                            <div className='w-[70%] bg-transparent'>
                                <p className='text-gray-500 text-2xl bg-transparent font-medium'><span className='text-white bg-transparent'>GitHub Mobile</span> fits your projects in your pocket, so you never miss a beat while on the go.</p>
                            </div>
                        </div>
                        <div className=' pl-16 bg-transparent relative top-10'>
                            <button className=' text-white text-xl bg-transparent font-semibold py-2 flex items-center' onMouseOver={()=>setPullRequest(true)} onMouseLeave={()=>setPullRequest(false)}>Check out pull requests  
                            {!pullRequest ? (
                                <AiOutlineRight className='text-white bg-transparent text-sm ml-1'/>
                            ) : (
                                <BsArrowRight className='text-white bg-transparent text-lg ml-1'/>
                            )}
                            </button>
                            {pullRequest ? (
                                <div className='w-[30%]'>
                                    <hr id='buttonbottom' />
                                </div>
                            ) : ""}
                        </div>
                        <div className='mt-[6rem] bg-transparent  overflow-hidden rounded-br-xl'>
                            <img src="https://github.githubassets.com/images/modules/site/home-campaign/illu-pull-requests.png?width=1208&format=webpll" alt="github" className=' bg-transparent rounded-tl-xl h-[24.5rem] ml-1'/>
                        </div>
                    </Tilt>
                </div>
            </div>
        </section>
        <section className=' w-screen max-h-[50vh] mt-8'>
            <div className=' max-w-7xl mx-auto h-[60vh] rounded-lg text-white'>
                <Tilt options={defaultOptions} className='h-full w-full text-white  rounded-xl border border-gray-600'>
                    <div className='h-full w-full rounded-lg p-10 flex bg-[#1A1B1D] overflow-hidden'>
                        <div className='h-full w-1/2 bg-transparent flex flex-col justify-between'>
                            <div className='w-3/4 ml-6 mt-5 bg-transparent'>
                                <p className='text-gray-500 font-semibold text-2xl bg-transparent'><span className='text-white bg-transparent'>GitHub Sponsors</span> lets you support your favorite open source maintainers and projects.</p>
                            </div>
                            <div className=' ml-6 bg-transparent h-12'>
                                <button className=' text-white text-xl bg-transparent font-semibold py-2 flex items-center transition ease-in-out' onMouseOver={()=>setGithubSponsors(true)} onMouseLeave={()=>setGithubSponsors(false)}>Invest with GitHub Sponsors  
                                {!githubSponsors ? (
                                    <AiOutlineRight className='text-white bg-transparent text-sm ml-1'/>
                                ) : (
                                    <BsArrowRight className='text-white bg-transparent text-lg ml-1'/>
                                )}
                                </button>
                                {githubSponsors ? (
                                    <div className='w-[45%]'>
                                        <hr id='buttonbottom' />
                                    </div>
                                ) : ""}
                            </div>
                        </div>
                        <div className='bg-transparent w-1/2 -rotate-[15deg] relative -top-40 -right-6'>
                            <Sponsors className='bg-transparent ' />
                        </div>
                    </div>
                </Tilt>
            </div>
        </section>
    </div>
  )
}
