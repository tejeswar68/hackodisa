import { Table } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import App from '../App'
import Navbard from './Navbard'

const Dcompleted = () => {
    const tok=localStorage.getItem("pos-user");
    const  ans=tok.slice(1)
  const token=ans.slice(0,ans.length-1)
  const [list,setList]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:1000/comp",{
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
        title:"BOOKED BY",
        dataIndex:"bookedby"
      },
      {
        title:"BOOKED ON",
        dataIndex:"bookedon"
      },
      {
        title:"COMPLETED ON",
        dataIndex:"completedon"
      }
    ]
  return (
    <div>
        <Navbard>
        <Table columns={columns} dataSource={list}></Table>
        </Navbard>
    </div>
  )
}

export default Dcompleted