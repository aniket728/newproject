import React, { useState } from 'react';
import { FaPlus, FaTimes, FaEdit, FaTrash, FaUpload } from 'react-icons/fa';

const Customers = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [businessName, setBusinessName] = useState('');
  const [code, setCode] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [route, setRoute] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [geolocation, setGeolocation] = useState('');
  const [gstin, setGstin] = useState('');
  const [openingBalance, setOpeningBalance] = useState('');
  const [creditPeriod, setCreditPeriod] = useState('');
  const [creditLimit, setCreditLimit] = useState('');
  const [stateOfSupply, setStateOfSupply] = useState('');
  const [creditBillLimit, setCreditBillLimit] = useState('');
  const [uploadedDocument, setUploadedDocument] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      // Reset form fields when opening the sidebar
      setBusinessName('');
      setCode('');
      setContactPerson('');
      setMobile('');
      setEmail('');
      setRoute('');
      setBillingAddress('');
      setGeolocation('');
      setGstin('');
      setOpeningBalance('');
      setCreditPeriod('');
      setCreditLimit('');
      setStateOfSupply('');
      setCreditBillLimit('');
      setUploadedDocument(null);
      setEditingIndex(null);
    }
  };

  const triggerAlert = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setAlertMessage('');
    }, 3000);
  };

  const handleSave = () => {
    if (!businessName || !code || !contactPerson || !mobile || !email || !openingBalance) {
      triggerAlert('⚠️ Error: All fields are required.');
      return;
    }

    const newCustomer = {
      businessName,
      code,
      contactPerson,
      mobile,
      email,
      route,
      billingAddress,
      geolocation,
      gstin,
      openingBalance,
      creditPeriod,
      creditLimit,
      stateOfSupply,
      creditBillLimit,
      uploadDocument: uploadedDocument,
    };

    if (editingIndex !== null) {
      const updatedCustomers = [...customers];
      updatedCustomers[editingIndex] = newCustomer;
      setCustomers(updatedCustomers);
      triggerAlert('✅ Success: Customer updated successfully');
    } else {
      setCustomers([...customers, newCustomer]);
      triggerAlert('✅ Success: Customer added successfully');
    }

    toggleSidebar();
  };

  const handleEdit = (index) => {
    const customer = customers[index];
    setBusinessName(customer.businessName);
    setCode(customer.code);
    setContactPerson(customer.contactPerson);
    setMobile(customer.mobile);
    setEmail(customer.email);
    setRoute(customer.route);
    setBillingAddress(customer.billingAddress);
    setGeolocation(customer.geolocation);
    setGstin(customer.gstin);
    setOpeningBalance(customer.openingBalance);
    setCreditPeriod(customer.creditPeriod);
    setCreditLimit(customer.creditLimit);
    setStateOfSupply(customer.stateOfSupply);
    setCreditBillLimit(customer.creditBillLimit);
    setUploadedDocument(customer.uploadDocument);
    setEditingIndex(index);
    setIsSidebarOpen(true);
  };

  const handleDelete = (index) => {
    const updatedCustomers = customers.filter((_, i) => i !== index);
    setCustomers(updatedCustomers);
    triggerAlert('🗑️ Success: Customer deleted successfully');
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedDocument(file);
    }
  };

  return (
    <>
      <div className="WarehousesNav spaceB">
        <h3>Customers</h3>
        <div className="WarehousesNavButtons">
          <button className="btn btn-primary">
            <i className="fa-solid fa-location-dot fa-lg"></i>
          </button>
          <button className="btn btn-primary">
            <i className="fa-solid fa-gear fa-lg"></i>
          </button>
          <button className="btn btn-primary">Export</button>
          <button className="btn btn-primary">Import</button>
          <button className="btn btn-primary" onClick={toggleSidebar}>
            <FaPlus style={{ marginRight: '5px' }} /> New
          </button>
        </div>
      </div>
      <div className="WarehousesNav">
        <input type="text" placeholder="Search" />
      </div>

      {/* Right-to-Left Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>{editingIndex !== null ? 'Edit Customer' : 'New Customer'}</h3>
          <button className="close-btn" onClick={toggleSidebar}>
            &times;
          </button>
        </div>
        <div className="sidebar-body">
          <form>
            {/* General Details Section */}
            <h4>General Details</h4>
            <div className="form-group">
              <label htmlFor="businessName">Business Name</label>
              <input
                type="text"
                id="businessName"
                placeholder="Enter business name"
                className="form-control"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="code">Code</label>
              <input
                type="text"
                id="code"
                placeholder="Enter code"
                className="form-control"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactPerson">Contact Person</label>
              <input
                type="text"
                id="contactPerson"
                placeholder="Enter contact person"
                className="form-control"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                id="mobile"
                placeholder="Enter mobile number"
                className="form-control"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="route">Route</label>
              <input
                type="text"
                id="route"
                placeholder="Enter route"
                className="form-control"
                value={route}
                onChange={(e) => setRoute(e.target.value)}
              />
            </div>

            {/* Other Details Section */}
            <h4>Other Details</h4>
            <div className="form-group">
              <label htmlFor="billingAddress">Billing Address</label>
              <input
                type="text"
                id="billingAddress"
                placeholder="Enter billing address"
                className="form-control"
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="geolocation">Geolocation</label>
              <input
                type="text"
                id="geolocation"
                placeholder="Enter geolocation"
                className="form-control"
                value={geolocation}
                onChange={(e) => setGeolocation(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gstin">GSTIN</label>
              <input
                type="text"
                id="gstin"
                placeholder="Enter GSTIN"
                className="form-control"
                value={gstin}
                onChange={(e) => setGstin(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="openingBalance">Opening Balance</label>
              <input
                type="number"
                id="openingBalance"
                placeholder="Enter opening balance"
                className="form-control"
                value={openingBalance}
                onChange={(e) => setOpeningBalance(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="creditPeriod">Credit Period</label>
              <input
                type="text"
                id="creditPeriod"
                placeholder="Enter credit period"
                className="form-control"
                value={creditPeriod}
                onChange={(e) => setCreditPeriod(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="creditLimit">Credit Limit</label>
              <input
                type="text"
                id="creditLimit"
                placeholder="Enter credit limit"
                className="form-control"
                value={creditLimit}
                onChange={(e) => setCreditLimit(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="stateOfSupply">State of Supply</label>
              <input
                type="text"
                id="stateOfSupply"
                placeholder="Enter state of supply"
                className="form-control"
                value={stateOfSupply}
                onChange={(e) => setStateOfSupply(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="creditBillLimit">Credit Bill Limit</label>
              <input
                type="text"
                id="creditBillLimit"
                placeholder="Enter credit bill limit"
                className="form-control"
                value={creditBillLimit}
                onChange={(e) => setCreditBillLimit(e.target.value)}
              />
            </div>

            {/* Upload Document Section */}
            <h4>Upload Document</h4>
            <div className="form-group">
              <label htmlFor="uploadDocument">Upload Document</label>
              <input
                type="file"
                id="uploadDocument"
                className="form-control"
                onChange={handleFileUpload}
              />
            </div>
          </form>
        </div>
        <div className="sidebar-footer">
          <button className="btn btn-primary" onClick={handleSave}>
            {editingIndex !== null ? 'Update' : 'Save'}
          </button>
          <button className="btn btn-secondary" onClick={toggleSidebar}>
            Cancel
          </button>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      {/* Table to display customers */}
      <div className="customers-table">
        {customers.length === 0 ? (
          <div className="no-data img-nodata" style={{ textAlign: "center", marginTop: "20px" }}>
            <img src="../../assets/img/nodata.svg" alt="No data available" style={{ width: "200px", marginTop: "20px" }} />
            <p>Sorry! No customers found.</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Business Name</th>
                  <th>Code</th>
                  <th>Contact Person</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Opening Balance</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => (
                  <tr key={index}>
                    <td>{customer.businessName}</td>
                    <td>{customer.code}</td>
                    <td>{customer.contactPerson}</td>
                    <td>{customer.mobile}</td>
                    <td>{customer.email}</td>
                    <td>{customer.openingBalance}</td>
                    <td>
                      <button className="btn-edit" onClick={() => handleEdit(index)}>
                        <FaEdit /> Edit
                      </button>
                      <button className="btn-delete" onClick={() => handleDelete(index)}>
                        <FaTrash /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Alert Message */}
      {showAlert && (
        <div className="alert-box">
          <p>{alertMessage}</p>
        </div>
      )}
    </>
  );
};

export default Customers;