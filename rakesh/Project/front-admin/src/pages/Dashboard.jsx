import React from 'react'

const Dashboard = () => {
  return (
    <>
       <>
   <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
      data-sidebar-position="fixed" data-header-position="fixed">


      <div className="app-topstrip bg-dark py-6 px-3 w-100 d-lg-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center justify-content-center gap-5 mb-2 mb-lg-0">
          <a className="d-flex justify-content-center" href="#">
            {/* <img src="/images/logos/logo-wrappixel.svg" alt="" width="150"/> */}
            <h3 className='text-light'>Administrater</h3>
          </a>


        </div>

        <div className="d-lg-flex align-items-center gap-2">

        </div>

      </div>

      <aside className="left-sidebar">

        <div>
          <div className="brand-logo d-flex align-items-center justify-content-between">
            <h2>Admin</h2>
            <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
              <i className="ti ti-x fs-6"></i>
            </div>
          </div>

          <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav">

              <li className="sidebar-item">
                <a className="sidebar-link" href="./index.html" aria-expanded="false">
                  <i className="ti ti-atom"></i>
                  <span className="hide-menu">Dashboard</span>
                </a>
              </li>

              <li className="sidebar-item">
                <a className="sidebar-link justify-content-between has-arrow" href="javascript:void(0)" aria-expanded="false">
                  <div className="d-flex align-items-center gap-3">
                    <span className="d-flex">
                      <i className="ti ti-layout-grid"></i>
                    </span>
                    <span className="hide-menu">Front Pages</span>
                  </div>

                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a className="sidebar-link justify-content-between"
                      href="#">
                      <div className="d-flex align-items-center gap-3">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle"></i>
                        </div>
                        <span className="hide-menu">Homepage</span>
                      </div>

                    </a>
                  </li>

                </ul>
              </li>
            </ul>
          </nav>

        </div>

      </aside>

      <div className="body-wrapper">

        <header className="app-header">
          <nav className="navbar navbar-expand-lg navbar-light">
           <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
               
              <li className="nav-item dropdown">
                <a className="nav-link show dropdown-toggle" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown" aria-expanded="true">
                 {localStorage.getItem('admin_name')}
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up show" aria-labelledby="drop2" data-bs-popper="static">
                  <div className="message-body">
                    <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                      <i className="ti ti-user fs-6"></i>
                      <p className="mb-0 fs-3">My Profile</p>
                    </a>
                    
                    <a href="./authentication-login.html" className="btn btn-outline-primary mx-3 mt-2 d-block">Logout</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

           
          </nav>
        </header>

        <div className="body-wrapper-inner">
          <div className="container-fluid">

            <div className="row">

              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="d-md-flex align-items-center">
                      <div>
                        <h4 className="card-title">Products Performance</h4>
                        <p className="card-subtitle">
                          Ample Admin Vs Pixel Admin
                        </p>
                      </div>
                      <div className="ms-auto mt-3 mt-md-0">
                        <select className="form-select theme-select border-0" aria-label="Default select example">
                          <option value="1">March 2025</option>
                          <option value="2">March 2025</option>
                          <option value="3">March 2025</option>
                        </select>
                      </div>
                    </div>
                    <div className="table-responsive mt-4">
                      <table className="table mb-0 text-nowrap varient-table align-middle fs-3">
                        <thead>
                          <tr>
                            <th scope="col" className="px-0 text-muted">
                              Assigned
                            </th>
                            <th scope="col" className="px-0 text-muted">Name</th>
                            <th scope="col" className="px-0 text-muted">
                              Priority
                            </th>
                            <th scope="col" className="px-0 text-muted text-end">
                              Budget
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-0">
                              <div className="d-flex align-items-center">
                                <img src="/public/assets/images/profile/user-3.jpg" className="rounded-circle" width="40"
                                  alt="flexy" />
                                <div className="ms-3">
                                  <h6 className="mb-0 fw-bolder">Sunil Joshi</h6>
                                  <span className="text-muted">Web Designer</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-0">Elite Admin</td>
                            <td className="px-0">
                              <span className="badge bg-info">Low</span>
                            </td>
                            <td className="px-0 text-dark fw-medium text-end">
                              $3.9K
                            </td>
                          </tr>
                          <tr>
                            <td className="px-0">
                              <div className="d-flex align-items-center">
                                <img src="/public/images/profile/user-5.jpg" className="rounded-circle" width="40"
                                  alt="flexy" />
                                <div className="ms-3">
                                  <h6 className="mb-0 fw-bolder">
                                    Andrew McDownland
                                  </h6>
                                  <span className="text-muted">Project Manager</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-0">Real Homes WP Theme</td>
                            <td className="px-0">
                              <span className="badge text-bg-primary">Medium</span>
                            </td>
                            <td className="px-0 text-dark fw-medium text-end">
                              $24.5K
                            </td>
                          </tr>
                          <tr>
                            <td className="px-0">
                              <div className="d-flex align-items-center">
                                <img src="/public/images/profile/user-6.jpg" className="rounded-circle" width="40"
                                  alt="flexy" />
                                <div className="ms-3">
                                  <h6 className="mb-0 fw-bolder">
                                    Christopher Jamil
                                  </h6>
                                  <span className="text-muted">SEO Manager</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-0">MedicalPro WP Theme</td>
                            <td className="px-0">
                              <span className="badge bg-warning">Hight</span>
                            </td>
                            <td className="px-0 text-dark fw-medium text-end">
                              $12.8K
                            </td>
                          </tr>
                          <tr>
                            <td className="px-0">
                              <div className="d-flex align-items-center">
                                <img src="/public/images/profile/user-7.jpg" className="rounded-circle" width="40"
                                  alt="flexy" />
                                <div className="ms-3">
                                  <h6 className="mb-0 fw-bolder">Nirav Joshi</h6>
                                  <span className="text-muted">Frontend Engineer</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-0">Hosting Press HTML</td>
                            <td className="px-0">
                              <span className="badge bg-danger">Low</span>
                            </td>
                            <td className="px-0 text-dark fw-medium text-end">
                              $2.4K
                            </td>
                          </tr>
                          <tr>
                            <td className="px-0">
                              <div className="d-flex align-items-center">
                                <img src="/public/images/profile/user-8.jpg" className="rounded-circle" width="40"
                                  alt="flexy" />
                                <div className="ms-3">
                                  <h6 className="mb-0 fw-bolder">Micheal Doe</h6>
                                  <span className="text-muted">Content Writer</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-0">Helping Hands WP Theme</td>
                            <td className="px-0">
                              <span className="badge bg-success">Low</span>
                            </td>
                            <td className="px-0 text-dark fw-medium text-end">
                              $9.3K
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="py-6 px-6 text-center">
              <p className="mb-0 fs-4">Design and Developed by <a href="#"
                className="pe-1 text-primary text-decoration-underline">Wrappixel.com</a> Distributed by <a href="https://themewagon.com" target="_blank" >ThemeWagon</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
    </>
  )
}

export default Dashboard