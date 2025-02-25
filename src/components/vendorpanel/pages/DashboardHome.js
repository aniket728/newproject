import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUser, faCalendarCheck, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const DashboardHome = () => {
  return (
    <div className='dcard'>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-blue order-card">
              <div className="card-block">
                <h6 className="m-b-20" style={{textAlign:"center"}}>Customers</h6>
                <h2 className="text-right">
                  <FontAwesomeIcon icon={faUsers} className="f-left" />
                  <span style={{paddingLeft:"41px", paddingTop:"7px"}}>486</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-green order-card">
              <div className="card-block">
                <h6 className="m-b-20"style={{textAlign:"center"}}>Users</h6>
                <h2 className="text-right">
                  <FontAwesomeIcon icon={faUser} className="f-left" />
                  <span style={{paddingLeft:"61px", paddingTop:"7px"}}>486</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-yellow order-card">
              <div className="card-block">
                <h6 className="m-b-20" style={{ textAlign: "center", }}>Attendance</h6>
                <h2 className="text-right">
                  <FontAwesomeIcon icon={faCalendarCheck} className="f-left" />
                  <span style={{paddingLeft:"58px", paddingTop:"7px"}}>486</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-pink order-card">
              <div className="card-block">
                <h6 className="m-b-20"style={{textAlign:"center"}}>Orders Received</h6>
                <h2 className="text-right">
                  <FontAwesomeIcon icon={faShoppingCart} className="f-left" />
                  <span style={{paddingLeft:"41px", paddingTop:"7px"}}>486</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;