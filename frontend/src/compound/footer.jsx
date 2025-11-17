import React from 'react'

export default function Footer() {
  return (
   <footer className='bg-dark text-white py-5'>
    <div className='container'>
        <div className='row g-4'>
            <div className='col-md-3'>
                <div className='d-flex align-items-center mb-3'>
                    <div className=' footer me-3 d-flex align-items-center justify-content-center'><i className='ri-file-text-line text-white'></i></div>
                    <span className='fs-3 fw-bold'>SmartFile AI</span>
                </div>
                <p className='text-white-50'>Revolutionizing file management with AI-powered organization and smart chart generation.</p>
            </div>
            <div className='col-md-3'>
                <h5 className='fw-bold mb-3'>Product</h5>
                <ul className='list-unstyled'></ul>
                <li className='mb-2'> <a className='text-white-50 text-decoration-none' href="#">Features</a></li>
                <li className='mb-2'> <a className='text-white-50 text-decoration-none' href="#">Product</a></li>
                <li className='mb-2'> <a className='text-white-50 text-decoration-none' href="#">API</a></li>
                <li className='mb-2'> <a className='text-white-50 text-decoration-none' href="#">Integration</a></li>
            </div>
            <div className='col-md-3'>
                <h5 className='fw-bold mb-3'>Support</h5>
                <ul className='list-unstyled'></ul>
                <li className='mb-2'> <a className='text-white-50 text-decoration-none' href="#">Help Centre</a></li>
                <li className='mb-2'> <a className='text-white-50 text-decoration-none' href="#">Documentation</a></li>
                <li className='mb-2'> <a className='text-white-50 text-decoration-none' href="#">Comunnity</a></li>
                <li className='mb-2'> <a className='text-white-50 text-decoration-none' href="#">Contack</a></li>
            </div>
            <div className='col-md-3'>
                <h5 className='fw-bold mb-3'>Connect</h5>
                <div className='d-flex gap-2'>
                    <a className='btn btn-outline-light btn-sm rounded-circle' href="#"> <i className='ri-twitter-lines'></i>
                    </a><a className='btn btn-outline-light btn-sm rounded-circle' href="#"> <i className='ri-linkedin-line'></i>
                    </a><a className='btn btn-outline-light btn-sm rounded-circle' href="#"> <i className='ri-github-line'></i></a>
                </div>
            </div>
        </div>
        <hr className='my-4' />
        <div className='text-center text-white-50'>
            <p>© 2024 SmartFile AI. All rights reserved.</p>
            <p className='mb-0'>"Developed by: " <strong>Shubham Deore</strong>"," <strong>Krushnal Patil</strong>"," <strong>Bhupesh Patil</strong></p>
        </div>
    </div>

   </footer>
  )}
