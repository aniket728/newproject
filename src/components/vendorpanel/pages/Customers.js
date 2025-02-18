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


      {/* Overlay when sidebar is open */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      {/* Table to display customers */}
      <div className="customers-table">
          <div className="table-responsive">
            <table className="table  ">
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