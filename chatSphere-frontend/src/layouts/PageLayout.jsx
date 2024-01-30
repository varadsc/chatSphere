import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbar/Navbar'

export const PageLayout = () => {
  return (
    <div>
        <Navbar />
        <div className="container-fluid bg-primary">
            <div className="row">
            <div className="col-2 bg-danger">
                SIdeBar
            </div>
            <div className='col'>
                <Outlet />
            </div>
            </div>
        </div>
    </div>
  )
}

