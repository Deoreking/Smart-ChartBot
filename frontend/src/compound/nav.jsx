import React from 'react'

export default function Nav () {
  return (
   <header className=' nav bg-white bg-opacity-80 border-bottom stricky-top'>
      <div className='navv container'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <div className='navbar-brand d-flex align-items-center'>
            <div className=' nav2 me-3 d-flex align-items-center justify-content-center'>
              <i className=' nav3 ri-file-text-line text-white'></i>
            </div>
            <span className=' nav4 fs-3 fw-bold'> SmartFile AI</span>
          </div>
          <button className='navbar-toggler' type='button'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'><a className='nav-link' href="#"></a></li>
              <li className='nav-item'><a className='nav-link' href="#"></a></li>
              <li className='nav-item'><a className='nav-link' href="#"></a></li>
              <li className='nav-item'><a className='nav-link' href="#"></a></li>
            </ul>
            <div className='nav6 d-flex align-items-end'>
              <button className='btn btn-link text-decoration-none me-3'>Sign In</button>
              <button className=' nav5 btn btn-primary rounded-pill px-4'>Get Started</button>
            </div>
          </div>
        </nav>
      </div>
   </header>
  )
}
