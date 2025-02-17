import React, { useState } from 'react';
import { FaPlus, FaTimes, FaEdit, FaTrash, FaUpload } from 'react-icons/fa';
import { api_url } from '../../../helpers/api_helper';
import { useNavigate } from 'react-router-dom';


const Customers = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [uploadedDocument, setUploadedDocument] = useState(null);

  const [formData, setFormData] = useState({
    businessName: '',
    code: '',
    contactPerson: '',
    phoneNo: '',
    email: '',
    route: '',
    billingAddress: '',
    geolocation: '',
    gstin: '',
    openingBalance: '',
    creditPeriod: '',
    creditLimit: '',
    stateOfSupply: '',
    creditBillLimit: '',
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      // Reset form fields when opening the sidebar
      setFormData({
        businessName: '',
        code: '',
        contactPerson: '',
        phoneNo: '',
        email: '',
        route: '',
        billingAddress: '',
        geolocation: '',
        gstin: '',
        openingBalance: '',
        creditPeriod: '',
        creditLimit: '',
        stateOfSupply: '',
        creditBillLimit: '',
      });
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

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedDocument(file);
    }
  };

  const handleSave = async () => {
    const { businessName, code, contactPerson, phoneNo, email, openingBalance } = formData;

    if (!businessName || !code || !contactPerson || !phoneNo || !email || !openingBalance) {
      triggerAlert('⚠️ Error: All fields are required.');
      return;
    }

    const newCustomer = {
      ...formData,
      uploadDocument: uploadedDocument,
    };

    try {
      const response = await fetch(`${api_url}/api/customers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCustomer),
      });

      if (!response.ok) {
        throw new Error('Failed to save customer');
      }

      const result = await response.json();

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
    } catch (error) {
      console.error('Error:', error);
      triggerAlert('⚠️ Error: Failed to save customer.');
    }
  };

  const handleEdit = (index) => {
    const customer = customers[index];
    setFormData({
      businessName: customer.businessName,
      code: customer.code,
      contactPerson: customer.contactPerson,
      phoneNo: customer.phoneNo,
      email: customer.email,
      route: customer.route,
      billingAddress: customer.billingAddress,
      geolocation: customer.geolocation,
      gstin: customer.gstin,
      openingBalance: customer.openingBalance,
      creditPeriod: customer.creditPeriod,
      creditLimit: customer.creditLimit,
      stateOfSupply: customer.stateOfSupply,
      creditBillLimit: customer.creditBillLimit,
    });
    setUploadedDocument(customer.uploadDocument);
    setEditingIndex(index);
    setIsSidebarOpen(true);
  };

  const handleDelete = (index) => {
    const updatedCustomers = customers.filter((_, i) => i !== index);
    setCustomers(updatedCustomers);
    triggerAlert('🗑️ Success: Customer deleted successfully');
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ccc' }}>
        <h3>Customers</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button style={{ padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            <i className="fa-solid fa-location-dot fa-lg"></i>
          </button>
          <button style={{ padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            <i className="fa-solid fa-gear fa-lg"></i>
          </button>
          <button className="btn btn-primary">Export</button>
          <button className="btn btn-primary">Import</button>
          <button className="btn btn-primary" onClick={toggleSidebar}>
            <FaPlus style={{ marginRight: '5px' }} /> New
          </button>
        </div>
      </div>
      <div style={{ padding: '10px' }}>
        <input
          type="text"
          placeholder="Search"
          style={{ padding: '5px', width: '100%', maxWidth: '300px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
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
                name="businessName"
                placeholder="Enter business name"
                className="form-control"
                value={formData.businessName}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="code">Code</label>
              <input
                type="text"
                name="code"
                placeholder="Enter code"
                className="form-control"
                value={formData.code}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactPerson">Contact Person</label>
              <input
                type="text"
                name="contactPerson"
                placeholder="Enter contact person"
                className="form-control"
                value={formData.contactPerson}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNo">phoneNo</label>
              <input
                type="text"
                name="phoneNo"
                placeholder="Enter phoneNo number"
                className="form-control"
                value={formData.phoneNo}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="form-control"
                value={formData.email}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="route">Route</label>
              <input
                type="text"
                name="route"
                placeholder="Enter route"
                className="form-control"
                value={formData.route}
                onChange={handleInput}
              />
            </div>

            {/* Other Details Section */}
            <h4>Other Details</h4>
            <div className="form-group">
              <label htmlFor="billingAddress">Billing Address</label>
              <input
                type="text"
                name="billingAddress"
                placeholder="Enter billing address"
                className="form-control"
                value={formData.billingAddress}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="geolocation">Geolocation</label>
              <input
                type="text"
                name="geolocation"
                placeholder="Enter geolocation"
                className="form-control"
                value={formData.geolocation}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gstin">GSTIN</label>
              <input
                type="text"
                name="gstin"
                placeholder="Enter GSTIN"
                className="form-control"
                value={formData.gstin}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="openingBalance">Opening Balance</label>
              <input
                type="number"
                name="openingBalance"
                placeholder="Enter opening balance"
                className="form-control"
                value={formData.openingBalance}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="creditPeriod">Credit Period</label>
              <input
                type="text"
                name="creditPeriod"
                placeholder="Enter credit period"
                className="form-control"
                value={formData.creditPeriod}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="creditLimit">Credit Limit</label>
              <input
                type="text"
                name="creditLimit"
                placeholder="Enter credit limit"
                className="form-control"
                value={formData.creditLimit}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="stateOfSupply">State of Supply</label>
              <input
                type="text"
                name="stateOfSupply"
                placeholder="Enter state of supply"
                className="form-control"
                value={formData.stateOfSupply}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="creditBillLimit">Credit Bill Limit</label>
              <input
                type="text"
                name="creditBillLimit"
                placeholder="Enter credit bill limit"
                className="form-control"
                value={formData.creditBillLimit}
                onChange={handleInput}
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
          <div className="no-data img-nodata" style={{ textAlign: 'center', marginTop: '20px' }}>
            <img src="../../assets/img/nodata.svg" alt="No data available" style={{ width: '200px', marginTop: '20px' }} />
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
                  <th>phoneNo</th>
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
                    <td>{customer.phoneNo}</td>
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