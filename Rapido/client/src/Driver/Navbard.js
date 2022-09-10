import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
const Navbard = (params) => {
    const navigate=useNavigate();
  return (
    <div className='mt-4'>
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
      <div className="logo" />
      
      <Menu theme="dark" mode="horizontal" >
      <Menu.Item ><h2 className='text-light'>Rapido Driver</h2></Menu.Item>
        <Menu.Item key="1" onClick={()=>{
          navigate("/today")
        }}>Todays Rides</Menu.Item>
        <Menu.Item key="2" onClick={()=>{
          navigate("/myrides")
        }}>My Rides</Menu.Item>
        <Menu.Item key="3" onClick={()=>{
          navigate("/dprofile")
        }}>Profile</Menu.Item>
        <Menu.Item key="4" onClick={()=>{
          localStorage.removeItem("pos-user");
          navigate("/dlogin")
        }}>Logout</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        {params.children}
      </div>
    </Content>

  </Layout>,
  </div>
  )
}

export default Navbard