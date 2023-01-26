import React, { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPlusSquareDotted } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import chris from '../assets/chris-impey.webp';
import Emma from '../assets/emma-hazel.webp';
import thomas from '../assets/thomas-macaulay.webp';
import BlogList from '../components/BlogList';
import { blogList } from '../Data/data';

export default function Author() {
  const [blogs] = useState(blogList.slice(0,6));
  document.title = `Our Authors`;
  
  return (
    <section>
      <div className='mt-[65px] flex flex-col justify-center'>
        <h2 className='font-CreteRound text-center text-[#152035] dark:text-white text-[42px] lg:text-[38px] z-1'>Author</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className='self-center -translate-y-8 -z-10' width="170" height="32" fill="none"><path stroke="#F6BFB3" stroke-width="9" d="M1 17.194C62.642 7.284 174.478-8.49 296 27"/></svg>
        <div className='flex flex-row justify-center items-center gap-4 font-WorkSans font-medium'>
          <Link to="/" className="flex flex-row items-center hover:underline gap-2 dark:text-[#d6d6d6]"><AiOutlineHome /> Home</Link>
          <span className='w-1 h-1 rounded-full bg-gray-600'></span>
          <p className='text-[#505050] cursor-context-menu dark:text-[#d6d6d6] dark:opacity-[0.7]'>Author</p>
        </div>
      </div>
      <div className='sm:max-w-[540px] md:max-w-[720px] lg:max-w-[850px] xl:max-w-[950px] mx-auto flex flex-col justify-center px-3'>
        <div className='flex flex-row flex-wrap md:gap-10 gap-20 md:justify-between justify-center text-center mt-20'>
          <Link to={`/author/Chris-Impey`} className="group">
                <img effect='blur' delayTime='1000' src={chris} alt="Chris" className='w-[150px] rounded group-hover:opacity-70 transition duration-300 ease-in-out'/>
                <h1 className='font-CreteRound font-medium text-2xl mt-7 dark:text-white'>Chris Impey</h1>
                <p className='font-WorkSans font-medium mt-2 dark:text-[#d6d6d6]'><span  className='font-bold dark:text-white'>04</span> Published posts</p>
              </Link>
            <Link to={`/author/Emma-Hazel`}  className="group">
              <img effect='blur' delayTime='1000' src={Emma} alt="Chris"   className='w-[150px] rounded group-hover:opacity-70 transition duration-300 ease-in-out'/>
              <h1  className='font-CreteRound font-medium text-2xl mt-7 dark:text-white'>Emma Hazel</h1>
              <p className='font-WorkSans font-medium mt-2 dark:text-[#d6d6d6]'><span  className='font-bold dark:text-white'>02</span> Published posts</p>
            </Link>
            <Link to={`/author/Thomas-Macaulay`}  className="group flex flex-col items-center">
              <img effect='blur' delayTime='1000' src={thomas} alt="Chris"  className='w-[150px] rounded group-hover:opacity-70 transition duration-300 ease-in-out' />
              <h1  className='font-CreteRound font-medium text-2xl mt-7 text-center dark:text-white'>Thomas Macaulay</h1>
              <p className='font-WorkSans font-medium mt-2 dark:text-[#d6d6d6]'><span  className='font-bold dark:text-white'>03</span> Published posts</p>
            </Link>
          </div>
      </div>
      <div className='mt-20 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1320px] mx-auto'>
        <hr className='bg-[#ddd] dark:bg-[#d6d6d6] h-[0.5px]'/>
      </div>
      <div className='mt-[95px] flex flex-col justify-center'>
      <h2 className='font-CreteRound text-center text-[#152035] dark:text-white text-[42px] lg:text-[38px] z-1'>Recent Posts</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className='self-center -translate-y-8 -z-10' width="230" height="30" fill="none"><path stroke="#F6BFB3" stroke-width="9" d="M1 17.194C62.642 7.284 174.478-8.49 296 27"/></svg>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-[70px] px-3 mt-[100px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1320px] mx-auto'>
        {blogs.map((blog) => (
          <BlogList 
            key={blog.id}
            blog={blog} 
            id={blog.id}
          />
        ))}
      </div>
      <div className='flex justify-center mb-10'>
        <Link to={'/blog'} className='mt-16 flex flex-row items-center bg-[#f08E80] hover:bg-black text-white px-6 py-3 rounded transition duration-300 ease-in-out font-WorkSans font-medium text-base'>
          <BsPlusSquareDotted className='mr-2 text-g translate-y-[2px]'/> View all posts
        </Link>
      </div>
    </section>
  )
}
