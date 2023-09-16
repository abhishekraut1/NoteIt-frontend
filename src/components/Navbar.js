// import React from 'react'
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//     let navigate = useNavigate();

//     const handleLogout = ()=>{
//         localStorage.removeItem('token');
//         navigate('/login');
//     }

//     return (
//         <nav className="navbar navbar-expand-lg">
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="/">NoteIt</Link>
//                 <button className="custom-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <Link className={`nav-link`} aria-current="page" to="/">Home</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className={`nav-link`} to="/about">About</Link>
//                         </li>

//                     </ul>
//                     {!localStorage.getItem('token') ? <form className="d-flex"> 
//                     <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
//                     <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
//                     </form> : <button onClick={handleLogout} className="btn btn-primary">Logout</button> }
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  }

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
          NoteIt
        </Link>
        <button
          className={`navbar-toggler ${isNavbarOpen ? '' : 'collapsed'}`}
          type="button"
          onClick={toggleNavbar}
        >
          <span className="custom-menu-icon">
            <i className="fas fa-bars" style={{ fontSize: '24px' }}></i>
          </span>
        </button>
        <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeNavbar}>
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem('token') ? (
            <form className="d-flex">
              <Link
                className="btn btn-primary mx-1"
                to="/login"
                role="button"
                onClick={closeNavbar}
              >
                Login
              </Link>
              <Link
                className="btn btn-primary mx-1"
                to="/signup"
                role="button"
                onClick={closeNavbar}
              >
                Signup
              </Link>
            </form>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                closeNavbar();
              }}
              className="btn btn-primary"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
