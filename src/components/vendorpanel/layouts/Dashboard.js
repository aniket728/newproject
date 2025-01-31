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
                        <Link className="nav-link" to="#">Credit Notes</Link>
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

                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

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
                      <li><Link className="dropdown-item" to="#">Logout</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

         

          <main className="py-6 bg-surface-secondary">
            <div className="container-fluid">
             

             
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;