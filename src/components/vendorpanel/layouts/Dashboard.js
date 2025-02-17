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

            {/* Sidebar Navigation */}
            <div className="collapse navbar-collapse show" id="sidebarCollapse">
              <ul className="navbar-nav">
                {/* Dashboard */}
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard"
                    style={{
                      color: '#4a5568',
                      transition: 'color 0.3s ease, background-color 0.3s ease',
                      padding: '10px 15px',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: '500',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#1a365d';
                      e.currentTarget.style.backgroundColor = '#edf2f7';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#4a5568';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}>
                    <i className="bi bi-house"></i> Dashboard
                  </Link>
                </li>

                {/* Inventory Section */}
                <li className="nav-item">
                  <Link className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#inventoryCollapse" aria-expanded="false" aria-controls="inventoryCollapse"
                    style={{
                      color: '#4a5568',
                      transition: 'color 0.3s ease, background-color 0.3s ease',
                      padding: '10px 15px',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: '500',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#1a365d';
                      e.currentTarget.style.backgroundColor = '#edf2f7';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#4a5568';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}>
                    <i className="bi bi-box"></i> Inventory
                  </Link>
                  <div className="collapse" id="inventoryCollapse">
                    <ul className="nav flex-column ms-3">
                      <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/items"
                          style={{
                            color: '#4a5568',
                            transition: 'color 0.3s ease',
                            padding: '8px 12px',
                            fontSize: '1rem',
                            fontWeight: '400',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#1a365d'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}>
                          Items
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/warehouses"
                          style={{
                            color: '#4a5568',
                            transition: 'color 0.3s ease',
                            padding: '8px 12px',
                            fontSize: '1rem',
                            fontWeight: '400',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#1a365d'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}>
                          Warehouses
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/price-lists"
                          style={{
                            color: '#4a5568',
                            transition: 'color 0.3s ease',
                            padding: '8px 12px',
                            fontSize: '1rem',
                            fontWeight: '400',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#1a365d'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}>
                          Price Lists
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Routes Section */}
                <li className="nav-item">
                  <Link className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#routesCollapse" aria-expanded="false" aria-controls="routesCollapse"
                    style={{
                      color: '#4a5568',
                      transition: 'color 0.3s ease, background-color 0.3s ease',
                      padding: '10px 15px',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: '500',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#1a365d';
                      e.currentTarget.style.backgroundColor = '#edf2f7';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#4a5568';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}>
                    <i className="bi bi-map"></i> Routes
                  </Link>
                  <div className="collapse" id="routesCollapse">
                    <ul className="nav flex-column ms-3">
                      <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/cities"
                          style={{
                            color: '#4a5568',
                            transition: 'color 0.3s ease',
                            padding: '8px 12px',
                            fontSize: '1rem',
                            fontWeight: '400',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#1a365d'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}>
                          Cities
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/regions"
                          style={{
                            color: '#4a5568',
                            transition: 'color 0.3s ease',
                            padding: '8px 12px',
                            fontSize: '1rem',
                            fontWeight: '400',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#1a365d'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}>
                          Regions
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/areas"
                          style={{
                            color: '#4a5568',
                            transition: 'color 0.3s ease',
                            padding: '8px 12px',
                            fontSize: '1rem',
                            fontWeight: '400',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#1a365d'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}>
                          Areas
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Attendance Section */}
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard/attendance"
                    style={{
                      color: '#4a5568',
                      transition: 'color 0.3s ease, background-color 0.3s ease',
                      padding: '10px 15px',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: '500',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#1a365d';
                      e.currentTarget.style.backgroundColor = '#edf2f7';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#4a5568';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}>
                    <i className="bi bi-file-earmark-text"></i> Attendance
                  </Link>
                </li>

                {/* Reports Section */}
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard/reports"
                    style={{
                      color: '#4a5568',
                      transition: 'color 0.3s ease, background-color 0.3s ease',
                      padding: '10px 15px',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: '500',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#1a365d';
                      e.currentTarget.style.backgroundColor = '#edf2f7';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#4a5568';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}>
                    <i className="bi bi-file-earmark-text"></i> Reports
                  </Link>
                </li>

                {/* User Section */}
                <li className="nav-item">
                  <Link className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#userCollapse" aria-expanded="false" aria-controls="userCollapse"
                    style={{
                      color: '#4a5568',
                      transition: 'color 0.3s ease, background-color 0.3s ease',
                      padding: '10px 15px',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: '500',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#1a365d';
                      e.currentTarget.style.backgroundColor = '#edf2f7';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#4a5568';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}>
                    <i className="bi bi-person"></i> User
                  </Link>
                  <div className="collapse" id="userCollapse">
                    <ul className="nav flex-column ms-3">
                      <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/target"
                          style={{
                            color: '#4a5568',
                            transition: 'color 0.3s ease',
                            padding: '8px 12px',
                            fontSize: '1rem',
                            fontWeight: '400',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#1a365d'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}>
                          Target
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/leaderboard"
                          style={{
                            color: '#4a5568',
                            transition: 'color 0.3s ease',
                            padding: '8px 12px',
                            fontSize: '1rem',
                            fontWeight: '400',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#1a365d'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}>
                          Leaderboard
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/achievements"
                          style={{
                            color: '#4a5568',
                            transition: 'color 0.3s ease',
                            padding: '8px 12px',
                            fontSize: '1rem',
                            fontWeight: '400',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#1a365d'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}>
                          Achievements
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Live Location */}
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard/live-location"
                    style={{
                      color: '#4a5568',
                      transition: 'color 0.3s ease, background-color 0.3s ease',
                      padding: '10px 15px',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: '500',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#1a365d';
                      e.currentTarget.style.backgroundColor = '#edf2f7';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#4a5568';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}>
                    <i className="bi bi-map"></i> Live Location
                  </Link>
                </li>

                {/* Parties Section */}
                <li className="nav-item">
                  <Link className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#partiesCollapse" aria-expanded="false" aria-controls="partiesCollapse"
                    style={{
                      color: '#4a5568',
                      transition: 'color 0.3s ease, background-color 0.3s ease',
                      padding: '10px 15px',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: '500',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#1a365d';
                      e.currentTarget.style.backgroundColor = '#edf2f7';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#4a5568';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}>
                    <i className="bi bi-people"></i> Parties
                  </Link>
                  <div className="collapse" id="partiesCollapse">
                    <ul className="nav flex-column ms-3">
                      <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/customers"
                          style={{
                            color: '#4a5568',
                            transition: 'color 0.3s ease',
                            padding: '8px 12px',
                            fontSize: '1rem',
                            fontWeight: '400',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#1a365d'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}>
                          Customers
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/suppliers"
                          style={{
                            color: '#4a5568',
                            transition: 'color 0.3s ease',
                            padding: '8px 12px',
                            fontSize: '1rem',
                            fontWeight: '400',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#1a365d'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}>
                          Suppliers
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/groups"
                          style={{
                            color: '#4a5568',
                            transition: 'color 0.3s ease',
                            padding: '8px 12px',
                            fontSize: '1rem',
                            fontWeight: '400',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#1a365d'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}>
                          Groups
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/visited"
                          style={{
                            color: '#4a5568',
                            transition: 'color 0.3s ease',
                            padding: '8px 12px',
                            fontSize: '1rem',
                            fontWeight: '400',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#1a365d'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}>
                          Visited
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Settings Section */}
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard/settings"
                    style={{
                      color: '#4a5568',
                      transition: 'color 0.3s ease, background-color 0.3s ease',
                      padding: '10px 15px',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: '500',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#1a365d';
                      e.currentTarget.style.backgroundColor = '#edf2f7';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#4a5568';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}>
                    <i className="bi bi-gear"></i> Settings
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <div className="d-flex align-items-center cursor-pointer dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="me-2 d-none d-sm-block">John Doe</span>
                {/* Replace the profile image with an SVG icon */}
                <svg className="navbar-profile-image" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 16C19.3137 16 22 13.3137 22 10C22 6.68629 19.3137 4 16 4C12.6863 4 10 6.68629 10 10C10 13.3137 12.6863 16 16 16Z" fill="#6610f2"/>
                  <path d="M16 18C11.5817 18 8 21.5817 8 26C8 26.5523 8.44772 27 9 27H23C23.5523 27 24 26.5523 24 26C24 21.5817 20.4183 18 16 18Z" fill="#6610f2"/>
                </svg>
              </div>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
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