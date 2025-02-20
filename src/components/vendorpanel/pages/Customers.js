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
      const response = await fetch(`${api_url}/api/customer`, {
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

        setCustomers([...customers, newCustomer]);
        alert(result.message || 'User created successfully.');
        toggleDialog();
        navigate('/dashboard/customers');
      } else {
        alert(result.message || 'Failed to create user.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Please check your network or server.');
    }
  };

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
    if (!isDialogOpen) {
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

      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <div className="dialog-header">
              <h3>{editingIndex !== null ? 'Edit Customer' : 'New Customer'}</h3>
              <button className="close-btn" onClick={toggleDialog}>
                &times;
              </button>
            </div>
            <div className="dialog-body">
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="ContactPersonName">Person Name</label>
                    <input
                      type="text"
                      name="ContactPersonName"
                      id="ContactPersonName"
                      placeholder="Enter contact person"
                      className="form-control"
                      onChange={(e) => setContactPersonName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input
                      type="email"
                      id="Email"
                      name="Email"
                      placeholder="Enter email"
                      className="form-control"
                      onChange={(e) => setMail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="ClientType">Client Type</label>
                    <input
                      type="text"
                      name="ClientType"
                      id="ClientType"
                      placeholder="Enter contact person"
                      className="form-control"
                      onChange={(e) => setClientType(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="BuisnessName">Business Name</label>
                    <input
                      type="text"
                      name="BuisnessName"
                      id="BuisnessName"
                      placeholder="Enter phone number"
                      className="form-control"
                      onChange={(e) => setBusinessName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="PinCode">Pincode</label>
                    <input
                      type="text"
                      name="PinCode"
                      id="PinCode"
                      placeholder="Enter phone number"
                      className="form-control"
                      onChange={(e) => setPinCode(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="PhoneNo">Phone No</label>
                    <input
                      type="number"
                      name="PhoneNo"
                      id="PhoneNo"
                      placeholder="Enter route"
                      className="form-control"
                      onChange={(e) => setPhoneNo(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="Address">Address</label>
                    <input
                      type="text"
                      name="Address"
                      id="Address"
                      placeholder="Enter email"
                      className="form-control"
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="City">City</label>
                    <input
                      type="text"
                      name="City"
                      id="City"
                      placeholder="Enter route"
                      className="form-control"
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="State">State</label>
                    <input
                      type="State"
                      name="State"
                      id="State"
                      placeholder="Enter email"
                      className="form-control"
                      onChange={(e) => setState(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Country">country</label>
                    <input
                      type="text"
                      name="Country"
                      id="Country"
                      placeholder="Enter route"
                      className="form-control"
                      onChange={(e) => setCountry(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="IndustryType">Industry Type</label>
                    <input
                      type="text"
                      name="IndustryType"
                      id="IndustryType"
                      placeholder="Enter billing address"
                      className="form-control"
                      onChange={(e) => setIndustryType(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="BusinessRegistrationNo">Business Registration No</label>
                    <input
                      type="text"
                      name="BusinessRegistrationNo"
                      id="BusinessRegistrationNo"
                      placeholder="Enter geolocation"
                      className="form-control"
                      onChange={(e) => setBusinessRegNo(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="GstNo">Gst No</label>
                    <input
                      type="text"
                      id="GstNo"
                      name="GstNo"
                      placeholder="Enter GSTIN"
                      className="form-control"
                      onChange={(e) => setGstNo(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="AnnualTurnover">Annual Turn-over</label>
                    <input
                      type="number"
                      name="AnnualTurnover"
                      id="AnnualTurnover"
                      placeholder="Enter opening balance"
                      className="form-control"
                      onChange={(e) => setAnnualTurnover(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="LatLongPosition">Lat Long Position</label>
                    <input
                      type="text"
                      name="LatLongPosition"
                      id="LatLongPosition"
                      placeholder="Enter credit period"
                      className="form-control"
                      onChange={(e) => setLatLongPosition(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Note">Note</label>
                    <input
                      type="text"
                      id="Note"
                      name="Note"
                      placeholder="Enter credit limit"
                      className="form-control"
                      onChange={(e) => setNote(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="Remark">Remark</label>
                    <input
                      type="text"
                      name="Remark"
                      id="Remark"
                      placeholder="Enter state of supply"
                      className="form-control"
                      onChange={(e) => setRemark(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="AssignedSalesmanId">Assigned SalesmanId</label>
                    <input
                      type="text"
                      id="AssignedSalesmanId"
                      name="AssignedSalesmanId"
                      placeholder="Enter credit bill limit"
                      className="form-control"
                      onChange={(e) => setAssignedSalesmanId(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="dialog-footer">
              <button className="btn btn-primary" type="submit" id="submitBtn" onClick={storeCustomerData}>
                {editingIndex !== null ? 'Update' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}

      {isDialogOpen && <div className="overlay" onClick={toggleDialog}></div>}

      <div className="customers-table">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Business Name</th>
                <th>GST No</th>
                <th>Phone No</th>
                <th>Address</th>
                <th>Mail</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.length === 0 ? (
                <div className="no-data img-nodata" style={{ textAlign: 'center', marginTop: '20px' }}>
                  <img src="../../assets/img/nodata.svg" alt="No data available" style={{ width: '200px', marginTop: '20px' }} />
                  <p>Sorry! No customers found.</p>
                </div>
              ) : (
                customers && customers.map((customer, index) => (
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
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showAlert && (
        <div className="alert-box pt-3 px-3">
          <p>{alertMessage}</p>
        </div>
      )}
    </>
  );
};

export default Customers;