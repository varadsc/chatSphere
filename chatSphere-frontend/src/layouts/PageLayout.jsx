import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbar/Navbar'
import { Sidebar } from '../components/sidebar/Sidebar'

export const PageLayout = () => {
  return (
    <>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <Navbar />
          <div style={{ display: 'flex', flex: 1 }}>
            <div className="col-2 m-0 mx-1 p-1">
              <Sidebar />
            </div>
            <div className='col m-0 p-0'>
              <Outlet />
            </div>
          </div>
    </div>
    </>
  )
}

