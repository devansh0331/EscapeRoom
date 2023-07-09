import React , {useState , useEffect, useContext} from 'react'
import "./Escape.css"
import { Slide } from '@mui/material'
// import bgImage from "../../img/escapeRoom.jpeg"
import clearBg from "../../img/final/bg/clearBg.png"


//Btn IMPORT
import CalenderBtn from "../../img/final/btn/Calender.png"
import MonalisaBtn from "../../img/final/btn/MonalisaBtn.png"
import MobileBtn from "../../img/final/btn/MobileBtn.png"
import LaptopBtn from "../../img/final/btn/LaptopBtn.png"
import BriefcaseBtn from "../../img/final/btn/BriefcaseBtn.png"
import StickyBtn from "../../img/final/btn/StickyBtn.png"
import ClockBtn from "../../img/final/btn/ClockBtn.png"
import GridBtn from "../../img/final/btn/GridBtn.png"
import DoorLockBtn from "../../img/final/btn/DoorLockBtn.png"
import BookshelfBtn from "../../img/final/btn/BookshelfBtn.png"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth/AuthConfig'





const Escape = () => {
    const [completion, setCompletion] = useState(true)
    
    const navigate = useNavigate()
    const newcount = useContext(useAuth)
    // const {count} = useAuth()
    
    console.log(newcount);
    useEffect(() => {
      setTimeout(() => {

        setCompletion(true)
        
      }, 500);
    
      return () => {
       
        setCompletion(false)
      }
    }, [])

    function capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const handleBtnClick = (e) => {
        console.log(e.target.id);

        navigate(`../popup/${capitalizeFirstLetter(e.target.id)}`)

        
    }
    
    
    return (
    <>
     <div className='escape'>
      <div className='escape-bg'> 
      <img src={clearBg} alt='bg-img' className={completion?'blurry-image':'blurry-image blur'}/>
     
        <img src={CalenderBtn} onClick={handleBtnClick} className={completion?'':'blur'} alt="CalenderBtn" id='calender'/>
        <img src={MonalisaBtn} onClick={handleBtnClick} className={completion?'':'blur'} alt="MonalisaBtn" id='monalisa'/>
        <img src={MobileBtn} onClick={handleBtnClick} className={completion?'':'blur'} alt="MobileBtn" id='mobile'/>
        <img src={LaptopBtn} onClick={handleBtnClick} className={completion?'':'blur'} alt="laptopBtn" id='laptop'/>
        <img src={StickyBtn} onClick={handleBtnClick} className={completion?'':'blur'} alt="StickyBtn" id='sticky'/>
        <img src={BriefcaseBtn} onClick={handleBtnClick} className={completion?'':'blur'} alt="BriefcaseBtn" id='briefcase'/>
        <img src={ClockBtn} onClick={handleBtnClick} className={completion?'':'blur'} alt="ClockBtn" id='clock'/>
        <img src={GridBtn} onClick={handleBtnClick} className={completion?'':'blur'} alt="GridBtn" id='grid'/>
        <img src={DoorLockBtn} onClick={handleBtnClick} className={completion?'':'blur'} alt="DoorLockBtn" id='doorlock'/>
        <img src={BookshelfBtn} onClick={handleBtnClick} className={completion?'':'blur'} alt="BookshelfBtn" id='bookshelf'/>
     
      </div>
    
    {completion && 
    
   
    // <Slide direction="up" in={true} >
    <Slide>
        <div className='escape-container'>
        <span>Escape from the room</span>
        </div>
    </Slide>
    
    } 
    </div>
  
    </>

  )
}

export default Escape