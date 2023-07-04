import React , {useState , useEffect} from 'react'
import "./Escape.css"
import { CircularProgress, Slide } from '@mui/material'
import bgImage from "../../img/escapeRoom.jpeg"
import clearBg from "../../img/final/bg/clearBg.png"
import Box from '@mui/material/Box'

//Btn IMPORT
import CalenderBtn from "../../img/final/btn/Calender.png"
import MonalisaBtn from "../../img/final/btn/MonalisaBtn.png"





const Escape = (props) => {
    const [count, setCount] = useState(5)
    const [completion, setCompletion] = useState(true)

   
    useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount - 1);
      
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

    useEffect(() => {
      setTimeout(() => {

        setCompletion(true) 
      }, 6000);
    
      return () => {
        setCount(5)
        setCompletion(false)
      }
    }, [])
    
    
    return (
    <>
     <div className='escape'>
      <div className='escape-bg'> 
      <img src={clearBg} alt='bg-img' className={completion?'blurry-image':'blurry-image blur'}/>
     
        <img src={CalenderBtn} id='calender'/>
        <img src={MonalisaBtn} id='monalisa'/>
     
      </div>
    {!completion && 
     <Slide direction="left" in={true} >
    <div className='escape-progress'>
     
     <div className='mui-box'>
     <Box
      sx={{
        width: 500,
        height: 50,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        color:'white',
        fontWeight:'bold',
        fontSize:'2rem',
        backgroundColor: 'dark',
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >Getting Started...
    <CircularProgress value={50} sx={{color:'white',marginLeft:'8px'}}/>
    </Box>
   <span style={{color:'white', fontSize:'6rem'}}>{count}.</span>
    </div>
</div>  
</Slide>
      }
    {completion && 
    
   
    <Slide direction="up" in={true} >
        <div className='escape-container'>
        <span>Escape from room</span>
        </div>
    </Slide>
    
    } </div>
  
    </>

  )
}

export default Escape