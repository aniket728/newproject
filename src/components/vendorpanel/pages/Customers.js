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

      {/* Dialog Box */}
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
                    // value={formData.contactPerson}
                    // onChange={handleInput}
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
                    // value={formData.email}
                    // onChange={handleInput}
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
                    // value={formData.contactPerson}
                    // onChange={handleInput}
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
                    // value={formData.phoneNo}
                    // onChange={handleInput}
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
                    // value={formData.phoneNo}
                    // onChange={handleInput}
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
                    // value={formData.route}
                    // onChange={handleInput}
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
                    // value={formData.email}
                    // onChange={handleInput}
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
                    // value={formData.route}
                    // onChange={handleInput}
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
                    // value={formData.email}
                    // onChange={handleInput}
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
                    // value={formData.route}
                    // onChange={handleInput}
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
                    // value={formData.billingAddress}
                    // onChange={handleInput}
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
                    // value={formData.geolocation}
                    // onChange={handleInput}
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
                    // value={formData.gstin}
                    // onChange={handleInput}
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
                    // value={formData.openingBalance}
                    // onChange={handleInput}
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
                    // value={formData.creditPeriod}
                    // onChange={handleInput}
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
                    // value={formData.creditLimit}
                    // onChange={handleInput}
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
                    // value={formData.stateOfSupply}
                    // onChange={handleInput}
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
                    // value={formData.creditBillLimit}
                    // onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="uploadDocument">Upload Document</label>
                    <input
                      type="file"
                      id="uploadDocument"
                      className="form-control"
                      onChange={handleFileUpload}
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

      {/* Overlay when dialog is open */}
      {isDialogOpen && <div className="overlay" onClick={toggleDialog}></div>}

      {/* Table to display customers */}

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
        <style>
          {`
 
 /* Dialog Box Styles */
 .dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.dialog-box {
  background-color: white;
  padding: 25px; /* Increased padding for better spacing */
  border-radius: 12px; /* Slightly larger border radius */
  width: 600px;
  max-width: 90%;
  max-height: 80vh; /* Limit the height to 80% of the viewport height */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Enhanced shadow for depth */
  display: flex;
  flex-direction: column;
  margin: 20px 0; /* Add top and bottom margin */
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px; /* Added padding below the header */
  border-bottom: 1px solid #e0e0e0; /* Subtle border to separate header */
}

.dialog-header h3 {
  margin: 0;
  font-size: 1.5rem; /* Larger font size for the header */
  color: #333; /* Darker text for better readability */
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666; /* Subtle color for the close button */
  transition: color 0.2s ease; /* Smooth color transition on hover */
}

.close-btn:hover {
  color: #333; /* Darker color on hover */
}

.dialog-body {
  flex: 1;
  overflow-y: auto; /* Add scrollbar when content overflows */
  margin-bottom: 20px;
  padding: 10px 20px; /* Added left and right padding */
}

/* Custom Scrollbar Styling */
.dialog-body::-webkit-scrollbar {
  width: 8px; /* Width of the scrollbar */
}

.dialog-body::-webkit-scrollbar-track {
  background: #f1f1f1; /* Color of the track */
  border-radius: 4px; /* Rounded corners for the track */
}

.dialog-body::-webkit-scrollbar-thumb {
  background: #888; /* Color of the scrollbar thumb */
  border-radius: 4px; /* Rounded corners for the thumb */
}

.dialog-body::-webkit-scrollbar-thumb:hover {
  background: #555; /* Darker color on hover */
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 15px; /* Added padding above the footer */
  border-top: 1px solid #e0e0e0; /* Subtle border to separate footer */
}

/* Two-Column Layout */
.form-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px; /* Increased margin for better spacing */
}

.form-group {
  flex: 1;
}

.form-group label {
  display: block;
  margin-bottom: 8px; /* Slightly larger margin for labels */
  font-size: 0.9rem; /* Adjusted font size for labels */
  color: #555; /* Subtle color for labels */
}
.WarehousesNavButtons {
display: flex;
gap: 7px;
}
.WarehousesNavButtons button {
padding: 0.5rem 1rem;
border: 1px solid #ced4da;
border-radius: 5px;
font-family: 'Poppins', sans-serif;
background-color: #ffffff;
cursor: pointer;
color: #007bff;
}
.spaceB{
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.5rem 1rem;
// background-color: #ffffff;
font-family: 'Poppins', sans-serif;
margin-bottom: 7px;
}

.WarehousesNav {
display: flex;
gap: 15px;
align-items: center;
padding: 0.5rem 1rem;
// background-color: #ffffff;
font-family: 'Poppins', sans-serif;
margin-bottom: 7px;
}
.form-group input {
  width: 100%;
  padding: 10px; /* Increased padding for inputs */
  border: 1px solid #ccc;
  border-radius: 6px; /* Slightly larger border radius for inputs */
  font-size: 0.9rem; /* Adjusted font size for inputs */
  transition: border-color 0.2s ease; /* Smooth border transition */
}

.form-group input:focus {
  border-color: #007bff; /* Highlight border on focus */
  outline: none; /* Remove default outline */
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3); /* Subtle shadow on focus */
}

/* Button Styles */
.btn {
  padding: 10px 20px; /* Increased padding for buttons */
  border: none;
  border-radius: 6px; /* Slightly larger border radius for buttons */
  font-size: 0.9rem; /* Adjusted font size for buttons */
  cursor: pointer;
  transition: background-color 0.2s ease; /* Smooth background transition */
}

.btn-primary {
  background-color: #007bff; /* Primary button color */
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3; /* Darker color on hover */
}

.btn-secondary {
  background-color: #6c757d; /* Secondary button color */
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268; /* Darker color on hover */
}

  .table-container {
          margin-top: 20px;
          padding: 10px;
        }
        .cities-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 8px;
          overflow: hidden;
        }
        .cities-table th, .cities-table td {
          padding: 12px;
          border-bottom: 1px solid #ddd;
        }
        .cities-table th {
          background: #007bff;
          color: white;
        }
          /* Alert Box Styles */
          .alert-box {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #28a745;
            color: white;
            border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            animation: fadeInOut 3s ease-in-out;
          }

          @keyframes fadeInOut {
            0% { opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; }
          }

          /* Table Styles */
          .customers-table {
            margin-top: 20px;
            padding: 10px;
          }

          .table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .table th, .table td {
            padding: 12px;
            border-bottom: 1px solid #ddd;
          }

          .table th {
            background: #007bff;
            color: white;
            font-weight: bold;
          }

          .table tbody tr:hover {
            background-color: #f1f1f1;
            transition: background-color 0.2s ease;
          }

          .btn-edit, .btn-delete {
            padding: 5px 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-left: 5px;
          }

          .btn-edit {
            background: #ffc107;
            color: black;
          }

          .btn-delete {
            background: #dc3545;
            color: white;
          }

          .no-data {
            text-align: center;
            margin-top: 20px;
          }

          .no-data img {
            width: 200px;
            margin-top: 20px;
          }

          .no-data p {
            font-size: 18px;
            color: #666;
          }
`}
        </style>
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

