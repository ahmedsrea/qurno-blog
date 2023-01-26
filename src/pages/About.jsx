import React from 'react'
import { Link } from 'react-router-dom'
import ae from "../assets/ae.svg"
import { AiOutlineHome } from 'react-icons/ai';
import a1 from '../assets/01.webp';
import a2 from '../assets/00.webp';
import a3 from '../assets/033.webp';
import chris from '../assets/chris-impey.webp';
import Emma from '../assets/emma-hazel.webp';
import thomas from '../assets/thomas-macaulay.webp';
import { useInView } from 'react-intersection-observer';

export default function About() {
  document.title = `About`;
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '700px 0px',
  });

  return (
    <section>
      <div className='mt-[65px] flex flex-col justify-center'>
        <h2 className='font-CreteRound text-center text-[#152035] dark:text-white text-[42px] lg:text-[38px] z-1'>About</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className='self-center -translate-y-8 -z-10 rotate-6 z-6' width="130" height="32" fill="none"><path stroke="#F6BFB3" stroke-width="9" d="M1 17.194C62.642 7.284 174.478-8.49 296 27"/></svg>
      </div>
      <div className='flex flex-row justify-center items-center mt-10 gap-4 font-WorkSans font-medium'>
        <Link to="/" className="flex flex-row items-center hover:underline gap-2 dark:text-[#d6d6d6]"><AiOutlineHome/> Home</Link>
        <span className='w-1 h-1 rounded-full bg-gray-600'></span>
        <p className='text-[#505050] dark:text-[#d6d6d6] dark:opacity-[0.7] cursor-context-menu '>blog</p>
      </div>
      <h1 className='text-[40px] font-CreteRound font-medium text-center dark:text-white mt-28'>We are the Qurno,<br />Team of content writers and designers.</h1>
      <div className='grid lg:grid-cols-4 grid-cols-2 px-3 mt-[100px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1320px] mx-auto gap-5'>
        <div className='col-span-2'><img ref={ref} src={a1} alt="team" className={`rounded ${ inView ? 'blur-none transition duration-500' : 'blur-lg'}`}/></div>
        <div className=''><img ref={ref} src={a2} alt="team"  className={`rounded lg:translate-y-10 ${ inView ? 'blur-none  transition duration-500' : 'blur-lg'}`}/></div>
        <div className=''><img ref={ref} src={a3} alt="team"  className={`rounded ${ inView ? 'blur-none transition duration-500' : 'blur-lg'}`}/></div>
      </div>
      <div className='mt-20 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[850px] xl:max-w-[1080px] mx-auto text-center font-WorkSans font-medium text-[#505050] px-3 dark:text-[#D6d6d6]'>
        <p>If ever a place existed where you could just go crazy creatively, it is definitely your about page. It’s your chance to show your readers who you really are. Pictures, quotes, inspirational graphics, whatever it is that drives you.. Display it here in a way that only you can.</p>
        <p className='mt-6'>I’ve included a plugin in the setup of this theme that will make adding columns to your pages and posts a piece of cake. Let creativity take control, and forget about the technical end of things, I’ve got your six.</p>
      </div>
      <div className='sm:max-w-[540px] md:max-w-[720px] lg:max-w-[850px] xl:max-w-[950px] mx-auto flex flex-col justify-center px-3'>
        <div className='mt-[65px]' style={({ background: `url(${ae}) no-repeat bottom center dark:bg-[#ccc]`})}>
          <h2 className='font-CreteRound text-center text-[#152035] dark:text-white text-[42px] lg:text-[38px]'>Our Writers</h2>
        </div>
        <div className='flex flex-row flex-wrap md:gap-10 gap-20 md:justify-between justify-center text-center mt-20'>
          <Link to={`/author/Chris-Impey`} className="group">
              <img ref={ref} src={chris} alt="Chris" className={`w-[150px] rounded group-hover:opacity-70 transition duration-300 ease-in-out ${ inView ? 'blur-none' : 'blur-lg'}`}/>
              <h1 className='font-CreteRound font-medium text-2xl mt-7 dark:text-white'>Chris Impey</h1>
              <p className='font-WorkSans font-medium mt-2 dark:text-[#d6d6d6]'><span className='font-bold dark:text-white'>04</span> Published posts</p>
            </Link>
          <Link to={`/author/Emma-Hazel`}  className="group">
            <img ref={ref} src={Emma} alt="Chris"   className={`w-[150px] rounded group-hover:opacity-70 transition duration-300 ease-in-out ${ inView ? 'blur-none' : 'blur-lg'}`}/>
            <h1  className='font-CreteRound font-medium text-2xl mt-7 dark:text-white'>Emma Hazel</h1>
            <p className='font-WorkSans font-medium mt-2 dark:text-[#d6d6d6]'><span className='font-bold dark:text-white'>02</span> Published posts</p>
          </Link>
          <Link to={`/author/Thomas-Macaulay`}  className="group flex flex-col items-center">
            <img ref={ref} src={thomas} alt="Chris"  className={`w-[150px] rounded group-hover:opacity-70 transition duration-300 ease-in-out ${ inView ? 'blur-none' : 'blur-lg'}`} />
            <h1  className='font-CreteRound font-medium self-start text-2xl mt-7 dark:text-white'>Thomas Macaulay</h1>
            <p className='font-WorkSans font-medium mt-2 dark:text-[#d6d6d6]'><span className='font-bold dark:text-white'>03</span> Published posts</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
