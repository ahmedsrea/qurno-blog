import React, { useEffect, useState } from 'react'
import { blogList } from '../Data/data';
import { Link, useParams } from 'react-router-dom';
import { TbCalendarEvent } from 'react-icons/tb';
import { FiClock, FiFacebook, FiTwitter } from 'react-icons/fi';
import { AiOutlineReddit } from 'react-icons/ai'
import { CiLinkedin } from 'react-icons/ci'
import { ImPinterest2 } from 'react-icons/im'
import { TbArrowUpRight } from 'react-icons/tb'
import EmptyList from '../components/EmptyList';
import { useInView } from 'react-intersection-observer';

export default function Blog() {
  const params = useParams();
  const [ blog, setBlog ] = useState(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === params.blogId);
    if (blog) {
      setBlog(blog);
    }
    document.title = `${blog.title}`;
  }, [params.blogId])
  

  return (
    <>
      {blog ? (
        <section className='sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1120px] mx-auto flex flex-col px-3 mt-[60px] pb-[70px]'>          
          <div className='mb-[45px] lg:ml-[50px] xl:ml-[10px]'>
            <h1 className='text-[42px] md:text-[52px] xl:text-[64px] font-CreteRound dark:text-white'>{blog.title}</h1>
            <div className='flex flex-row flex-wrap mt-[30px] items-center text-[#505050] dark:text-[#d6d6d6] font-WorkSans font-medium gap-5'>
              <Link to={`/author/${blog.authorFirstName}-${blog.authorLastName}`}><span className='flex flex-row items-center font-WorkSans font-medium text-[#505050] dark:text-[#d6d6d6]'>
                  <img src={blog.authorAvatar} alt="authorAvatar" className='rounded-md mr-3 w-[26px]' /> by 
                  <span className='ml-1 hover:text-[#f08E80] transition duration-300 ease-in-out'>{blog.authorFirstName} {blog.authorLastName}</span>
              </span></Link>
              <span className='bg-gray-500 h-[2px] w-3 rounded '></span>
              <p className='flex flex-row items-center'><FiClock className='mr-2 text-[18px]'/> {blog.readTime}</p>
              <span className='bg-gray-500 h-[2px] w-3 rounded'></span>
              <p className='flex flex-row items-center'><TbCalendarEvent className='mr-2 text-[18px]'/> {blog.createdAt}</p>
            </div>
          </div>
          <img src={blog.cover} alt={blog.title} ref={ref} className={`rounded ${ inView ? 'blur-none' : 'blur-lg'} transition duration-500 delay-150`} />

          <div className='mt-10 flex lg:flex-row-reverse flex-col'>
            {/* Start The content section */}            

            <div className='lg:w-[85%] w-full'>
              {/* <h1 className='md:text-[30px] text-[28px] font-CreteRound font-medium mb-6'>{blog.subHead1}</h1> */}
              {blog.subHead1 && (
                <h1 className='md:text-[30px] text-[28px] font-CreteRound font-medium mb-6 dark:text-white'>{blog.subHead1}</h1>
              )}
              <p className='md:text-[16px] text-[15px] font-WorkSans font-medium mb-6 text-[#505050] dark:text-[#d6d6d6]'>{blog.desc1}</p>
              <p className='md:text-[16px] text-[15px] font-WorkSans font-medium mb-6 text-[#505050] dark:text-[#d6d6d6]'>{blog.desc1}</p>
              <h1 className='md:text-[30px] text-[28px] font-CreteRound font-medium mb-6 dark:text-white'>{blog.subHead2}</h1>
              <p className='md:text-[16px] text-[15px] font-WorkSans font-medium mb-6 text-[#505050] dark:text-[#d6d6d6]'>{blog.desc2}</p>
              <p className='md:text-[16px] text-[15px] font-WorkSans font-medium mb-6 text-[#505050] dark:text-[#d6d6d6]'>{blog.desc2}</p>
              <h1 className='md:text-[30px] text-[28px] font-CreteRound font-medium mb-6 dark:text-white'>{blog.subHead3}</h1>
              <p className='md:text-[16px] text-[15px] font-WorkSans font-medium mb-6 text-[#505050] dark:text-[#d6d6d6]'>{blog.desc3}</p>
              <p className='md:text-[16px] text-[15px] font-WorkSans font-medium mb-6 text-[#505050] dark:text-[#d6d6d6]'>{blog.desc3}</p>
              <h1 className='md:text-[30px] text-[28px] font-CreteRound font-medium mb-6 dark:text-white'>{blog.subHead4}</h1>
              <p className='md:text-[16px] text-[15px] font-WorkSans font-medium mb-6 text-[#505050] dark:text-[#d6d6d6]'>{blog.desc4}</p>
              <p className='md:text-[16px] text-[15px] font-WorkSans font-medium mb-6 text-[#505050] dark:text-[#d6d6d6]'>{blog.desc4}</p>

              <div className='my-10 font-WorkSans font-medium text-[#505050] dark:text-[#d6d6d6]'>Tags: {blog.tags.map((tag, index) => (
                <Link key={index} to={`/tags/${tag}`}><span className='bg-white text-[#505050] text-[16px] py-[6px] px-[10px] rounded-[2px] text-sm font-WorkSans font-medium hover:text-[#f08e80] cursor-pointer transition duration-300 ease-in-out mr-2 dark:bg-opacity-5 dark:text-white'>{tag}</span></Link>
              ))}</div>
            </div>
            
            {/* End The Content section */}

            {/* Start The Share section */}
            
            <div className='flex flex-col lg:w-[15%] w-full lg:ml-3'>
              <div className=' sticky top-5 left-0'>
                <div className='uppercase text-[#505050] dark:text-[#ddd] font-medium text-[14px] font-WorkSans mb-[12px]'>Share</div>
                <div className='flex flex-row lg:flex-col items-start gap-2'>
                  <div className='flex px-3 py-3 border border-gray-300 rounded hover:bg-[#f08E80] hover:text-white hover:border-[#f08E80] cursor-pointer dark:border-[#ddd] dark:text-[#ffffffcc] text-lg'>
                    <FiTwitter className='' />
                  </div>
                  <div className='px-3 py-3 border border-gray-300 dark:border-[#ddd] dark:text-[#ffffffcc] rounded hover:bg-[#f08E80] hover:text-white hover:border-[#f08E80] cursor-pointer text-lg'>
                    <FiFacebook className='' />
                  </div>
                  <div className='px-3 py-3 border border-gray-300 dark:border-[#ddd] dark:text-[#ffffffcc] text-lg rounded hover:bg-[#f08E80] hover:text-white hover:border-[#f08E80] cursor-pointer'>
                    <CiLinkedin className='' />
                  </div>
                  <div className='px-3 py-3 border border-gray-300  dark:border-[#ddd] dark:text-[#ffffffcc] text-lg rounded hover:bg-[#f08E80] hover:text-white hover:border-[#f08E80] cursor-pointer'>
                    <AiOutlineReddit className='' />
                  </div>
                  <div className='px-3 py-3 border border-gray-300 dark:border-[#ddd] dark:text-[#ffffffcc] text-lg rounded hover:bg-[#f08E80] hover:text-white hover:border-[#f08E80] cursor-pointer'>
                    <ImPinterest2 className='' />
                  </div>
              </div>
              </div>
            </div>
            
            {/* End The Share section */}
          </div>
          <div className='flex md:flex-row flex-col mt-12 gap-10'>
            <Link to={`/author/${blog.authorFirstName}-${blog.authorLastName}`}><div className='flex'><img src={blog.authorAvatar} alt={blog.authorFirstName} className="md:w-[185px] w-[155px] rounded" /></div></Link>
            <div>
              <Link to={`/author/${blog.authorFirstName}-${blog.authorLastName}`} className='text-2xl text-[#152035] dark:text-white font-CreteRound font-medium hover:text-[#f08E80] transition duration-300 ease-in-out'>{`${blog.authorFirstName}-${blog.authorLastName}`}</Link>
              <p className='text-base text-[#505050] dark:text-[#ddd] font-WorkSans font-medium mt-4 mb-4 line-clamp-2'>{blog.authorInfo}</p>
              <Link to={`/author/${blog.authorFirstName}-${blog.authorLastName}`}><p className='flex flex-row font-WorkSans underline font-medium text-[#152035] dark:text-white hover:text-[#f08E80]'>See all posts by this author <TbArrowUpRight className='text-xl translate-y-1'/></p></Link>
            </div>
          </div>
        </section>
      ) : (
        <EmptyList />
      )}
    </>
  )
}
