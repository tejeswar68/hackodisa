import axios from 'axios';
import React, { useState } from 'react'
import Navbard from './Navbard'
import { useEffect } from 'react';
import { List, Table } from 'antd';
const Dhome = () => {
  const [list,setList]=useState([])
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
      console.log(res.data)
      const data={
        vehicle:res.data.vehicle
      }
      axios.post("http://localhost:1000/ride",data,{
        headers:{
          'x-token':token
        }
      }).then((resp)=>{
        console.log(resp.data)
        setList(resp.data)
        setModal(true)
      })
    })
  },[])
  
  const cli=(record)=>{
    console.log(record.person.name)
    const data={
      "from":record.from,
      "to":record.to,
      "bookedby":record.person.name,
      "bookedid":record.person._id,
      "bookedon":record.date,
      "veh":record.vehicle,
      "_id":record._id
    }
    axios.post("http://localhost:1000/comp",data,{
      headers:{
        'x-token':token
      }
    }).then((res)=>{
      console.log(res.data)
    })
    window.location.reload();
  }
  const columns=[
    {
      title:"From",
      dataIndex:"FROM"
        },
        {
          title:"TO",
          dataIndex:"to"
        },
        {
          title:"BOOKED BY",
          dataIndex:"person",
          render:item=>Object.values(item)[1]
        },
        {
          title:"BOOKED ON",
          dataIndex:"date"
        },
        {
          title:"CONFORMATION",
          dataIndex:"_id",
          render:(_id,record)=><div>
            <button className='btn-success' onClick={()=>{cli(record)}} >Accept</button>
          </div>
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

export default Dhome