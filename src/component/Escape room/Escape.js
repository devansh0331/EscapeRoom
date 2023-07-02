import React from 'react'
import "./Escape.css"

const Escape = (props) => {
  const {isAuth} = props
  console.log(isAuth);
  return (
    <div className='escape'>
        <span>Escape the room</span>
    </div>
  )
}

export default Escape