import React,  {useState} from 'react'
import { Link } from 'react-router-dom'

// import {auth , provider} from "../auth/config"
// import {signInWithPopup} from "firebase/auth"

import './Instruction.css'

const Instructions = () => {
//   const [isAuth , setIsAuth] = useState(false)
//   const signInWithGoogle = async () =>  {
//     try{

//         const response = await signInWithPopup(auth, provider)
//         console.log(response.user.displayName);
//         // cookies.set("auth-token" , response.user.refreshToken)
//         setIsAuth(true)
//     }catch(err){
//         console.log(err);
//     }
    
// }
  return (
    <div className='instruction'>
     <div className='main'>
      <p className='paper'>
          <h2 className='title'>ESCAPE ROOM</h2>
          <p className='subtitle'>Escape the room using the hidden clues</p>
          <p className='subtitle s2'>Note: Only limited participants will be entering the next level ☠ </p>
          <button onClick={()=>{}} className='btn'>Start</button>
          <p className='subtitle s3'>(You can google the riddles if required)</p> 
      </p>
     </div>
    </div>
  )
}

export default Instructions