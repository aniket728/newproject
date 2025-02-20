import React, { useEffect, useState } from 'react';
import { FaPlus, FaTimes, FaEdit, FaTrash, FaUpload } from 'react-icons/fa';
import { api_url } from '../../../helpers/api_helper';
import { useNavigate } from 'react-router-dom';


const Customers = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [uploadedDocument, setUploadedDocument] = useState(null);

  const navigate = useNavigate();

  const [businessName, setBusinessName] = useState('');
  const [clientType, setClientType] = useState('');
  const [contactPersonName, setContactPersonName] = useState('');
  const [mail, setMail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [address, setAddress] = useState('');
  const [industryType, setIndustryType] = useState('');
  const [gstNo, setGstNo] = useState('');
  const [businessRegNo, setBusinessRegNo] = useState('');
  const [annualTurnover, setAnnualTurnover] = useState('');
  const [note, setNote] = useState('');
  const [remark, setRemark] = useState('');
  const [latLongPosition, setLatLongPosition] = useState(null);
  const [assignedSalesmanId, setAssignedSalesmanId] = useState(null);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pinCode, setPinCode] = useState('');

  const storeCustomerData = async () => {
    try {
      const response = await fetch(`${api_url}/api/customers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          businessName,
          clientType,
          contactPersonName,
          mail,
          phoneNo,
          remark,
          latLongPosition,
          assignedSalesmanId,
          city,
          state,
          country,
          pinCode,
          address,
          businessRegNo,
          industryType,
          gstNo,
          annualTurnover,
          note,
        }),
      });

      let result;
      try {
        result = await response.json();
      } catch (jsonError) {
        console.error('Invalid JSON response', jsonError);
        alert('Invalid response from server.');
        return;
      }

      console.log('Response Data:', result);

      if (response.ok) {
        // Add the new customer to the customers state
        const newCustomer = {
          businessName,
          clientType,
          contactPersonName,
          mail,
          phoneNo,
          remark,
          latLongPosition,
          assignedSalesmanId,
          city,
          state,
          country,
          pinCode,
          address,
          businessRegNo,
          industryType,
          gstNo,
          annualTurnover,
          note,
        };

        // Update the customers state with the new customer
        setCustomers([...customers, newCustomer]);

        // Show success message
        alert(result.message || 'User created successfully.');

        // Close the dialog
        toggleDialog();

        // Navigate to the customers page (if needed)
        navigate('/dashboard/customers');
      } else {
        alert(result.message || 'Failed to create user.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Please check your network or server.');
    }
  };


  // const getCustomerData = async () => {
  //   let id = localStorage.getItem('vendorId');
  //   try {
  //     const response = await fetch(`${api_url}/api/customers/${id}`);
  //     const result = await response.json();
  //     console.log(result);

  //   } catch {
  //     (e) => console.log(e);
  //   }
  // }

  // useEffect(() => {
  //   getCustomerData()
  // }, [])

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
    if (!isDialogOpen) {
      // Reset form fields when opening the dialog
      setBusinessName('');
      setClientType('');
      setContactPersonName('');
      setMail('');
      setPhoneNo('');
      setAddress('');
      setIndustryType('');
      setGstNo('');
      setBusinessRegNo('');
      setAnnualTurnover('');
      setNote('');
      setRemark('');
      setLatLongPosition(null);
      setAssignedSalesmanId(null);
      setCity('');
      setState('');
      setCountry('');
      setPinCode('');
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

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedDocument(file);
    }
  };

  const handleSave = async () => {
    const newCustomer = {
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

    toggleDialog();
  };

  const handleEdit = (index) => {
    const customer = customers[index];
    setBusinessName(customer.businessName);
    setClientType(customer.clientType);
    setContactPersonName(customer.contactPersonName);
    setMail(customer.mail);
    setPhoneNo(customer.phoneNo);
    setAddress(customer.address);
    setIndustryType(customer.industryType);
    setGstNo(customer.gstNo);
    setBusinessRegNo(customer.businessRegNo);
    setAnnualTurnover(customer.annualTurnover);
    setNote(customer.note);
    setRemark(customer.remark);
    setLatLongPosition(customer.latLongPosition);
    setAssignedSalesmanId(customer.assignedSalesmanId);
    setCity(customer.city);
    setState(customer.state);
    setCountry(customer.country);
    setPinCode(customer.pinCode);
    setUploadedDocument(customer.uploadDocument);
    setEditingIndex(index);
    setIsDialogOpen(true);
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
          <button className="btn btn-primary" onClick={toggleDialog}>
            <FaPlus style={{ marginRight: '5px' }} /> New
          </button>
        </div>
      </div>
      <div className="WarehousesNav">
        <input type="text" className='px-2 mx-2 py-2' placeholder="Search" />
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

      {/* Overlay when dialog is open */}
      {isDialogOpen && <div className="overlay" onClick={toggleDialog}></div>}

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
                    <td>{index + 1}</td>
                    <td>{customer.businessName}</td>
                    <td>{customer.gstNo}</td>
                    <td>{customer.phoneNo}</td>
                    <td>{customer.address}</td>
                    <td>{customer.mail}</td>
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
        <div className="alert-box pt-3 px-3">
          <p>{alertMessage}</p>
        </div>
      )}
    </>
  );
};

export default Customers;

