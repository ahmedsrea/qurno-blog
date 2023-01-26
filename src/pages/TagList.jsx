import React, { useEffect, useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import BlogList from '../components/BlogList'
import EmptyList from '../components/EmptyList';
import { blogList } from '../Data/data'

export default function TagList() {
  const [blogs, setBlogs] = useState(null);
  const params = useParams();
  document.title = `Show posts from - ${params}`;

  useEffect(() => {
    let blog = blogList.filter(blog => blog.tag === params.tag);
    console.log(blog);
    if (blog) {
      setBlogs(blog);
    }
  }, [params.tag])
  return (
    <section>
      <div className='mt-[65px] flex flex-col justify-center'>
        <h2 className='font-CreteRound text-center text-[#152035] dark:text-white text-[42px] lg:text-[38px] z-1'>{params.tag}</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className='self-center -translate-y-8 -z-10' width="150" height="32" fill="none"><path stroke="#F6BFB3" stroke-width="9" d="M1 17.194C62.642 7.284 174.478-8.49 296 27"/></svg>
        <div className='flex flex-row justify-center items-center gap-4 font-WorkSans font-medium'>
          <Link to="/" className="flex flex-row items-center hover:underline gap-2 dark:text-[#d6d6d6]"><AiOutlineHome /> Home</Link>
          <span className='w-1 h-1 rounded-full bg-gray-600'></span>
          <Link to="/tags" className="flex flex-row items-center hover:underline gap-2 dark:text-[#d6d6d6]">Tags</Link>
          <span className='w-1 h-1 rounded-full bg-gray-600'></span>
          <p className='text-[#505050] cursor-context-menu dark:text-[#d6d6d6] dark:opacity-[0.7]'>{params.tag}</p>
        </div>
      </div>
      {blogs ? (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-[70px] px-3 mt-[100px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1320px] mx-auto'>
          {blogs.map((blog) => (
            <BlogList
            key={blog.id}
            id={blog.id}
            blog={blog}
            />
            ))}
          </div>
        ) : (
          <EmptyList />
        )}

    </section>
  )
}

