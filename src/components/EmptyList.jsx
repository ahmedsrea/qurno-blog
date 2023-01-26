import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyList() {
  return (
    <div className='flex flex-col items-center text-center'>
      <span className='text-[120px] font-CreteRound text-white text-shaa font-extrabold mb-5'>404</span>
      <h2 className='font-WorkSans text-base text-[#505050] font-medium mb-5'>Oops. The page you're looking for doesn't exist.</h2>
      <Link to={'/'}><button className='py-3 px-7 rounded text-white bg-[#f08e80] hover:bg-[#152035] transition duration-300 ease-in-out font-WorkSans font-medium text-base'>Back to home</button></Link>
    </div>
  )
}
