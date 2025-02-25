import React from 'react';

const Visited = () => {
  return (
    <>
      {/* Header Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          padding: '10px',
        }}
      >
        <h3>Warehouses</h3>
        <div>
          <button
            style={{
              padding: '8px 12px',
              fontSize: '16px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            <i className="fa-solid fa-gear fa-lg"></i>
          </button>
        </div>
      </div>

      {/* Filters Section */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          padding: '10px',
          backgroundColor: '#f5f5f5',
          justifyContent: 'space-between',
        }}
      >
        {/* Start Date Filter */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: '1 1 200px' }}>
          <label style={{ fontWeight: 'bold' }} htmlFor="startDate">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            style={{
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '100%',
            }}
          />
        </div>

        {/* End Date Filter */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: '1 1 200px' }}>
          <label style={{ fontWeight: 'bold' }} htmlFor="endDate">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            style={{
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '100%',
            }}
          />
        </div>

        {/* User Filter */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: '1 1 200px' }}>
          <label style={{ fontWeight: 'bold' }} htmlFor="user">
            Select User
          </label>
          <select
            id="user"
            name="user"
            style={{
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '100%',
            }}
          >
            <option value="">Select User</option>
            <option value="user1">User 1</option>
            <option value="user2">User 2</option>
          </select>
        </div>

        {/* Status Filter */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: '1 1 200px' }}>
          <label style={{ fontWeight: 'bold' }} htmlFor="status">
            Select Status
          </label>
          <select
            id="status"
            name="status"
            style={{
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '100%',
            }}
          >
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Visited;