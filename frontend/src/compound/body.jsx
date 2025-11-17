import React from 'react'
import { Link } from 'react-router-dom';

export default function Body() {
  return (
  <section className='section position-relative overflow-hidden'>
    <div className=' main position-absolute top-0 start-0 w-100 h-100'>
    </div>
    <div className=' main2 container position-relative py-5'>
        <div className='text-center'>
            <h1 className='display-1 fw-bold mb-4 transition-all opacity-100'>AI-Smart Chartbot
            <br />
       
            </h1>
            <p className='fs-4 text-muted mb-5 mx-auto transition-all opacity-100'>Transform your file management with AI-powered organization and create stunning interactive charts from your data in seconds</p>
            <div className='d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 transition-all opacity-100'>
        <Link to="/chatbot" className='btn1 btn btn-primary btn-lg rounded-pill px-5 py-3 fs-5'>Start Free Trial</Link>
        <button className='btn btn-outline-secondary btn-lg rounded-pill px-5 py-3 fs-5'>Watch Demo</button>
      </div>
            {/* <div className='d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 transition-all opacity-100'>
                <button  className=' btn1 btn btn-primary btn-lg rounded-pill px-5 py-3 fs-5'>Start Free Trial</button>
                <button className='btn btn-outline-secondary btn-lg rounded-pill px-5 py-3 fs-5'>Watch Demo</button>
            </div> */}
        </div>
    </div>
  </section>
  )
}
