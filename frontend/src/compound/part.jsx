import React from 'react'

export default function Part() {
  return (
    <section className='py-5 bg-white'>
        <div className='container'>
            <div className='text-center mb-5'>
                <h3 className='display-3 fw-bold text-dark mb-4'> Powerful AI Features</h3>
                <p className=' part fs-4 text-muted mx-auto'> Experience the future of file management with our cutting-edge AI technology</p>
            </div>
            <div className='row align-items-center'>
                <div className='col-md-6'>
                    <div className='row g-4'>
                        <div className='col-12'>
                            <div className='card h-100 border-2 transition-all cursor-pointer border-light'>
                            <div className='card-body p-4'>
                                <div className='d-flex align-items-center mb-3'>
                                    <div className=' part2 rounded-circle d-flex align-items-center justify-content-center me-3 bg-light'> <i className='ri-folder-3-line fs-4 text-muted'></i></div>
                                    <h3 className='card-title mb-0 fs-4'>Smart File Organization</h3>
                                </div>
                                <p className='card-text text-muted ms-5'> AI automatically categorizes and organizes your files with intelligent tagging</p>
                            </div>
                            </div>
                           
                        </div>
                        <div className='col-12'>
                            <div className='card h-100 border-2 transition-all cursor-pointer border-light'>
                            <div className='card-body p-4'>
                                <div className='d-flex align-items-center mb-3'>
                                    <div className=' part2 rounded-circle d-flex align-items-center justify-content-center me-3 bg-light'> <i className='ri-folder-3-line fs-4 text-muted'></i></div>
                                    <h3 className='card-title mb-0 fs-4'>Interactive Charts</h3>
                                </div>
                                <p className='card-text text-muted ms-5'> Transform your data into beautiful, interactive charts and visualizations</p>
                            </div>
                            </div>
                           
                        </div>
                        <div className='col-12'>
                            <div className=' partcurser card h-100 border-2 transition-all cursor-pointer border-light'>
                            <div className='card-body p-4'>
                                <div className=' partcurser d-flex align-items-center mb-3'>
                                    <div className=' part2 rounded-circle d-flex align-items-center justify-content-center me-3 bg-light'> <i className='ri-folder-3-line fs-4 text-muted'></i></div>
                                    <h3 className='card-title mb-0 fs-4'>AI-Powered Analysis</h3>
                                </div>
                                <p className='card-text text-muted ms-5'> Get instant insights and recommendations from your document data</p>
                            </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='position-relative'>
                        <div className=' part3 card shadow-lg border-0'>
                            <div className='card-body p-5'>
                                <img src="https://readdy.ai/api/search-image?query=Professional%20dashboard%20interface%20showing%20AI%20file%20organization%20with%20smart%20charts%2C%20modern%20UI%20design%2C%20clean%20layout%2C%20data%20visualization%2C%20blue%20and%20purple%20color%20scheme%2C%20interactive%20elements%2C%20file%20management%20system%2C%20analytical%20charts%20and%20graphs&width=600&height=400&seq=feature-2&orientation=landscape" 
                                className='partimg img-fluid rounded shadow' alt="" />
                                <div className='position-absolute top-0 end-0 translate-middle'>
                                    <div className=' part5 bg-primary rounded-circle d-flex align-items-center justify-content-center'> <i className='ri-ai-generate text-white fs-1'></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}