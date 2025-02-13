import React, { useState } from 'react';
import { FaPlus, FaTimes, FaEdit, FaTrash, FaUpload } from 'react-icons/fa';
import { api_url } from '../../../helpers/api_helper';

const Customers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      // Reset form fields when opening the modal
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

      toggleModal();
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
    setIsModalOpen(true);
  };

  const handleDelete = (index) => {
    const updatedCustomers = customers.filter((_, i) => i !== index);
    setCustomers(updatedCustomers);
    triggerAlert('🗑️ Success: Customer deleted successfully');
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
          <button className="btn btn-primary" onClick={toggleModal}>
            <FaPlus style={{ marginRight: '5px' }} /> New
          </button>
        </div>
      </div>
      <div className="WarehousesNav">
        <input type="text" placeholder="Search" />
      </div>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '8px', width: '800px', maxWidth: '90%', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>{editingIndex !== null ? 'Edit Customer' : 'New Customer'}</h3>
              <button style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }} onClick={toggleModal}>
                <FaTimes />
              </button>
            </div>
            <div style={{ maxHeight: '70vh', overflowY: 'auto' }}>
              <form>
                {/* General Details Section */}
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>General Details</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: '500' }}>Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      placeholder="Enter business name"
                      style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                      value={formData.businessName}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: '500' }}>Code</label>
                    <input
                      type="text"
                      name="code"
                      placeholder="Enter code"
                      style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                      value={formData.code}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: '500' }}>Contact Person</label>
                    <input
                      type="text"
                      name="contactPerson"
                      placeholder="Enter contact person"
                      style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                      value={formData.contactPerson}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: '500' }}>Phone Number</label>
                    <input
                      type="text"
                      name="phoneNo"
                      placeholder="Enter phone number"
                      style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                      value={formData.phoneNo}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: '500' }}>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                      value={formData.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: '500' }}>Route</label>
                    <input
                      type="text"
                      name="route"
                      placeholder="Enter route"
                      style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                      value={formData.route}
                      onChange={handleInput}
                    />
                  </div>
                </div>

                {/* Other Details Section */}
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>Other Details</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: '500' }}>Billing Address</label>
                    <input
                      type="text"
                      name="billingAddress"
                      placeholder="Enter billing address"
                      style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                      value={formData.billingAddress}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: '500' }}>Geolocation</label>
                    <input
                      type="text"
                      name="geolocation"
                      placeholder="Enter geolocation"
                      style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                      value={formData.geolocation}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: '500' }}>GSTIN</label>
                    <input
                      type="text"
                      name="gstin"
                      placeholder="Enter GSTIN"
                      style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                      value={formData.gstin}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: '500' }}>Opening Balance</label>
                    <input
                      type="number"
                      name="openingBalance"
                      placeholder="Enter opening balance"
                      style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                      value={formData.openingBalance}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: '500' }}>Credit Period</label>
                    <input
                      type="text"
                      name="creditPeriod"
                      placeholder="Enter credit period"
                      style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                      value={formData.creditPeriod}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: '500' }}>Credit Limit</label>
                    <input
                      type="text"
                      name="creditLimit"
                      placeholder="Enter credit limit"
                      style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                      value={formData.creditLimit}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: '500' }}>State of Supply</label>
                    <input
                      type="text"
                      name="stateOfSupply"
                      placeholder="Enter state of supply"
                      style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                      value={formData.stateOfSupply}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: '500' }}>Credit Bill Limit</label>
                    <input
                      type="text"
                      name="creditBillLimit"
                      placeholder="Enter credit bill limit"
                      style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                      value={formData.creditBillLimit}
                      onChange={handleInput}
                    />
                  </div>
                </div>

                {/* Upload Document Section */}
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>Upload Document</h4>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: '500' }}>Upload Document</label>
                  <input
                    type="file"
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    onChange={handleFileUpload}
                  />
                </div>
              </form>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
              <button style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }} onClick={handleSave}>
                {editingIndex !== null ? 'Update' : 'Save'}
              </button>
              <button style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={toggleModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

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
                  <th>Phone Number</th>
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