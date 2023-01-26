import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { TbArchive } from 'react-icons/tb';

export default function Archive() {
  document.title = `Archive Posts`;
  return (
    <section>
      <div className='mt-[65px] flex flex-col justify-center'>
        <p className='text-center font-WorkSans font-medium text-[#505050] dark:text-[#d6d6d6]'>Showing posts from</p>
        <h2 className='font-CreteRound text-center text-[#152035] text-[42px] lg:text-[38px] z-1 dark:text-[#d6d6d6]'>Archive</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className='self-center -translate-y-8 -z-10' width="170" height="32" fill="none"><path stroke="#F6BFB3" stroke-width="9" d="M1 17.194C62.642 7.284 174.478-8.49 296 27"/></svg>
        <div className='flex flex-row justify-center items-center gap-4 font-WorkSans font-medium'>
          <Link to="/" className="flex flex-row items-center hover:underline gap-2 dark:text-[#d6d6d6]"><AiOutlineHome /> Home</Link>
          <span className='w-1 h-1 rounded-full bg-gray-600'></span>
          <Link to="/blog" className="flex flex-row items-center hover:underline gap-2 dark:text-[#d6d6d6]">Blog</Link>
          <span className='w-1 h-1 rounded-full bg-gray-600'></span>
          <p className='text-[#505050] cursor-context-menu dark:text-[#d6d6d6] dark:opacity-[0.7]'>Archive</p>
        </div>
      </div>

      <div className='sm:max-w-[540px] md:max-w-[720px] lg:max-w-[850px] xl:max-w-[950px] mx-auto flex flex-col justify-center px-3 mt-20'>
        <div>
          <h1 className='font-CreteRound font-medium text-4xl z-20 relative dark:text-white'>2021</h1>
          <TbArchive className='text-[80px] text-[#ddd] dark:opacity-10 opacity-40 -translate-y-14 -translate-x-6'/>
          <div className='flex flex-row items-center font-WorkSans font-medium md:text-lg text-base gap-5 -translate-y-10 mb-5 dark:text-[#d6d6d6]'>
            <span to="/" className=" text-[#505050] dark:text-[#d6d6d6]">05 Dec</span>
            <span className='w-[5px] h-[5px] rounded-full bg-gray-600'></span>
            <Link to="/blog/The-AGI-hype-train-is-running-out-of-steam" className="flex flex-row items-center hover:underline gap-2">The AGI hype train is running out of steam</Link>
          </div>
          <div className='flex flex-row items-center font-WorkSans font-medium text-lg gap-5 -translate-y-10 mb-5 dark:text-[#d6d6d6]'>
            <span to="/" className=" text-[#505050] dark:text-[#d6d6d6]">17 Nov</span>
            <span className='w-[5px] h-[5px] rounded-full bg-gray-600'></span>
            <Link to="/blog/Creating-an-object-that-travels-at-1%-the-speed-of-light" className="flex flex-row items-center hover:underline gap-2">TCreating an object that travels at 1% the speed of light?</Link>
          </div>
          <div className='flex flex-row items-center font-WorkSans font-medium md:md:text-lg text-base gap-5 -translate-y-10 mb-5 dark:text-[#d6d6d6]'>
            <span to="/" className=" text-[#505050] dark:text-[#d6d6d6] whitespace-nowrap">16 Nov</span>
            <span className='w-[5px] h-[5px] rounded-full bg-gray-600'></span>
            <Link to="/blog/Everything-you-wanted-to-know-about-the-metaverse" className="flex flex-row items-center hover:underline gap-2">Everything you wanted to know about the metaverse</Link>
          </div>
          <div className='flex flex-row items-center font-WorkSans font-medium md:text-lg text-base gap-5 -translate-y-10 mb-5 dark:text-[#d6d6d6]'>
            <span to="/" className=" text-[#505050] dark:text-[#d6d6d6] whitespace-nowrap">15 Nov</span>
            <span className='w-[5px] h-[5px] rounded-full bg-gray-600'></span>
            <Link to="/How-to-hire-a-developer-straight-out-of-bootcamp—without-getting-burned" className="flex flex-row items-center hover:underline gap-2">How to hire a developer straight out of bootcamp — without getting burned</Link>
          </div>
        </div>
        <div>
          <h1 className='font-CreteRound font-medium text-4xl z-20 relative dark:text-white'>2020</h1>
          <TbArchive className='text-[80px] text-[#ddd] opacity-40 dark:opacity-10 -translate-y-14 -translate-x-6'/>
          <div className='flex flex-row items-center font-WorkSans font-medium md:text-lg text-base gap-5 -translate-y-10 mb-5 dark:text-[#d6d6d6]'>
            <span to="/" className=" text-[#505050] dark:text-[#d6d6d6] whitespace-nowrap">12 Oct</span>
            <span className='w-[5px] h-[5px] rounded-full bg-gray-600'></span>
            <Link to="/blog/Why-developers-are-so-divided-over-WordPress" className="flex flex-row items-center hover:underline gap-2">Why developers are so divided over WordPress</Link>
          </div>
          <div className='flex flex-row items-center font-WorkSans font-medium md:text-lg text-base gap-5 -translate-y-10 mb-5 dark:text-[#d6d6d6]'>
            <span to="/" className=" text-[#505050] dark:text-[#d6d6d6] whitespace-nowrap">17 Nov</span>
            <span className='w-[5px] h-[5px] rounded-full bg-gray-600'></span>
            <Link to="/blog/Why-everyone-is-talking-about-green-steel-at-COP26" className="flex flex-row items-center hover:underline gap-2">Why everyone is talking about ‘green steel’ at COP26</Link>
          </div>
          <div className='flex flex-row items-center font-WorkSans font-medium md:text-lg text-base gap-5 -translate-y-10 mb-5 dark:text-[#d6d6d6]'>
            <span to="/" className=" text-[#505050] dark:text-[#d6d6d6] whitespace-nowrap">16 Nov</span>
            <span className='w-[5px] h-[5px] rounded-full bg-gray-600'></span>
            <Link to="/blog/Everything-you-wanted-to-know-about-the-metaverse" className="flex flex-row items-center hover:underline gap-2">Everything you wanted to know about the metaverse</Link>
          </div>
        </div>
        <div>
          <h1 className='font-CreteRound font-medium text-4xl z-20 relative dark:text-white'>2019</h1>
          <TbArchive className='text-[80px] text-[#ddd] opacity-40 dark:opacity-10 -translate-y-14 -translate-x-6'/>
          <div className='flex flex-row items-center font-WorkSans font-medium md:text-lg text-base gap-5 -translate-y-10 mb-5 dark:text-[#d6d6d6]'>
            <span to="/" className=" text-[#505050] dark:text-[#d6d6d6] whitespace-nowrap">17 Nov</span>
            <span className='w-[5px] h-[5px] rounded-full bg-gray-600'></span>
            <Link to="/blog/Why-everyone-is-talking-about-green-steel-at-COP26" className="flex flex-row items-center hover:underline gap-2">Why everyone is talking about ‘green steel’ at COP26</Link>
          </div>
          <div className='flex flex-row items-center font-WorkSans font-medium md:text-lg text-base gap-5 -translate-y-10 mb-5 dark:text-[#d6d6d6]'>
            <span to="/" className=" text-[#505050] dark:text-[#d6d6d6] whitespace-nowrap">16 Nov</span>
            <span className='w-[5px] h-[5px] rounded-full bg-gray-600'></span>
            <Link to="/blog/Everything-you-wanted-to-know-about-the-metaverse" className="flex flex-row items-center hover:underline gap-2">Everything you wanted to know about the metaverse</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
