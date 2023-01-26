import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';

export default function Contact() {
  return (
    <section>
      <div className='flex flex-col justify-center text-center lg:text-left sm:max-w-[540px] md:max-w-[720px] lg:max-w-[850px] xl:max-w-[1080px] mx-auto px-3 lg:gap-12 gap-7'>
        <div className='mt-[65px] flex flex-col justify-center'>
          <h2 className='font-CreteRound text-center text-[#152035] dark:text-white text-[42px] lg:text-[38px] z-1'>Contact</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className='self-center -translate-y-9 -z-10' width="160" height="32" fill="none"><path stroke="#F6BFB3" strokeWidth="9" d="M1 17.194C62.642 7.284 174.478-8.49 296 27"/></svg>
          <div className='flex flex-row justify-center items-center gap-4 font-WorkSans font-medium'>
            <Link to="/" className="flex flex-row items-center hover:underline gap-2 dark:text-white"><AiOutlineHome /> Home</Link>
            <span className='w-1 h-1 rounded-full bg-gray-600'></span>
            <p  className="flex flex-row items-center cursor-context-menu text-[#505050] dark:text-[#d6d6d6] dark:opacity-[0.7]">Contact</p>
          </div>
        </div>

        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
          <div className='text-left'>
            <h1 className='font-CreteRound dark:text-white font-medium text-3xl mb-5'>Contact Qurno</h1>
            <p className='font-WorkSans font-medium text-[#505050] mb-14 dark:text-[#d6d6d6]'>I'm here to help and answer any question you might have. I look forward to hearing from you</p>
            <h1 className='font-CreteRound dark:text-white font-medium text-2xl mb-5'>Hate forms?<br /> Write an email or make a call</h1>
            <span className='flex flex-row items-center'><MdOutlineMarkEmailUnread className='mr-3 translate-y-[2px] dark:text-[#d6d6d6]' /><a href="mailto:contact@gamil.com" className='underline font-WorkSans font-medium dark:text-[#d6d6d6]'>contact@gamil.com</a></span>
            <span className='flex flex-row items-center mt-2 font-WorkSans font-medium '><BsTelephone className='mr-3 translate-y-[2px] dark:text-[#d6d6d6]' /> <span className='text-[#505050] dark:text-[#d6d6d6]'>+98 02 296 4902</span></span>
          </div>
          <div className='flex flex-col items-start gap-5'>
            <h1 className='font-CreteRound dark:text-white font-medium text-3xl'>Contact form</h1>
            <textarea cols="30" rows="4" className='resize-none focus:outline-none border border-[#ddd] focus:border-[#f08e80] dark:focus:border-[#d6d6d6] rounded p-5 font-WorkSans font-medium text-[#212529] transition duration-300 ease-in-out w-full dark:bg-transparent dark:border-[#2b373e] dark:text-white' placeholder='Ask question or just say Hi'></textarea>
            <input type="email" name="" id=""  className='resize-none focus:outline-none border border-[#ddd] rounded p-3 font-WorkSans font-medium text-[#212529] focus:border-[#f08e80] dark:focus:border-[#d6d6d6] transition duration-300 ease-in-out w-full dark:bg-transparent dark:border-[#2b373e] dark:text-white' placeholder='Email address'/>
            <input type="text" name="" id="" className='resize-none focus:outline-none border border-[#ddd] rounded p-3 font-WorkSans font-medium text-[#212529] focus:border-[#f08e80] dark:focus:border-[#d6d6d6] transition duration-300 ease-in-out w-full dark:bg-transparent dark:border-[#2b373e] dark:text-white'  placeholder='Your name here'/>            
            <button className='flex flex-row justify-start items-center bg-[#f08e80] hover:bg-black dark:hover:bg-[#152035] text-white px-7 py-3 rounded transition duration-300 ease-in-out font-WorkSans font-medium'>Send
            <svg fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#fff" strokeWidth="2" d="M22,3 L2,11 L20.5,19 L22,3 Z M10,20.5 L13,16 M15.5,9.5 L9,14 L9.85884537,20.0119176 C9.93680292,20.5576204 10.0751625,20.5490248 10.1651297,20.009222 L11,15 L15.5,9.5 Z"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
