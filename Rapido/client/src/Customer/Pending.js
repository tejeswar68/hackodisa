import { Table } from 'antd';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Pending = () => {
    const tok=localStorage.getItem("pos-user");
    const  ans=tok.slice(1)
  const token=ans.slice(0,ans.length-1)
  const [list,setList]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:1000/pen",{
            headers:{
                'x-token':token
            }
        }).then((res)=>{
            setList(res.data)
        })
    },[])
    const columns=[
        {
            title:"FROM",
            dataIndex:"from"
        },
        {
            title:"TO",
            dataIndex:"to"
        },
        {
            title:"VEHICLE",
            dataIndex:"veh"
        },
        {
            title:"BOOKED ON",
            dataIndex:"date"
        }
    ]
  return (
    <div>
<Navbar>
<center>
    <h1>PENDING RIDES</h1>
    <Table columns={columns} dataSource={list}></Table>
</center>
</Navbar>

    </div>
  )
}

export default Pending