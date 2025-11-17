import React from 'react'

export default function Team() {
    return (
       <section id='team' className='py-5 bg-light'>
        <div className='container'>
            <div className='text-center mb-5'>
                <h2 className='display-3 fw-bold text-dark mb-4'>Our Team </h2>
                <p className=' team fs-4 text-muted mx-auto'>Meet the talented individuals behind SmartFile AI</p>
            </div>
            <div className='row justify-content-center g-4'>
                <div className='col-md-4'>
                    <div className='card h-100 shadow-sm border-0'>
                        <div className='card-body text-center p-4'>
                            <div className='mb-3'>
                                <div className=' team2 rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto'> <i className='ri-user-line text-white fs-1'></i></div>
                            </div>
                            <h5 className='card-title fw-bold mb-2'>Shubham Deore</h5>
                            <p className='card-text text-muted'> Devloper</p>
                            <div className='d-flex justify-content-center gap-2'>
                                <a className='btn btn-sm btn-outline-primary rounded-circle' href="https://www.linkedin.com/in/shubham-deore-044b7b307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"> <i className='ri-linkedin-line'></i></a>
                                <a className='btn btn-sm btn-outline-primary rounded-circle' href="https://github.com/login?client_id=Iv1.a84bfcae38835499&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3DIv1.a84bfcae38835499%26redirect_uri%3Dhttps%253A%252F%252Fclassroom.github.com%252Fauth%252Fgithub%252Fcallback%26response_type%3Dcode%26state%3D88d6d5aaa90ab4be0fdf8ab82fc77ffb8fd40b840269c0ef"> <i className='ri-github-line'></i></a>
                                <a className='btn btn-sm btn-outline-primary rounded-circle' href="https://www.instagram.com/shivam_deore_07?igsh=MTVka3BsY3Vxb2pqcg%3D%3D&utm_source=qr"> <i className='ri-twitter-line'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card h-100 shadow-sm border-0'>
                        <div className='card-body text-center p-4'>
                            <div className='mb-3'>
                                <div className=' team2 rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto'> <i className='ri-user-line text-white fs-1'></i></div>
                            </div>
                            <h5 className='card-title fw-bold mb-2'>Krushnal Patil</h5>
                            <p className='card-text text-muted'> Devloper</p>
                            <div className='d-flex justify-content-center gap-2'>
                                <a className='btn btn-sm btn-outline-primary rounded-circle' href="#"> <i className='ri-linkedin-line'></i></a>
                                <a className='btn btn-sm btn-outline-primary rounded-circle' href="#"> <i className='ri-github-line'></i></a>
                                <a className='btn btn-sm btn-outline-primary rounded-circle' href="#"> <i className='ri-twitter-line'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card h-100 shadow-sm border-0'>
                        <div className='card-body text-center p-4'>
                            <div className='mb-3'>
                                <div className=' team2 rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto'> <i className='ri-user-line text-white fs-1'></i></div>
                            </div>
                            <h5 className='card-title fw-bold mb-2'>Bhupesh Patil</h5>
                            <p className='card-text text-muted'> Devloper</p>
                            <div className='d-flex justify-content-center gap-2'>
                                <a className='btn btn-sm btn-outline-primary rounded-circle' href="#"> <i className='ri-linkedin-line'></i></a>
                                <a className='btn btn-sm btn-outline-primary rounded-circle' href="#"> <i className='ri-github-line'></i></a>
                                <a className='btn btn-sm btn-outline-primary rounded-circle' href="#"> <i className='ri-twitter-line'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
       </section>
    );
}