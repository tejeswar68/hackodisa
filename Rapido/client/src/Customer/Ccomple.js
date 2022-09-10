import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Ccomple = () => {
    const [list,setList]=useState([]);
    const tok=localStorage.getItem("pos-user");
    const  ans=tok.slice(1)
  const token=ans.slice(0,ans.length-1)
    useEffect(()=>{
        axios.get("http://localhost:1000/completed",{
            headers:{
                'x-token':token
            }
        }).then((res)=>{
            console.log(res.data)
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
            title:"ACCEPTED BY",
            dataIndex:"driver",
            render:item=>Object.values(item)[2]
        },
        {
            title:"VEHICLE",
            dataIndex:"driver",
            render:item=>Object.values(item)[4]
        },
        {
            title:"ACCEPTED ON",
            dataIndex:"bookedon"
        },

    ]
  return (
    <div>
        <Navbar>
            <Table columns={columns} dataSource={list}></Table>
        </Navbar>
    </div>
  )
}

export default Ccomple