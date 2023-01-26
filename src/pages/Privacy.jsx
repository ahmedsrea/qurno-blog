import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <section>
      <div className='flex flex-col justify-center text-center lg:text-left sm:max-w-[540px] md:max-w-[720px] lg:max-w-[850px] xl:max-w-[1080px] mx-auto px-3 lg:gap-12 gap-7'>
        <div className='mt-[65px] flex flex-col justify-center'>
          <h2 className='font-CreteRound text-center text-[#152035] dark:text-white text-[42px] lg:text-[38px] z-1'>Privacy</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className='self-center -translate-y-8 -z-10' width="170" height="32" fill="none"><path stroke="#F6BFB3" stroke-width="9" d="M1 17.194C62.642 7.284 174.478-8.49 296 27"/></svg>
          <div className='flex flex-row justify-center items-center gap-4 font-WorkSans font-medium'>
            <Link to="/" className="flex flex-row items-center hover:underline gap-2 dark:text-[#d6d6d6]"><AiOutlineHome /> Home</Link>
            <span className='w-1 h-1 rounded-full bg-gray-600'></span>
            <p  className="flex flex-row items-center cursor-context-menu text-[#505050] dark:text-[#d6d6d6] dark:opacity-[0.7]">Privacy</p>
          </div>
        </div>

        <div className='font-WorkSans font-medium text-[#505050] text-left'>
          <p className='mb-5 font-semibold leading-7 dark:text-[#d6d6d6]'>Last updated on March 03, 2022</p>
          <p className='leading-7 dark:text-[#d6d6d6]'>Below are our dummy <button className='underline text-black dark:text-[#d6d6d6]'>Privacy & Policy</button>, which outline a lot of legal goodies, but the bottom line is it’s our aim to always take care of both you, as a customer, or as a seller on our platform.</p>
          <h1 className='font-CreteRound font-medium text-3xl mt-10 mb-7 text-[#152035] dark:text-[#d6d6d6]'>Licensing Policy</h1>
          <p className='leading-7 dark:text-[#d6d6d6]'>By visiting and/or taking any action on our template, you confirm that you are in agreement with and bound by the terms outlined below. These terms apply to the website, emails, or any other communication.</p>
          <h1 className='font-CreteRound font-medium text-2xl mt-10 mb-7 text-[#152035] dark:text-[#d6d6d6]'>Here are terms of our Standard License:</h1>
          <p className='relative ml-4  before:absolute before:bg-[#f08e8080] before:h-[12px] before:w-[12px] before:top-[7px] before:-left-5 before:rounded-full after:absolute after:bg-[#f08e80] after:rounded-full after:h-[4px] after:w-[4px] after:top-[11px] after:-left-4 leading-7 dark:text-[#d6d6d6]'>The Standard License grants you a non-exclusive right to make use of template you have purchased.</p>
          <p className='relative ml-4  before:absolute before:bg-[#f08e8080] before:h-[12px] before:w-[12px] before:top-[7px] before:-left-5 before:rounded-full after:absolute after:bg-[#f08e80] after:rounded-full after:h-[4px] after:w-[4px] after:top-[11px] after:-left-4 mt-5 leading-7 dark:text-[#d6d6d6]'>You are licensed to use the Item to create one End Product for yourself or for one client (a “single application”), and the End Product can be distributed for Free.</p>
          <h1 className='font-CreteRound font-medium text-2xl mt-10 mb-7 text-[#152035] dark:text-[#d6d6d6]'>If you opt for an Extended License:</h1>
          <p className='relative ml-4  before:absolute before:bg-[#f08e8080] before:h-[12px] before:w-[12px] before:top-[7px] before:-left-5 before:rounded-full after:absolute after:bg-[#f08e80] after:rounded-full after:h-[4px] after:w-[4px] after:top-[11px] after:-left-4 leading-7 dark:text-[#d6d6d6]'>You are licensed to use the Item to create one End Product for yourself or for one client (a “single application”), and the End Product maybe sold or distributed for free.</p>
          <h1 className='font-CreteRound font-medium text-3xl mt-10 mb-7 text-[#152035] dark:text-[#d6d6d6]'>Additional Policy</h1>
          <p className='leading-7 dark:text-[#d6d6d6]'>By visiting and/or taking any action on our template, you confirm that you are in agreement with and bound by the terms outlined below. These terms apply to the website, emails, or any other communication.</p>
          <p className='dark:text-[#d6d6d6] relative ml-4 mt-5 before:absolute before:bg-[#f08e8080] before:h-[12px] before:w-[12px] before:top-[7px] before:-left-5 before:rounded-full after:absolute after:bg-[#f08e80] after:rounded-full after:h-[4px] after:w-[4px] after:top-[11px] after:-left-4 leading-7'>You have 2 days to evaluate your purchase. If your purchase fails to meet expectations set by the seller, or is critically flawed in some way, contact Bootstrap Themes and we will issue a full refund pending a review.</p>
        </div>
      </div>
    </section>
  )
}
