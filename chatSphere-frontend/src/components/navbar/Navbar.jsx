import React from 'react'
import { Link } from 'react-router-dom'
import { DownOutlined, } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

export const Navbar = () => {

  const items = [
    {
      key: '1',
      label: (
        <div>
          My Profile
        </div>
        ),
    },
    {
      key: '2',
      label: (
        <div
        //  onClick={()=>{
        //   Cookies.remove('accessToken')
        //   navigate('/login')
        //   toast.success('Logged out successfully')
        // }}
        >
          Logout
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div>
          Get Help
        </div>
      ),
    },
   
  ];


  return (
    // should write the code of navbar again on own 
    <nav className="navbar navbar-expand-lg" style={{background:"white"}}>
  <div className="container-fluid">
    <Link to="/" className="navbar-brand">
          ChatApp
        </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <div className="d-flex">
        <Dropdown menu={{items}}>
          <span onClick={(e) => e.preventDefault()}>
            <Space style={{fontWeight:"bold"}}>
              {/* {Cookies.get("userName")} */}
              User
              <DownOutlined style={{}} />
            </Space>
          </span>
        </Dropdown>
        {/* <div>
         <span className='fw-bold'>Mark</span>
              <DownOutlined style={{}} />
         <img src={DropdownIcon} alt ="dropdown" className='px-2'/>
        </div> */}
      </div>
    </div>
  </div>
</nav>  

        
  )
}
