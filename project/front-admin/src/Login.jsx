import React from 'react'

const Login = () => {
  return (
    <>
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <div
      className="position-relative overflow-hidden text-bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="row justify-content-center w-100">
          <div className="col-md-6">
            <div className="card mb-0">
              <div className="card-body">
                {/* <a href="./index.html" className="text-nowrap logo-img text-center d-block py-3 w-100">
                  <img src="/public/images/logos/logo.svg" alt="" />
                </a> */}
                <h2 className='text-center'>Administrator</h2>
                <p className="text-center">Lorem ipsum dolor sit amet</p>
                <form>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Username</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-4">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  
                  <a href="./index.html" className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Sign In</a>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}


export default Login;