import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-2">
    <div className="container-fluid">
            <Link to={"/"} className="navbar-brand">ChatApp</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
      </ul>
      <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        More
                    </a>
                    <ul className="dropdown-menu">
                        {/* Logout and my profile to be implemented  */}
                        <li><Link to={'/'} className="dropdown-item" >My Profile</Link></li>
                        <li><Link to={'/'} className="dropdown-item" href="#">Logout</Link></li>
                    </ul>
                    </li>
                </ul>
    </div>
  </div>
</nav>



        
  )
}
