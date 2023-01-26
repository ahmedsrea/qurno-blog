import React, { useState } from 'react'
import BlogList from '../components/BlogList';
import { blogList } from '../Data/data';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export default function Blogs() {
  const [blogs] = useState(blogList);
  document.title = `All posts`;

  const [ pageNumber, setPageNumber ] = useState(0);

  const blogsPerPage = 6;
  const pagesVisited = pageNumber * blogsPerPage;

  const displayBlogs = blogs.slice(pagesVisited, pagesVisited + blogsPerPage).map((blog) => (
    <BlogList 
      key={blog.id}
      blog={blog} 
      id={blog.id}
    />
  ));
  const pageCount = Math.ceil(blogs.length / blogsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }
  return (
    <div>
      <div className='mt-[65px] flex flex-col justify-center'>
        <h2 className='font-CreteRound text-center text-[#152035] dark:text-white text-[42px] lg:text-[38px]'>All posts</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className='self-center -translate-y-8 -z-10 rotate-6 z-6' width="170" height="32" fill="none"><path stroke="#F6BFB3" stroke-width="9" d="M1 17.194C62.642 7.284 174.478-8.49 296 27"/></svg>
      </div>
      <div className='flex flex-row justify-center items-center mt-10 gap-4 font-WorkSans font-medium'>
        <Link to="/" className="flex flex-row items-center hover:underline gap-2 dark:text-[#d6d6d6]"><AiOutlineHome/> Home</Link>
        <span className='w-1 h-1 rounded-full bg-gray-600'></span>
        <p className='text-[#505050] cursor-context-menu dark:text-[#d6d6d6] dark:opacity-[0.7]'>blog</p>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-[70px] px-3 mt-[145px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-[1320px] mx-auto'>
        {displayBlogs}
      </div>
      <div className='flex justify-center mt-20 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-[1320px] mx-auto font-WorkSans font-medium text-[#152035]'>
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns dark:border-[#031a28]"}
          previousLinkClassName={"previosBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationAction"}
        />
      </div>
    </div>
  )
}
