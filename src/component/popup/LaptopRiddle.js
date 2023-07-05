import React, { useState } from 'react'

import "./Popup.css"
import "./css/Laptop.css"
import CloseBtn from './CloseBtn'
import blankLaptop from "../../img/final/popup/blankLaptop.png"
import { useNavigate } from 'react-router-dom'

function LaptopRiddle() {
    const [color,setColor] = useState('lightblue');
    const [val1,setVal1] = useState(null);
    const [val2,setVal2] = useState(null);
    const [val3,setVal3] = useState(null);
    const [msg,setMsg] = useState("");
    const navigate = useNavigate();

    const equationCheck = () =>{
        if((Number(val1)%2 == 1) && (Number(val2)%2 == 1) && (Number(val3)%2 == 1) && (Number(val1)<16) && (Number(val2)<16) && (Number(val3)<16))
        {if((Number(val1) + Number(val2) - Number(val3)) == 25){
            setMsg("Congratulations you have solved the riddle");
            navigate('/popup/del');
        }else{
            setMsg("The answer is wrong")
            setTimeout(()=>{
                setMsg("");
              },1000);
        }}else{
            setMsg("Invalid Input")
            setTimeout(()=>{
                setMsg("");
              },1000);
        }
    }
    console.log(Number(val1)%2);
    return (
      <div className='popup-container'>
      <img src={blankLaptop} alt='Popup'/>
        <div className='numbers'>
            <div className='num' style={{background:`${color}`}}>1</div>
            <div className='num' style={{background:`${color}`}}>3</div>
            <div className='num' style={{background:`${color}`}}>5</div>
            <div className='num' style={{background:`${color}`}}>7</div>
        </div>
        <div className='numbers2'>
            <div className='num' style={{background:`${color}`}}>9</div>
            <div className='num' style={{background:`${color}`}}>11</div>
            <div className='num' style={{background:`${color}`}}>13</div>
            <div className='num' style={{background:`${color}`}}>15</div>
        </div>
        <div className='equation'>
            <div style={{background:'gray'}} className='inNum'><input max="15" className='inNum' type='number' style={{background:'gray'}}
            onChange={(e=>{setVal1(e.target.value.slice(0,2))})} value={val1}/></div>
            <div style={{background:'gray'}} className='inExp' >+</div>
            <div style={{background:'gray'}} className='inNum'><input max="15" className='inNum' type='number' style={{background:'gray'}}
            onChange={(e=>{setVal2(e.target.value.slice(0,2))})} value={val2}/></div>
            <div style={{background:'gray'}} className='inExp' >-</div>
            <div style={{background:'gray'}} className='inNum'><input max="15" className='inNum' type='number' style={{background:'gray'}}
            onChange={(e=>{setVal3(e.target.value.slice(0,2))})} value={val3}/></div>
            <div style={{background:'gray'}} className='inExp' >=</div>
            <div style={{background:'gray'}} className='inExp' >25</div>    
        </div>
        <button className='equCheckBtn' onClick={(e)=>{equationCheck()}}>CHECK</button>
        <p className='message'>{msg}</p>
      <CloseBtn/>
      </div>
    )
  }
  
  export default LaptopRiddle
