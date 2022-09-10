import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbard from './Navbard'

const Dprofile = () => {
  const [user,setUser]=useState();
  const [modal,setModal]=useState(false)
  const tok=localStorage.getItem("pos-user");
    const  ans=tok.slice(1)
  const token=ans.slice(0,ans.length-1)
  useEffect(()=>{
    axios.get("http://localhost:1000/dprofile",{
      headers:{
        'x-token':token
      }
    }).then((res)=>{
      setUser(res.data)
     setModal(true)
    })
  },[])
 
  return (
    <div>
        <Navbard>
            <center>
                <h1>My Profile</h1>
                <hr></hr>
                {modal?
                <div>
                <h3>NAME:&nbsp;&nbsp;<b>{user.name}</b></h3>
                <h3>EMAIL:&nbsp;&nbsp;<b>{user.email}</b></h3>
                <h3>VEHICLE:&nbsp;&nbsp;<b>{user.vehicle}</b></h3>
                </div>:""
                }

            </center>
        </Navbard>
    </div>
  )
}

export default Dprofile