import React from 'react'

const Instructions = () => {
  return (
    <div className='bg-slate-900 h-screen text-white '>
      <div className="h-full w-[80%] m-auto">
        <h3 className='text-center'>Escape Room</h3>
        <div className="main-box  flex items-center  justify-evenly">
          <h2 className=' pr-4 self-center w-[40%] text-center text-2xl'>Instructions</h2> 
          <ul className=' border-l-2 border-white self-center text-center w-[60%]'>
            <li className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, magni?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, magni?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, magni?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, magni?</li>
          </ul>
        </div>
        <div className="button text-center my-6" >
        <button class="flex-shrink-0 text-white bg-violet-700 border-0 py-1 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Button  </button>
        </div>
      </div>
    </div>
  )
}

export default Instructions