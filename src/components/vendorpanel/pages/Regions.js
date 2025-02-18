import React, { useState } from 'react';
import { FaPlus, FaTimes, FaEdit, FaTrash } from 'react-icons/fa';

const Regions = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [regions, setRegions] = useState([]);
  const [regionName, setRegionName] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  // Show alert message for 3 seconds
  const triggerAlert = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  // Save a new region or update an existing one
  const handleSave = () => {
    if (regionName.trim() === '') {
      triggerAlert('⚠️ Error: Region name is required.');
      return;
    }

    if (editingIndex !== null) {
      const updatedRegions = [...regions];
      updatedRegions[editingIndex] = regionName;
      setRegions(updatedRegions);
      triggerAlert('✅ Success: Region updated successfully');
      setEditingIndex(null);
    } else {
      setRegions([...regions, regionName]);
      triggerAlert('✅ Success: Region created successfully');
    }

    setRegionName('');
    setShowDialog(false);
  };

  const handleEdit = (index) => {
    setRegionName(regions[index]);
    setEditingIndex(index);
    setShowDialog(true);
  };

  const handleDelete = (index) => {
    setRegions(regions.filter((_, i) => i !== index));
    triggerAlert('🗑️ Region deleted successfully');
  };

  return (
    <div>
      {/* Header Section with "New" Button on the Right */}
      <div className="WarehousesNav spaceB">
        <h3>Regions</h3>
        <div className="WarehousesNavButtons mx-2">
          <button className={`btn btn-primary ${showDialog ? 'active' : ''}`} onClick={() => setShowDialog(true)}>
            <FaPlus style={{ marginRight: '5px' }} /> New
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="WarehousesNav">
        <input className='px-2 py-2' type="text" placeholder="Search" />
      </div>

      {/* Success Alert Message */}
      {showAlert && <div className="alert-box">{alertMessage}</div>}

      {/* Show Image When No Data is Available */}
      {regions.length === 0 ? (
        <div className="no-data">
          <img src="../../assets/img/nodata.svg" alt="No data available" />
          <p>Sorry! No regions found.</p>
        </div>
      ) : (
        <div className="table-container">
          <table className="regions-table">
            <thead>
              <tr>
                <th className="left-align">Name</th>
                <th className="right-align">Actions</th>
              </tr>
            </thead>
            <tbody>
              {regions.map((region, index) => (
                <tr key={index}>
                  <td className="left-align">{region}</td>
                  <td className="right-align">
                    <button className="btn-edit mb-2" onClick={() => handleEdit(index)}>
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

      {/* Dialog Box */}
      {showDialog && (
        <div className="modal-overlay" onClick={() => setShowDialog(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowDialog(false)}>
              <FaTimes />
            </button>
            <h2>{editingIndex !== null ? 'Edit Region' : 'Add New Region'}</h2>
            <input
              type="text"
              placeholder="Region Name"
              className="modal-input"
              value={regionName}
              onChange={(e) => setRegionName(e.target.value)}
            />
            <div className="modal-actions">
              <button className="btn btn-secondary" onClick={() => setShowDialog(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleSave}>
                {editingIndex !== null ? 'Update' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style>
        {`
          .WarehousesNav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            background: #f8f9fa;
            // border-bottom: 1px solid #ddd;
          }
          .WarehousesNavButtons {
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }
          .btn {
            padding: 10px 15px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            display: flex;
            align-items: center;
          }
          .btn-primary {
            background: #007bff;
            color: white;
          }
          .btn-primary.active {
            background: #0056b3; /* Darker shade for active state */
          }
          .btn-secondary {
            background: #6c757d;
            color: white;
          }
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }
          .modal-content {
            width: 40%;
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
            animation: fadeIn 0.3s ease-in-out;
            position: relative;
            text-align: center;
          }
          .modal-input {
            // width: 90%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 6px;
          }
          .modal-actions {
            display: flex;
            justify-content: space-between;
            margin-top: 15px;
          }
          .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: transparent;
            border: none;
            font-size: 18px;
            cursor: pointer;
          }
          .alert-box {
            position: fixed;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            background: #28a745;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            font-size: 14px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            animation: fadeInOut 3s ease-in-out;
            z-index: 1000;
            margin-top: 20px;
          }
          @keyframes fadeInOut {
            0% { opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; }
          }
          .table-container {
            margin-top: 20px;
            padding: 10px;
          }
          .regions-table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            border-radius: 8px;
            overflow: hidden;
          }
          .regions-table th, .regions-table td {
            padding: 12px;
            border-bottom: 1px solid #ddd;
          }
          .regions-table th {
            background: #007bff;
            color: white;
          }
          .left-align {
            text-align: left;
            padding-left: 15px;
          }
          .right-align {
            text-align: right;
            padding-right: 15px;
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
          @media (max-width: 768px) {
            .WarehousesNav {
              flex-direction: column;
              align-items: flex-start;
            }
            .WarehousesNavButtons {
              width: 100%;
              justify-content: flex-end;
              margin-top: 10px;
            }
            .modal-content {
              width: 90%;
            }
            .regions-table th, .regions-table td {
              padding: 8px;
            }
            .btn-edit, .btn-delete {
              padding: 4px 8px;
              font-size: 12px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Regions;