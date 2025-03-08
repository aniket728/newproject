import React, { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const salesChartRef = useRef(null);
  const visitorsChartRef = useRef(null);
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
  const [isIconBlack, setIsIconBlack] = useState(false); // State to track icon color
  const location = useLocation();
  const navigate = useNavigate();
  const vName = localStorage.getItem("vendorusername");

  useEffect(() => {
    const path = location.pathname.split('/')[2];
    setActiveMenuItem(path || 'dashboard');
  }, [location]);

  useEffect(() => {
    if (vName === null) {
      navigate("/vendorlogin");
    }
  }, [vName, navigate]);

  useEffect(() => {
    const initializeDropdowns = () => {
      $('.sidebar-dropdown-menu').hide();

      $('.sidebar-menu-item.has-dropdown > a, .sidebar-dropdown-menu-item.has-dropdown > a').on('click', function (e) {
        e.preventDefault();

        const $parent = $(this).parent();
        const $dropdownMenu = $(this).next('.sidebar-dropdown-menu');

        if (!$parent.hasClass('focused')) {
          $parent.siblings('.has-dropdown').removeClass('focused').find('.sidebar-dropdown-menu').slideUp('fast');
        }

        $dropdownMenu.slideToggle('fast');
        $parent.toggleClass('focused');
      });

      $(document).on('click', function (e) {
        if (!$(e.target).closest('.sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown').length) {
          $('.sidebar-dropdown-menu').slideUp('fast');
          $('.has-dropdown').removeClass('focused');
        }
      });

      if (window.innerWidth < 768) {
        $('.sidebar').addClass('collapsed');
      }

      $('.sidebar-toggle').on('click', function () {
        $('.sidebar').toggleClass('collapsed');
      });

      $('.sidebar-overlay').on('click', function () {
        $('.sidebar').addClass('collapsed');
      });
    };

    initializeDropdowns();

    const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

    if (salesChartRef.current) {
      salesChartRef.current.destroy();
    }
    if (visitorsChartRef.current) {
      visitorsChartRef.current.destroy();
    }

    return () => {
      if (salesChartRef.current) {
        salesChartRef.current.destroy();
      }
      if (visitorsChartRef.current) {
        visitorsChartRef.current.destroy();
      }

      $('.sidebar-menu-item.has-dropdown > a, .sidebar-dropdown-menu-item.has-dropdown > a').off('click');
      $(document).off('click');
      $('.sidebar-toggle').off('click');
      $('.sidebar-overlay').off('click');
    };
  }, []);

  const toggleIconColor = () => {
    setIsIconBlack(!isIconBlack);
  };

  const handleLoggedOut = () => {
    // Clear localStorage
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    localStorage.removeItem("vendorusername");

    // Clear sessionStorage
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("vendorusername");

    // Navigate to the vendor login page
    navigate("/vendorlogin");
  };

  return (
    <>
      <div className="sidebar position-fixed top-0 bottom-0 bg-white border-end" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', background: 'linear-gradient(145deg, #ffffff, #f8f9fa)' }}>
        <div className="d-flex align-items-center p-3">
          <a href="#" className="sidebar-logo text-uppercase fw-bold text-decoration-none text-indigo fs-4">Foxy</a>
          <i className="sidebar-toggle ri-arrow-left-circle-line ms-auto fs-5 d-none d-md-block"></i>
        </div>
        <ul className="sidebar-menu p-3 m-0 mb-0">
          <li className={`sidebar-menu-item ${activeMenuItem === 'dashboard' ? 'active' : ''}`}>
            <Link to="/dashboard" onClick={() => setActiveMenuItem('dashboard')}>
              <i className="ri-dashboard-line sidebar-menu-item-icon"></i>
              Dashboard
            </Link>
          </li>
          <li className="sidebar-menu-divider mt-3 mb-1 text-uppercase">Navigation</li>
          <li className={`sidebar-menu-item ${activeMenuItem === 'live-location' ? 'active' : ''}`}>
            <Link to="live-location" onClick={() => setActiveMenuItem('live-location')}>
              <i className="ri-map-pin-line sidebar-menu-item-icon"></i>
              Live Location
            </Link>
          </li>
          <li className="sidebar-menu-item has-dropdown">
            <Link to="parties">
              <i className="ri-group-line sidebar-menu-item-icon"></i>
              Parties
              <i className="ri-arrow-down-s-line sidebar-menu-item-accordion ms-auto"></i>
            </Link>
            <ul className="sidebar-dropdown-menu">
              <li className={`sidebar-dropdown-menu-item ${activeMenuItem === 'customers' ? 'active' : ''}`}>
                <Link to="customers" onClick={() => setActiveMenuItem('customers')}>Customers</Link>
              </li>
              <li className={`sidebar-dropdown-menu-item ${activeMenuItem === 'suppliers' ? 'active' : ''}`}>
                <Link to="suppliers" onClick={() => setActiveMenuItem('suppliers')}>Suppliers</Link>
              </li>
              <li className={`sidebar-dropdown-menu-item ${activeMenuItem === 'visited' ? 'active' : ''}`}>
                <Link to="visited" onClick={() => setActiveMenuItem('visited')}>Visited</Link>
              </li>
              <li className={`sidebar-dropdown-menu-item ${activeMenuItem === 'groups' ? 'active' : ''}`}>
                <Link to="groups" onClick={() => setActiveMenuItem('groups')}>Groups</Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-menu-item has-dropdown">
            <a href="#">
              <i className="ri-route-line sidebar-menu-item-icon"></i>
              Routes
              <i className="ri-arrow-down-s-line sidebar-menu-item-accordion ms-auto"></i>
            </a>
            <ul className="sidebar-dropdown-menu">
              <li className={`sidebar-dropdown-menu-item ${activeMenuItem === 'regions' ? 'active' : ''}`}>
                <Link to="regions" onClick={() => setActiveMenuItem('regions')}>Regions</Link>
              </li>
              <li className={`sidebar-dropdown-menu-item ${activeMenuItem === 'cities' ? 'active' : ''}`}>
                <Link to="cities" onClick={() => setActiveMenuItem('cities')}>Cities</Link>
              </li>
              <li className={`sidebar-dropdown-menu-item ${activeMenuItem === 'areas' ? 'active' : ''}`}>
                <Link to="areas" onClick={() => setActiveMenuItem('areas')}>Areas</Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-menu-item has-dropdown">
            <a href="#">
              <i className="ri-user-line sidebar-menu-item-icon"></i>
              User
              <i className="ri-arrow-down-s-line sidebar-menu-item-accordion ms-auto"></i>
            </a>
            <ul className="sidebar-dropdown-menu">
              <li className={`sidebar-dropdown-menu-item ${activeMenuItem === 'users' ? 'active' : ''}`}>
                <Link to="user" onClick={() => setActiveMenuItem('users')}>Users</Link>
              </li>
              <li className={`sidebar-dropdown-menu-item ${activeMenuItem === 'target' ? 'active' : ''}`}>
                <Link to="target" onClick={() => setActiveMenuItem('target')}>Target</Link>
              </li>
              <li className={`sidebar-dropdown-menu-item ${activeMenuItem === 'leaderboard' ? 'active' : ''}`}>
                <Link to="leaderboard" onClick={() => setActiveMenuItem('leaderboard')}>Leaderboard</Link>
              </li>
            </ul>
          </li>
          <li className={`sidebar-menu-item ${activeMenuItem === 'attendance' ? 'active' : ''}`}>
            <Link to="attendance" onClick={() => setActiveMenuItem('attendance')}>
              <i className="ri-calendar-check-line sidebar-menu-item-icon"></i>
              Attendance
            </Link>
          </li>
          <li className={`sidebar-menu-item ${activeMenuItem === 'report' ? 'active' : ''}`}>
            <Link to="report" onClick={() => setActiveMenuItem('report')}>
              <i className="ri-file-chart-line sidebar-menu-item-icon"></i>
              Report
            </Link>
          </li>
          <li className={`sidebar-menu-item ${activeMenuItem === 'settings' ? 'active' : ''}`}>
            <Link to="settings" onClick={() => setActiveMenuItem('settings')}>
              <i className="ri-file-chart-line sidebar-menu-item-icon"></i>
              Settings
            </Link>
          </li>
          <li className={`sidebar-menu-item ${activeMenuItem === 'profile' ? 'active' : ''}`}>
            <Link to="profile" onClick={() => setActiveMenuItem('profile')}>
              <i className="ri-file-chart-line sidebar-menu-item-icon"></i>
              Profile
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-overlay"></div>

      <main className="bg-light" style={{ background: 'linear-gradient(145deg, #f8f9fa, #ffffff)', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
        <div className="p-2">
          <nav className="px-3 py-2 bg-white rounded shadow-sm">
            <i className="ri-menu-line sidebar-toggle me-3 d-block d-md-none"></i>
            <h5 className="fw-bold mb-0 me-auto">Dashboard</h5>
            <div className="dropdown me-3 d-none d-sm-block">
              <div className="cursor-pointer dropdown-toggle navbar-link" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="ri-notification-line"></i>
              </div>
              <div className="dropdown-menu fx-dropdown-menu">
                <h5 className="p-3 bg-indigo text-light">Notification</h5>
                <div className="list-group list-group-flush">
                  <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                      <div className="fw-semibold">Subheading</div>
                      <span className="fs-7">Content for list item</span>
                    </div>
                    <span className="badge bg-primary rounded-pill">14</span>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                      <div className="fw-semibold">Subheading</div>
                      <span className="fs-7">Content for list item</span>
                    </div>
                    <span className="badge bg-primary rounded-pill">14</span>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                      <div className="fw-semibold">Subheading</div>
                      <span className="fs-7">Content for list item</span>
                    </div>
                    <span className="badge bg-primary rounded-pill">14</span>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                      <div className="fw-semibold">Subheading</div>
                      <span className="fs-7">Content for list item</span>
                    </div>
                    <span className="badge bg-primary rounded-pill">14</span>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                      <div className="fw-semibold">Subheading</div>
                      <span className="fs-7">Content for list item</span>
                    </div>
                    <span className="badge bg-primary rounded-pill">14</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <div className="d-flex align-items-center cursor-pointer dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="me-2 d-none d-sm-block">John Doe</span>
                <div className="position-relative">
                  <svg className="navbar-profile-image" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16" fill="#6610f2" />
                    <path d="M16 16C19.3137 16 22 13.3137 22 10C22 6.68629 19.3137 4 16 4C12.6863 4 10 6.68629 10 10C10 13.3137 12.6863 16 16 16Z" fill="#ffffff"/>
                    <path d="M16 18C11.5817 18 8 21.5817 8 26C8 26.5523 8.44772 27 9 27H23C23.5523 27 24 26.5523 24 26C24 21.5817 20.4183 18 16 18Z" fill="#ffffff"/>
                  </svg>
                </div>
                <i className="ri-arrow-down-s-line ms-2" style={{ color: '#6610f2', fontSize: '12px' }}></i>
              </div>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="/profile">Profile</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><Link className="dropdown-item" onClick={handleLoggedOut}>Log out</Link></li>
              </ul>
            </div>
          </nav>
        </div>
        <Outlet/>
      </main>
    </>
  );
};

export default Dashboard;