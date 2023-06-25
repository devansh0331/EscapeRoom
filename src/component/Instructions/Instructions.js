import React from 'react'
import { Link } from 'react-router-dom'

const Instructions = () => {
  return (
    <div className='bg-slate-900 h-screen text-white '>
      <div className=" flex flex-col h-full">
        <h3 className='text-center pt-8 text-2xl'>Escape Room</h3>
        <div className="  flex pt-28 items-center justify-evenly text-[1.3em]">
          <h2 className='  w-[30%] text-center text-[1.5em]  flex-grow'>Instructions</h2> 
          <div className='border-l-2 border-white w-[70%]'>
          {/* list-disc */}
          <ul className='pl-12  '> 
            <li className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, magni?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, magni?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, magni?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, magni?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, magni?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, magni?</li>
          </ul>
          </div>
        </div>
        <div className="button text-center mt-16">
          
        <Link to="/escaperoom" className='flex-shrink-0 text-white bg-violet-700 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0'>Start </Link> 
          </div>
      </div>
    </div>
  )
}

export default Instructions