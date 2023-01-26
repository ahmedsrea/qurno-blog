import React from 'react'
import { TbCalendarEvent } from 'react-icons/tb';
import { FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export default function BlogList({ id, blog }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <>
        <div className="group relative flex flex-col Mwad">
          <div className='absolute w-full h-[230px]  md:h-[450px] lg:h-[350px] bg-white dark:bg-stone-900  z-5 rounded opacity-50 group-hover:opacity-100 dark:group-hover:bg-[#041722] transition duration-300 ease-in-out'></div>
         <Link to={`/blog/${id}`}><img ref={ref} src={blog.cover} alt="" className={`w-[90%] h-[230px] md:h-[450px] lg:h-[350px] mx-auto object-cover z-6 -translate-y-[35px] rounded grayscale group-hover:grayscale-0 group-hover:-translate-y-[40px] transition-all duration-300 delay-150  ease-in-out ${ inView ? 'blur-none' : 'blur-lg'} mewImag`} /></Link>
         
          
          <div className='w-[90%] mx-auto mt-6'>

            <div className='flex flex-row items-center mb-3 text-base text-[#505050] dark:text-[#d6d6d6] font-WorkSans font-medium'>
              <p className='flex flex-row items-center mr-5'><TbCalendarEvent className='mr-2 text-[18px]'/> {blog.createdAt}</p>
              <span className='bg-gray-500 h-[2px] w-3 rounded mr-5'></span>
              <p className='flex flex-row items-center'><FiClock className='mr-2 text-[18px]'/> {blog.readTime}</p>
            </div>

            <Link to={`/blog/${id}`}><h1 className="font-CreteRound text-3xl font-[500] mb-6 hover:text-[#f08E80] transition duration-300 ease-in-out leading-[45px] dark:text-white" >{blog.title}</h1></Link>
            <p className='line-clamp-2 text-base text-[#505050] dark:text-[#d6d6d6] font-WorkSans font-medium leading-7 mb-6'>{blog.desc1}</p>

            <div className='flex flex-row items-center'>
              <Link to={`/author/${blog.authorFirstName}-${blog.authorLastName}`} className='group flex flex-row items-center font-WorkSans font-medium text-[#505050] dark:text-[#c2c2c2]'>
                <img 
                  src={blog.authorAvatar} 
                  alt="authorAvatar" 
                  className='rounded-md mr-3 w-[26px]' 
                /> by 
                <span className='ml-1 group-hover:text-[#f08E80] dark:text-[#c2c2c2] transition duration-300 ease-in-out'>{blog.authorFirstName}</span>
              </Link>
              <span className='ml-3 mr-3 bg-[#505050] dark:bg-[#d6d6d6] w-1 h-1 rounded-full'></span>
              <div className='flex flex-row gap-3'>{blog.tags.map((tag, index) => (
                <div key={index} className='bg-[rgba(240,142,128,.1)] text-[#505050] dark:text-[#d6d6d6] py-[6px] px-[10px] rounded-[2px] text-sm font-WorkSans font-medium hover:text-white hover:bg-[#f08e80] cursor-pointer transition duration-300 ease-in-out'>{tag}</div>
              ))}</div>
            </div>
          </div>
        </div>
    </>
  )
}
