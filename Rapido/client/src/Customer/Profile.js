import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Profile = () => {
    const tok=localStorage.getItem("pos-user");
    const  ans=tok.slice(1)
  const token=ans.slice(0,ans.length-1)
  const[user,setUser]=useState();
  const[modal,setModal]=useState(false)
  useEffect(()=>{
      axios.get("http://localhost:1000/cget",{
          headers:{
              "x-token":token
          }
      }).then((res)=>{
          setUser(res.data)
          setModal(true)
      })
  },[])
  return (
    <div>
        <Navbar>
            <center>
            {modal?
            <div>
            <h1 className='my-4 text-success'>PROFILE</h1>
            <hr></hr>
            <h3 className='my-3'>NAME:<b>{user.name}</b></h3>
            <h3 className='my-3'>EMAIL:<b>{user.email}</b></h3>
            </div>:"hi"
            }
            </center>
        </Navbar>
    </div>
  )
}

export default Profile