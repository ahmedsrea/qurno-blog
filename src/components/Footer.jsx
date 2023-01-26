import React from 'react'
import { CgUserAdd } from 'react-icons/cg';

export default function Footer() {
  return (
    <footer className='w-full pt-20 flex flex-col justify-center text-center dark:bg-gradient-to-b from-[#02111a] to-[#020b12]'>
      <h1 className='text-[40px] font-CreteRound font-medium max-w-[590px] mx-auto dark:text-white'>Get latest posts delivered right to your inbox</h1>
      <div className='mt-8 flex sm:flex-row flex-col justify-center mb-[120px] w-[100%] md:w-[60%] lg:w-[45%] mx-auto gap-3 px-3 group'>
        <input type="email" name="" id="" placeholder='Your email address' className='border border-[#ddd] dark:border-[#2b373e] bg-transparent rounded py-3 dark:focus:border-[#f08e80] focus:border-[#f08e80] focus:outline-none pl-4 transition duration-300 ease-in-out dark:text-white placeholder-gray-500 dark:placeholder-[#6c757d] font-WorkSans font-medium flex-1 text-center sm:text-left'/>
        <button className='flex flex-row items-center justify-center border border-[#ddd] dark:border-[#2b373e] px-8 py-2 rounded font-WorkSans font-medium group-focus-within:bg-[#f08e80] dark:group-focus-within:border-[#f08e80] group-focus-within:text-white group-focus-within:border-white hover:bg-[#f08e80] hover:text-white transition duration-300 ease-in-out dark:text-[#d6d6d6]'><CgUserAdd  className='mr-2'/> Join today</button>
      </div>
      <p className='pb-12 font-WorkSans font-medium text-gray-500 dark:text-white dark:opacity-70'>© 2023 Qurno. All rights reserved.</p>
    </footer>
  )
}
