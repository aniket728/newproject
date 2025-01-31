import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        {/* Sidebar */}
        <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
          <div className="container-fluid">
            {/* Sidebar Toggle Button */}
            <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Brand Logo */}
            <Link className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" to="#">
              <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" alt="..." />
            </Link>

            {/* User Avatar (Mobile) */}
            <div className="navbar-user d-lg-none">
              <div className="dropdown">
                <Link to="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div className="avatar-parent-child">
                    <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar- rounded-circle" />
                    <span className="avatar-child avatar-badge bg-success"></span>
                  </div>
                </Link>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                  <Link to="#" className="dropdown-item">Profile</Link>
                  <Link to="#" className="dropdown-item">Settings</Link>
                  <Link to="#" className="dropdown-item">Billing</Link>
                  <hr className="dropdown-divider" />
                  <Link to="#" className="dropdown-item">Logout</Link>
                </div>
              </div>
            </div>

            {/* Sidebar Navigation */}
            <div className="collapse navbar-collapse show" id="sidebarCollapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <i className="bi bi-house"></i> Dashboard
                  </Link>
                </li>

                {/* Inventory Section */}
                <li className="nav-item">
                  <Link className="nav-link" to="#" data-bs-toggle="collapse" data-bs-target="#inventoryCollapse" aria-expanded="false" aria-controls="inventoryCollapse">
                    <i className="bi bi-box"></i> Inventory
                  </Link>
                  <div className="collapse" id="inventoryCollapse">
                    <ul className="nav flex-column ms-3">
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Items</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Warehouses</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Price Lists</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Routes Section */}
                <li className="nav-item">
                  <Link className="nav-link" to="#" data-bs-toggle="collapse" data-bs-target="#routesCollapse" aria-expanded="false" aria-controls="routesCollapse">
                    <i className="bi bi-map"></i> Routes
                  </Link>
                  <div className="collapse" id="routesCollapse">
                    <ul className="nav flex-column ms-3">
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Regions</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Cities</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Areas</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Attendance</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Report Section */}
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <i className="bi bi-file-earmark-text"></i> Report
                  </Link>
                </li>

                {/* Settings Section */}
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <i className="bi bi-gear"></i> Settings
                  </Link>
                </li>

                {/* User Section */}
                <li className="nav-item">
                  <Link className="nav-link" to="#" data-bs-toggle="collapse" data-bs-target="#userCollapse" aria-expanded="false" aria-controls="userCollapse">
                    <i className="bi bi-person"></i> User
                  </Link>
                  <div className="collapse" id="userCollapse">
                    <ul className="nav flex-column ms-3">
                      <li className="nav-item">
                        <Link className="nav-link" to="#">User</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Target</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Leaderboard</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Achievements</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Sales Section */}
                <li className="nav-item">
                  <Link className="nav-link" to="./" data-bs-toggle="collapse" data-bs-target="#salesCollapse" aria-expanded="false" aria-controls="salesCollapse">
                    <i className="bi bi-cart"></i> Sales
                  </Link>
                  <div className="collapse" id="salesCollapse">
                    <ul className="nav flex-column ms-3">
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Estimates</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="r">Sales Order</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Delivery Challan</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Sales Return</Link>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Credit Notes</a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Purchase Section */}
                <li className="nav-item">
                  <Link className="nav-link" to="#" data-bs-toggle="collapse" data-bs-target="#purchaseCollapse" aria-expanded="false" aria-controls="purchaseCollapse">
                    <i className="bi bi-bag"></i> Purchase
                  </Link>
                  <div className="collapse" id="purchaseCollapse">
                    <ul className="nav flex-column ms-3">
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Purchase Order</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Purchase Invoice</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Purchase Return</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Van Sales */}
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <i className="bi bi-truck"></i> Van Sales
                  </Link>
                </li>

                {/* Live Location */}
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <i className="bi bi-map"></i> Live Location
                  </Link>
                </li>

                {/* Parties Section */}
                <li className="nav-item">
                  <Link className="nav-link" to="#" data-bs-toggle="collapse" data-bs-target="#partiesCollapse" aria-expanded="false" aria-controls="partiesCollapse">
                    <i className="bi bi-people"></i> Parties
                  </Link>
                  <div className="collapse" id="partiesCollapse">
                    <ul className="nav flex-column ms-3">
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Customers</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Suppliers</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Groups</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Visited</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>

              <hr className="navbar-divider my-5 opacity-20" />

              <div className="mt-auto"></div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          {/* Top Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNavbar" aria-controls="topNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="topNavbar">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">Features</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">Pricing</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">About</Link>
                  </li>
                </ul>


                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="User" className="rounded-circle" width="30" height="30" />
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item" to="#">Profile</Link></li>
                      <li><Link className="dropdown-item" to="#">Settings</Link></li>
                      <li><Link className="dropdown-item" to="#">Billing</Link></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><Link className="dropdown-item" to="/vendorlogin">Logout</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

         

          <main className="py-6 bg-surface-secondary">
            <div className="container-fluid">
              {/* Cards Section */}
              <div className="row g-6 mb-6">
                <div className="col-xl-3 col-sm-6 col-12">
                  <div className="card shadow border-0">
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <span className="h6 font-semibold text-muted text-sm d-block mb-2">Budget</span>
                          <span className="h3 font-bold mb-0">$750.90</span>
                        </div>
                        <div className="col-auto">
                          <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                            <i className="bi bi-credit-card"></i>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 mb-0 text-sm">
                        <span className="badge badge-pill bg-soft-success text-success me-2">
                          <i className="bi bi-arrow-up me-1"></i>13%
                        </span>
                        <span className="text-nowrap text-xs text-muted">Since last month</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                  <div className="card shadow border-0">
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <span className="h6 font-semibold text-muted text-sm d-block mb-2">New projects</span>
                          <span className="h3 font-bold mb-0">215</span>
                        </div>
                        <div className="col-auto">
                          <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                            <i className="bi bi-people"></i>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 mb-0 text-sm">
                        <span className="badge badge-pill bg-soft-success text-success me-2">
                          <i className="bi bi-arrow-up me-1"></i>30%
                        </span>
                        <span className="text-nowrap text-xs text-muted">Since last month</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                  <div className="card shadow border-0">
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total hours</span>
                          <span className="h3 font-bold mb-0">1.400</span>
                        </div>
                        <div className="col-auto">
                          <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                            <i className="bi bi-clock-history"></i>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 mb-0 text-sm">
                        <span className="badge badge-pill bg-soft-danger text-danger me-2">
                          <i className="bi bi-arrow-down me-1"></i>-5%
                        </span>
                        <span className="text-nowrap text-xs text-muted">Since last month</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                  <div className="card shadow border-0">
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <span className="h6 font-semibold text-muted text-sm d-block mb-2">Work load</span>
                          <span className="h3 font-bold mb-0">95%</span>
                        </div>
                        <div className="col-auto">
                          <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                            <i className="bi bi-minecart-loaded"></i>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 mb-0 text-sm">
                        <span className="badge badge-pill bg-soft-success text-success me-2">
                          <i className="bi bi-arrow-up me-1"></i>10%
                        </span>
                       
                        <span className="text-nowrap text-xs text-muted">Since last month</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applications Table */}
              <div className="card shadow border-0 mb-7">
                <div className="card-header">
                  <h5 className="mb-0">Applications</h5>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover table-nowrap">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Company</th>
                        <th scope="col">Offer</th>
                        <th scope="col">Meeting</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Table rows */}
                      {/* ... (existing table rows) ... */}
                    </tbody>
                  </table>
                </div>
                <div className="card-footer border-0 py-5">
                  <span className="text-muted text-sm">Showing 10 items out of 250 results found</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;