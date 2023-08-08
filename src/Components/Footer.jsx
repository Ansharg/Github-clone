import React from 'react'
import {BsTwitter ,BsYoutube} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import {FaLinkedinIn,FaTwitch,FaTiktok,FaGithub} from 'react-icons/fa'

export default function Footer() {
  return (
    <>
    <div className='text-gray-400 h-[28rem] w-full'>
        <div className='w-full h-full flex px-24 '>
            <div className='w-[35%]'>
                <div className='w-fit'>
                    <p className='text-white text-3xl font-bold cursor-pointer '>GitHub</p>
                </div>
                <div className='mt-10'>
                    <p className='text-white text-sm'>Subscribe to The GitHub Insider</p>
                </div>
                <div className='pr-5'>
                    <p className='text-sm'>Discover tips, technical guides, and best practices in our monthly newsletter for developers.</p>
                </div>
                <div className='h-20 flex items-center'>
                    <button className='text-white border rounded-md hover:border-white hover:border-2 border-gray-500 text-lg font-semibold px-6 py-2'>Subscribe</button>
                </div>
            </div>
            <div className='space-y-3 text-sm '>
                <div>
                    <p>Product</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Features</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Security</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Team</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Enterprise</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Customer stories</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>The ReadME Project</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Pricing</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Resources</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Roadmap</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Compare GitHub</p>
                </div>
            </div>
            <div className='ml-16 space-y-3 text-sm'>
                <div>
                    <p>Platform</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Developer API</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Partners</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Electron</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>GitHub Desktop</p>
                </div>
            </div>
            <div className='ml-28 space-y-3 text-sm'>
                <div>
                    <p>Support</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Docs</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Community Forum</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Professional Services</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Premium Support</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Skills</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Status</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Contact GitHub</p>
                </div>
            </div>
            <div className='ml-16 space-y-3 text-sm'>
                <div>
                    <p>Company</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>About</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Blog</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Careers</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Press</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Inclusion</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Social Impact</p>
                </div>
                <div>
                    <p className='hover:text-blue-500 hover:underline cursor-pointer w-fit'>Shop</p>
                </div>
            </div>
        </div>
    </div>
    <div className='w-full h-20 text-gray-500 flex justify-between px-24 bg-zinc-900'>
        <div className='flex items-center h-full text-xs space-x-3'>
            <div>
                <p>© 2023 GitHub, Inc.</p>
            </div>
            <div>
                <p className='hover:text-blue-500 hover:underline'>Terms</p>
            </div>
            <div className='flex items-center'>
                <p  className='hover:text-blue-500 hover:underline'>Privacy</p>
                <p  className='hover:text-blue-500 hover:underline ml-1'>(Updated 08/2022)</p>
            </div>
            <div>
                <p className='hover:text-blue-500 hover:underline'>Sitemap</p>
            </div>
            <div>
                <p className='hover:text-blue-500 hover:underline'>What is Git?</p>
            </div>
        </div>
        <div className='flex items-center text-2xl space-x-3'>
            <div>
                <BsTwitter className='cursor-pointer'/>
            </div>
            <div>
                <AiFillFacebook  className='cursor-pointer'/>
            </div>
            <div>
                <FaLinkedinIn  className='cursor-pointer'/>
            </div>
            <div>
                <BsYoutube  className='cursor-pointer'/>
            </div>
            <div>
                <FaTwitch  className='cursor-pointer'/>
            </div>
            <div>
                <FaTiktok  className='cursor-pointer'/>
            </div>
            <div>
                <FaGithub  className='cursor-pointer'/>
            </div>
        </div>
    </div>
    </>
  )
}
