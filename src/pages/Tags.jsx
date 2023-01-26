import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { TbTags } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function Tags() {
  const tags = ['Machine', 'Life', 'Lighting', 'Lifestyle', 'Startups', 'Work'];
  return (
    <section>
      <div className='mt-[65px] flex flex-col justify-center'>
        <h2 className='font-CreteRound text-center text-[#152035] dark:text-white text-[42px] lg:text-[38px] z-1'>All tags</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className='self-center -translate-y-8 -z-10' width="170" height="32" fill="none"><path stroke="#F6BFB3" strokeWidth="9" d="M1 17.194C62.642 7.284 174.478-8.49 296 27"/></svg>
        <div className='flex flex-row justify-center items-center gap-4 font-WorkSans font-medium'>
          <Link to="/" className="flex flex-row items-center hover:underline gap-2 dark:text-white"><AiOutlineHome /> Home</Link>
          <span className='w-1 h-1 rounded-full bg-gray-600'></span>
          <p className='text-[#505050] cursor-context-menu dark:text-[#d6d6d6] dark:opacity-[0.7]'>tags</p>
        </div>
      </div>
      <div className='mt-24 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1320px] mx-auto px-3'>
        {tags.map((tag, index) => (
          <Link to={`${tag}`} key={index} className="flex flex-col items-center bg-white dark:bg-[#041722] text-black p-7 ">
              <TbTags className='text-4xl mb-4 dark:text-[#d6d6d6]'/>
              <p className='font-CreteRound font-medium text-2xl mb-4 dark:text-white'>{tag}</p>
              <p className='font-WorkSans font-medium text-base dark:text-[#d6d6d6]'>Total 2 posts</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
