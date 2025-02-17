import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { api_url } from '../../../helpers/api_helper';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [uploadedDocument, setUploadedDocument] = useState(null);

  const navigate = useNavigate();

  const [name, setName] = useState('');
  // const [clientType, setClientType] = useState('');
  // const [contactPersonName, setContactPersonName] = useState('');
  const [mail, setMail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [designation, setDesignation] = useState('');
  const [reportingTo, setReportingTo] = useState('');
  const [timeZone, setTimeZone] = useState('');
  // const [currency, setCurrency] = useState('');
  // const [latLongPosition, setLatLongPosition] = useState(null);
  // const [assignedSalesmanId, setAssignedSalesmanId] = useState(null);
  // const [city, setCity] = useState('');
  // const [state, setState] = useState('');
  // const [country, setCountry] = useState('');
  // const [pinCode, setPinCode] = useState('');

  const storeUserData = async () => {
    try {
      const response = await fetch(`${api_url}/api/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          role,
          password,
          mail,
          phoneNo,
          confirmPassword,
          designation,
          timeZone,
          reportingTo,currency,
          
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
        // Add the new user to the users state
        const newUser = {
          name,
          role,
          password,
          mail,
          phoneNo,
          confirmPassword,
          designation,
          timeZone,
          reportingTo,
          
        };

        // Update the users state with the new user
        setUsers([...users, newUser]);

        // Show success message
        alert(result.message || 'User created successfully.');

        // Close the dialog
        toggleDialog();

        // Navigate to the user page (if needed)
        navigate('/dashboard/user');
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
      // Reset form fields when opening the dialog
      setName('');
      setRole('');
      setDesignation('');
      setMail('');
      setPhoneNo('');
      setReportingTo('');
     setTimeZone('');
      setCurrency('');
      setPassword('');
      setConfirmPassword('');
     
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
    const newUser = {
      uploadDocument: uploadedDocument,
    };

    if (editingIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = newUser;
      setUsers(updatedUsers);
      triggerAlert('✅ Success: User updated successfully');
    } else {
      setUsers([...users, newUser]);
      triggerAlert('✅ Success: User added successfully');
    }

    toggleDialog();
  };

  const handleEdit = (index) => {
    const user = users[index];

    setName(user.name);
    setRole(user.role);
    setDesignation(user.disignation);
    setMail(user.mail);
    setPhoneNo(user.phoneNo);
    setReportingTo(user.reportingTo);
   setTimeZone(user.timeZone);
    setCurrency(user.currency);
    setPassword(user.password);
    setConfirmPassword(user.confirmPassword);
    setUploadedDocument(user.uploadDocument);
    setEditingIndex(index);
    setIsDialogOpen(true);
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    triggerAlert('🗑️ Success: User deleted successfully');
  };

  return (
    <>
      <div className="WarehousesNav spaceB">
        <h3>User</h3>
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
        <input type="text" placeholder="Search" />
      </div>

      {/* Dialog Box */}
      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <div className="dialog-header">
              <h3>{editingIndex !== null ? 'Edit User' : 'New User'}</h3>
              <button className="close-btn" onClick={toggleDialog}>
                &times;
              </button>
            </div>
            <div className="dialog-body">
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="Name">Name</label>
                    <input
                      type="text"
                      name="Name"
                      id="Name"
                      placeholder="Enter Name"
                      className="form-control"
                      onChange={(e) => setName(e.target.value)}
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
                    <label htmlFor="Password">Password</label>
                    <input
                      type="text"
                      name="Password"
                      id="Password"
                      placeholder="Enter Password"
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ConfirmPassword">Confirm Password</label>
                    <input
                      type="text"
                      name="ConfirmPassword"
                      id="ConfirmPassword"
                      placeholder="Enter Confirm Password"
                      className="form-control"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="Designation">Designation</label>
                    <input
                      type="text"
                      name="Designation"
                      id="Designation"
                      placeholder="Enter Designation"
                      className="form-control"
                      onChange={(e) => setDesignation(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="PhoneNo">Mobile</label>
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
                    <label htmlFor="ReoprtingTo">Reporting To
                    </label>
                    <input
                      type="text"
                      name="ReoprtingTo"
                      id="ReoprtingTo"
                      placeholder="Enter Reoprting "
                      className="form-control"
                      onChange={(e) => setReoprtingTo(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="TimeZone">TimeZone
                    </label>
                    <input
                      type="text"
                      name="TimeZone"
                      id="TimeZone"
                      placeholder="Enter route"
                      className="form-control"
                      onChange={(e) => setTimeZone(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="Currency">Currency</label>
                    <input
                      type="text"
                      name="Currency"
                      id="Currency"
                      placeholder="Enter email"
                      className="form-control"
                      onChange={(e) => setCurrency(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Country">Country</label>
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
              <button className="btn btn-primary" type="submit" id="submitBtn" onClick={storeUserData}>
                {editingIndex !== null ? 'Update' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Overlay when dialog is open */}
      {isDialogOpen && <div className="overlay" onClick={toggleDialog}></div>}

      {/* Table to display users */}
      <div className="user-table">
        {users.length === 0 ? (
          <div className="no-data img-nodata" style={{ textAlign: 'center', marginTop: '20px' }}>
            <img src="../../assets/img/nodata.svg" alt="No data available" style={{ width: '200px', marginTop: '20px' }} />
            <p>Sorry! No users found.</p>
          </div>
        ) : (
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
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.businessName}</td>
                    <td>{user.gstNo}</td>
                    <td>{user.phoneNo}</td>
                    <td>{user.address}</td>
                    <td>{user.mail}</td>
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

export default User;