import React, { useState } from 'react';
import { FaPlus, FaTimes, FaEdit, FaTrash } from 'react-icons/fa';

const Regions = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [regions, setRegions] = useState([]);
  const [regionName, setRegionName] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const triggerAlert = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

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
    <div style={{ padding: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#f8f9fa' }}>
        <h3>Regions</h3>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <button style={{ padding: '10px 15px', border: 'none', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', background: '#007bff', color: 'white' }} onClick={() => setShowDialog(true)}>
            <FaPlus style={{ marginRight: '5px' }} /> New
          </button>
        </div>
      </div>

      <div style={{ padding: '10px' }}>
        <input style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }} type="text" placeholder="Search" />
      </div>

      {showAlert && <div style={{ position: 'fixed', top: '0', left: '50%', transform: 'translateX(-50%)', background: '#28a745', color: 'white', padding: '10px 15px', borderRadius: '5px', fontSize: '14px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', zIndex: '1000', marginTop: '20px' }}>{alertMessage}</div>}

      {regions.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <img src="../../assets/img/nodata.svg" alt="No data available" style={{ width: '200px', marginTop: '20px' }} />
          <p style={{ fontSize: '18px', color: '#666' }}>Sorry! No regions found.</p>
        </div>
      ) : (
        <div style={{ marginTop: '20px', padding: '10px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '8px', overflow: 'hidden' }}>
            <thead>
              <tr>
                <th style={{ padding: '12px', borderBottom: '1px solid #ddd', background: '#007bff', color: 'white', textAlign: 'left', paddingLeft: '15px' }}>Name</th>
                <th style={{ padding: '12px', borderBottom: '1px solid #ddd', background: '#007bff', color: 'white', textAlign: 'right', paddingRight: '15px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {regions.map((region, index) => (
                <tr key={index}>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'left', paddingLeft: '15px' }}>{region}</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'right', paddingRight: '15px' }}>
                    <button style={{ padding: '5px 10px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '5px', background: '#ffc107', color: 'black' }} onClick={() => handleEdit(index)}>
                      <FaEdit /> Edit
                    </button>
                    <button style={{ padding: '5px 10px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '5px', background: '#dc3545', color: 'white' }} onClick={() => handleDelete(index)}>
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
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '1000' }} onClick={() => setShowDialog(false)}>
          <div style={{ width: '90%', maxWidth: '400px', background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.2)', position: 'relative', textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
            <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none', fontSize: '18px', cursor: 'pointer' }} onClick={() => setShowDialog(false)}>
              <FaTimes />
            </button>
            <h2>{editingIndex !== null ? 'Edit Region' : 'Add New Region'}</h2>
            <input
              type="text"
              placeholder="Region Name"
              style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '6px' }}
              value={regionName}
              onChange={(e) => setRegionName(e.target.value)}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
              <button style={{ padding: '10px 15px', border: 'none', borderRadius: '6px', cursor: 'pointer', background: '#6c757d', color: 'white' }} onClick={() => setShowDialog(false)}>Cancel</button>
              <button style={{ padding: '10px 15px', border: 'none', borderRadius: '6px', cursor: 'pointer', background: '#007bff', color: 'white' }} onClick={handleSave}>
                {editingIndex !== null ? 'Update' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Regions;