import React from 'react'

import "./Popup.css"
import { useNavigate } from 'react-router-dom'



function CloseBtn() {
    const navigate = useNavigate()

    const handleCloseBtn = () => {
            navigate('../../escaperoom')
    }
  return (
   
       <div className='getBack'>

<span>Back to ROOM</span>
 <div className='closeBtn' onClick={handleCloseBtn}>
  <span>x</span>
 </div>
</div>
    
  )
}

export default CloseBtn
