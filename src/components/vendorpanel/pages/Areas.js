



import React, { useState } from 'react';
import { FaPlus, FaTimes, FaEdit, FaTrash } from 'react-icons/fa';

const Areas = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [areas, setareas] = useState([]);
  const [Name, setName] = useState('');
  const [Region, setRegion] = useState('');
  const [Warehouse, setWarehouse] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const triggerAlert = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setAlertMessage('');
    }, 3000);
  };

  const handleSave = () => {
    if (Name.trim() === '' || Region.trim() === '' || Warehouse.trim() === '') {
      triggerAlert('⚠️ Error: Area Name, Region, and Warehouse are required.');
      return;
    }

    if (editingIndex !== null) {
      const updatedAreas = [...areas];
      updatedAreas[editingIndex] = { name: Name, region: Region, warehouse: Warehouse };
      setareas(updatedAreas);
      triggerAlert('✅ Success: Area updated successfully');
      setEditingIndex(null);
    } else {
      setareas([...areas, { name: Name, region: Region, warehouse: Warehouse }]);
      triggerAlert('✅ Success: Area added successfully');
    }

    setName('');
    setRegion('');
    setWarehouse('');
    setShowDialog(false);
  };

  const handleEdit = (index) => {
    setName(areas[index].name);
    setRegion(areas[index].region);
    setWarehouse(areas[index].warehouse);
    setEditingIndex(index);
    setShowDialog(true);
  };

  const handleDelete = (index) => {
    const updatedareas = areas.filter((_, i) => i !== index);
    setareas(updatedareas);
    triggerAlert('🗑️ Success: Area deleted successfully');
  };

  return (
    <div>
      <div className="WarehousesNav spaceB">
        <h3>Areas</h3>
        <div className="WarehousesNavButtons">
          <button 
            className={`btn btn-primary ${showDialog ? 'active' : ''}`} 
            onClick={() => setShowDialog(true)}
          >
            <FaPlus style={{ marginRight: '5px' }} /> New
          </button>
        </div>
      </div>
      <div className="WarehousesNav">
        <input type="text" placeholder="Search" />
        <input type="text" placeholder="Select Region" />
        <input type="text" placeholder="Select Warehouse" />
      </div>

      {showAlert && <div className="alert-box">{alertMessage}</div>}

      {areas.length === 0 ? (
        <div className="no-data img-nodata">
          <img src="../../assets/img/nodata.svg" alt="No data available" />
          <p>Sorry! No areas found.</p>
        </div>
      ) : (
        <div className="table-container">
          <table className="areas-table">
            <thead>
              <tr>
                <th className="left-align">Region</th>
                <th className="left-align">Name</th>
                <th className="left-align">Warehouse</th>
                <th className="right-align">Actions</th>
              </tr>
            </thead>
            <tbody>
              {areas.map((area, index) => (
                <tr key={index}>
                  <td className="left-align">{area.region}</td>
                  <td className="left-align">{area.name}</td>
                  <td className="left-align">{area.warehouse}</td>
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

      {showDialog && (
        <div className="modal-overlay" onClick={() => setShowDialog(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowDialog(false)}>
              <FaTimes />
            </button>
            <h2>{editingIndex !== null ? 'Edit Area' : 'Add New Area'}</h2>
            <input
              type="text"
              placeholder="Region"
              className="modal-input"
              value={Region}
              onChange={(e) => setRegion(e.target.value)}
            />
            <input
              type="text"
              placeholder="Name"
              className="modal-input"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Warehouse"
              className="modal-input"
              value={Warehouse}
              onChange={(e) => setWarehouse(e.target.value)}
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

      <style>
        {`
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
            width: 90%;
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
          .btn {
            padding: 10px 15px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
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
  margin-top: 20px; /* Optional: Add some margin from the top */
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
          .areas-table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            border-radius: 8px;
            overflow: hidden;
          }
          .areas-table th, .areas-table td {
            padding: 12px;
            border-bottom: 1px solid #ddd;
          }
          .areas-table th {
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
            // margin-top: 10px;
            font-size: 18px;
            color: #666;
          }
          @media (max-width: 768px) {
            .search-filters {
              flex-direction: column;
            }
            .modal-content {
              width: 95%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Areas;