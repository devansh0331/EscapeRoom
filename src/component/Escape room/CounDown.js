import React , {useState , useEffect} from 'react'
import "./Escape.css"
import { CircularProgress, Slide } from '@mui/material'

import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom';


function CounDown() {
    const [count, setCount] = useState(5)
   
    const navigate = useNavigate()
    

   
    useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount - 1);
      
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

    useEffect(() => {
      setTimeout(() => {
              navigate('../escaperoom')
          
      }, 6000);
    
      return () => {
        setCount(5)
       
      }
    }, [])

    

    
  return (
    <div style={{background : 'black' , height:'100vh' , width:'100vw'}}>
 
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
     
    </div>
  )
}

export default CounDown
