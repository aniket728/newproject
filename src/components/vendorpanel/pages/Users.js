import React, { useState } from 'react';


const Users = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: 'Admin',
  });
  const [users, setUsers] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setUsers([...users, formData]);
      setFormData({ name: '', email: '', userType: 'Admin' }); // Reset form
      setIsSidebarOpen(false); // Close sidebar after submission
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <section className="user-section">
      <header className="user-section__header">
        <h3 className="user-section__title">Users</h3>
        <nav className="user-section__nav">
          <button className="user-section__nav-button" aria-label="Settings">
            <i className="fa-solid fa-gear fa-lg"></i>
          </button>
          <button
            className="user-section__nav-button user-section__nav-button--primary"
            onClick={() => setIsSidebarOpen(true)} // Open sidebar on button click
          >
            + New
          </button>
        </nav>
      </header>
      <div className="user-section__filters">
        <div className="user-section__search">
          <input
            type="text"
            placeholder="Search"
            className="user-section__search-input"
            aria-label="Search users"
          />
          <select
            className="user-section__filter-select"
            aria-label="Filter by user type"
          >
            <option>Select User type</option>
            <option>Admin</option>
            <option>Sales Executive</option>
          </select>
        </div>
      </div>

      {/* Table to display users */}
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>User Type</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.userType}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Sidebar for adding new user */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <h3>Add New User</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="userType">User Type</label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleInputChange}
              >
                <option value="Admin">Admin</option>
                <option value="Sales Executive">Sales Executive</option>
              </select>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={() => setIsSidebarOpen(false)} // Close sidebar on cancel
            >
              Cancel
            </button>
          </form>
        </div>
      </div>

      {/* Overlay for sidebar */}
      {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)} // Close sidebar on overlay click
        />
      )}
    </section>
  );
};

export default Users;