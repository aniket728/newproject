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
            <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
              <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" alt="..." />
            </a>

            {/* User Avatar (Mobile) */}
            <div className="navbar-user d-lg-none">
              <div className="dropdown">
                <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div className="avatar-parent-child">
                    <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar- rounded-circle" />
                    <span className="avatar-child avatar-badge bg-success"></span>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                  <a href="#" className="dropdown-item">Profile</a>
                  <a href="#" className="dropdown-item">Settings</a>
                  <a href="#" className="dropdown-item">Billing</a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">Logout</a>
                </div>
              </div>
            </div>

            {/* Sidebar Navigation */}
            <div className="collapse navbar-collapse show" id="sidebarCollapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="bi bi-house"></i> Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="bi bi-bar-chart"></i> Analytics
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="bi bi-chat"></i> Messages
                    <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="bi bi-bookmarks"></i> Collections
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="bi bi-people"></i> Users
                  </a>
                </li>

                {/* Sales Section */}
                <li className="nav-item">
                  <Link className="nav-link" to="./" data-bs-toggle="collapse" data-bs-target="#salesCollapse" aria-expanded="false" aria-controls="salesCollapse">
                    <i className="bi bi-cart"></i> Sales
                  </Link>
                  <div className="collapse" id="salesCollapse">
                    <ul className="nav flex-column ms-3">
                      <li className="nav-item">
                        <a className="nav-link" href="#">Estimates</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Sales Order</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Delivery Challan</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Sales Return</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Credit Notes</a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Purchase Section */}
                <li className="nav-item">
                  <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#purchaseCollapse" aria-expanded="false" aria-controls="purchaseCollapse">
                    <i className="bi bi-bag"></i> Purchase
                  </a>
                  <div className="collapse" id="purchaseCollapse">
                    <ul className="nav flex-column ms-3">
                      <li className="nav-item">
                        <a className="nav-link" href="#">Purchase Order</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Purchase Invoice</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Purchase Return</a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Van Sales */}
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="bi bi-truck"></i> Van Sales
                  </a>
                </li>

                {/* Settings */}
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="bi bi-gear"></i> Settings
                  </a>
                </li>

                {/* Live Location */}
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="bi bi-map"></i> Live Location
                  </a>
                </li>

                {/* Parties Section */}
                <li className="nav-item">
                  <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#partiesCollapse" aria-expanded="false" aria-controls="partiesCollapse">
                    <i className="bi bi-people"></i> Parties
                  </a>
                  <div className="collapse" id="partiesCollapse">
                    <ul className="nav flex-column ms-3">
                      <li className="nav-item">
                        <a className="nav-link" href="#">Customers</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Suppliers</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Groups</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Visited</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>

              <hr className="navbar-divider my-5 opacity-20" />

              <div className="mt-auto"></div>

              {/* Account and Logout */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="bi bi-person-square"></i> Account
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="bi bi-box-arrow-left"></i> Logout
                  </a>
                </li>
              </ul>
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
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                </ul>

                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="User" className="rounded-circle" width="30" height="30" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#">Profile</a></li>
                      <li><a className="dropdown-item" href="#">Settings</a></li>
                      <li><a className="dropdown-item" href="#">Billing</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Logout</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Header and Main Content */}
          <header className="bg-surface-primary border-bottom pt-6">
            <div className="container-fluid">
              <div className="mb-npx">
                <div className="row align-items-center">
                  <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                    <h1 className="h2 mb-0 ls-tight">Application</h1>
                  </div>
                  <div className="col-sm-6 col-12 text-sm-end">
                    <div className="mx-n1">
                      <a href="#" className="btn d-inline-flex btn-sm btn-neutral border-base mx-1">
                        <span className="pe-2">
                          <i className="bi bi-pencil"></i>
                        </span>
                        <span>Edit</span>
                      </a>
                      <a href="#" className="btn d-inline-flex btn-sm btn-primary mx-1">
                        <span className="pe-2">
                          <i className="bi bi-plus"></i>
                        </span>
                        <span>Create</span>
                      </a>
                    </div>
                  </div>
                </div>

                <ul className="nav nav-tabs mt-4 overflow-x border-0">
                  <li className="nav-item">
                    <a href="#" className="nav-link active">All files</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link font-regular">Shared</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link font-regular">File requests</a>
                  </li>
                </ul>
              </div>
            </div>
          </header>

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