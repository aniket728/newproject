import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import $ from 'jquery';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Dashboard = () => {
  const salesChartRef = useRef(null); // Reference to store the sales chart instance
  const visitorsChartRef = useRef(null); // Reference to store the visitors chart instance
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard'); // State to track active menu item
  const location = useLocation(); // Hook to get the current location

  useEffect(() => {
    // Set the active menu item based on the current route
    const path = location.pathname.split('/')[2]; // Get the second part of the path (e.g., 'visited' from '/dashboard/visited')
    setActiveMenuItem(path || 'dashboard'); // Default to 'dashboard' if no sub-route is active
  }, [location]);

  useEffect(() => {
    // Sidebar dropdown functionality
    const initializeDropdowns = () => {
      $('.sidebar-dropdown-menu').hide(); // Hide all dropdown menus initially

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

      // Close dropdowns when clicking outside
      $(document).on('click', function (e) {
        if (!$(e.target).closest('.sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown').length) {
          $('.sidebar-dropdown-menu').slideUp('fast');
          $('.has-dropdown').removeClass('focused');
        }
      });

      // Collapse sidebar on small screens
      if (window.innerWidth < 768) {
        $('.sidebar').addClass('collapsed');
      }

      // Toggle sidebar
      $('.sidebar-toggle').on('click', function () {
        $('.sidebar').toggleClass('collapsed');
      });

      // Close sidebar when clicking outside
      $('.sidebar-overlay').on('click', function () {
        $('.sidebar').addClass('collapsed');
      });
    };

    initializeDropdowns();

    // Charts initialization
    const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

    // Destroy existing chart instances if they exist
    if (salesChartRef.current) {
      salesChartRef.current.destroy();
    }
    if (visitorsChartRef.current) {
      visitorsChartRef.current.destroy();
    }

    // Create new chart instances
    salesChartRef.current = new Chart($('#sales-chart'), {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          backgroundColor: '#6610f2',
          data: [5, 10, 5, 2, 20, 30, 45],
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });

    visitorsChartRef.current = new Chart($('#visitors-chart'), {
      type: 'doughnut',
      data: {
        labels: ['Children', 'Teenager', 'Parent'],
        datasets: [{
          backgroundColor: ['#6610f2', '#198754', '#ffc107'],
          data: [40, 60, 80],
        }]
      }
    });

    // Cleanup function to destroy charts and remove event listeners
    return () => {
      if (salesChartRef.current) {
        salesChartRef.current.destroy();
      }
      if (visitorsChartRef.current) {
        visitorsChartRef.current.destroy();
      }

      // Remove event listeners
      $('.sidebar-menu-item.has-dropdown > a, .sidebar-dropdown-menu-item.has-dropdown > a').off('click');
      $(document).off('click');
      $('.sidebar-toggle').off('click');
      $('.sidebar-overlay').off('click');
    };
  }, []);

  return (
    <>
      <div className="sidebar position-fixed top-0 bottom-0 bg-white border-end">
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
              <i className="ri-store-line sidebar-menu-item-icon"></i>
              Inventory
              <i className="ri-arrow-down-s-line sidebar-menu-item-accordion ms-auto"></i>
            </a>
            <ul className="sidebar-dropdown-menu">
              <li className={`sidebar-dropdown-menu-item ${activeMenuItem === 'items' ? 'active' : ''}`}>
                <Link to="items" onClick={() => setActiveMenuItem('items')}>Items</Link>
              </li>
              <li className={`sidebar-dropdown-menu-item ${activeMenuItem === 'warehouses' ? 'active' : ''}`}>
                <Link to="warehouses" onClick={() => setActiveMenuItem('warehouses')}>Warehouses</Link>
              </li>
              <li className={`sidebar-dropdown-menu-item ${activeMenuItem === 'priceLists' ? 'active' : ''}`}>
                <Link to="priceLists" onClick={() => setActiveMenuItem('priceLists')}>Price Lists</Link>
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
        </ul>
      </div>
      <div className="sidebar-overlay"></div>

      <main className="bg-light">
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
    {/* Updated profile icon with user icon inside a circle */}
    <div className="position-relative">
      <svg className="navbar-profile-image" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Circle background */}
        <circle cx="16" cy="16" r="16" fill="#6610f2" />
        {/* User icon */}
        <path d="M16 16C19.3137 16 22 13.3137 22 10C22 6.68629 19.3137 4 16 4C12.6863 4 10 6.68629 10 10C10 13.3137 12.6863 16 16 16Z" fill="#ffffff"/>
        <path d="M16 18C11.5817 18 8 21.5817 8 26C8 26.5523 8.44772 27 9 27H23C23.5523 27 24 26.5523 24 26C24 21.5817 20.4183 18 16 18Z" fill="#ffffff"/>
      </svg>
    </div>
    {/* Dropdown icon positioned outside the circle */}
    <i className="ri-arrow-down-s-line ms-2" style={{ color: '#6610f2', fontSize: '12px' }}></i>
  </div>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><Link className="dropdown-item" to="/vendorlogin">Log out</Link></li>
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