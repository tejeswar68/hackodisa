import { Select } from 'antd';
import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from "axios"
import App from '../App';
const Chome = () => {
  const [from,setFrom]=useState();
  const [to,setTo]=useState();
  const [veh,setVeh]=useState();
  const tok=localStorage.getItem("pos-user");
    const  ans=tok.slice(1)
  const token=ans.slice(0,ans.length-1)
  const cli=()=>{
    const data={
      from:from,
      to:to,
      veh:veh
    }
    axios.post("http://localhost:1000/pen",data,{
      headers:{
        'x-token':token
      }
    }).then((res)=>{
      console.log(res.data)
    })
    setFrom("")
    setTo("")
  }
  return (
    <div>
      <Navbar>
      <center>
      <div className='my-3'>
      <input placeholder='From location' className='my-2' value={from} onChange={(e)=>setFrom(e.target.value)}></input>
      </div>
       <div className='my-3'>
       <input placeholder='To Destination' className='my-2' value={to} onChange={(e)=>setTo(e.target.value)}></input>
       </div> 
       <select value={veh} onChange={(e)=>setVeh(e.target.value)} >
         <option value="cab">cab</option>
         <option value="auto">auto</option>
         <option value="bike">bike</option>
       </select>
       <div>
         <button className='btn-success my-4' onClick={cli}>BOOK A RIDE</button>
       </div>
      </center>
      </Navbar>
    </div>
  )
}

export default Chome