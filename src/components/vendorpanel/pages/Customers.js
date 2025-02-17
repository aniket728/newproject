import React, { useEffect, useState } from 'react';
import { api_url } from '../../../helpers/api_helper';

const Customers = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    mail: '',
    phoneNo: '',
    address: '',
    city: '',
    state: '',
    contactPersonName: '',
    createdDate: '',
    gstNo: '',
    billingAddress: ''
  });
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  };

  const storeCustomer = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${api_url}/api/customers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result);
      setIsDialogOpen(false);
      getCustomer(); // Refresh the customer list after adding a new customer
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getCustomer = async () => {
    try {
      const response = await fetch(`${api_url}/api/customers`);
      const data = await response.json();
      if (data.status === 201) {
        setCustomers(data.Customer_data || []);
      } else {
        setCustomers(data.result || []);
      }
    } catch (error) {
      console.error('Error fetching customers:', error);
      setCustomers([]);
    }
  };

  useEffect(() => {
    getCustomer();
  }, []);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ccc' }}>
        <h3>Customers</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button style={{ padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            <i className="fa-solid fa-location-dot fa-lg"></i>
          </button>
          <button style={{ padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            <i className="fa-solid fa-gear fa-lg"></i>
          </button>
          <button style={{ padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Export</button>
          <button style={{ padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Import</button>
          <button
            style={{ padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            onClick={() => setIsDialogOpen(true)}
          >
            Add Customers
          </button>
        </div>
      </div>
      <div style={{ padding: '10px' }}>
        <input
          type="text"
          placeholder="Search"
          style={{ padding: '5px', width: '100%', maxWidth: '300px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      {isDialogOpen && (
        <div style={{ position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', width: '90%', maxWidth: '600px', margin: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3>Add Customer</h3>
              <button
                style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                onClick={() => setIsDialogOpen(false)}
              >
                <i className="fa-solid fa-times"></i>
              </button>
            </div>
            <form onSubmit={storeCustomer}>
              <div style={{ marginBottom: '20px' }}>
                <h4>General Details</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      onChange={handleInput}
                      style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Mail</label>
                    <input
                      type="email"
                      name="mail"
                      onChange={handleInput}
                      style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Phone No</label>
                    <input
                      type="text"
                      name="phoneNo"
                      onChange={handleInput}
                      style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Address</label>
                    <input
                      type="text"
                      name="address"
                      onChange={handleInput}
                      style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>City</label>
                    <input
                      type="text"
                      name="city"
                      onChange={handleInput}
                      style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>State</label>
                    <input
                      type="text"
                      name="state"
                      onChange={handleInput}
                      style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
                    />
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <h4>Other Details</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Contact Person Name</label>
                    <input
                      type="text"
                      name="contactPersonName"
                      onChange={handleInput}
                      style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Created Date</label>
                    <input
                      type="date"
                      name="createdDate"
                      onChange={handleInput}
                      style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>GST No</label>
                    <input
                      type="text"
                      name="gstNo"
                      onChange={handleInput}
                      style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Billing Address</label>
                    <input
                      type="text"
                      name="billingAddress"
                      onChange={handleInput}
                      style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
                    />
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button
                  type="button"
                  style={{ padding: '5px 10px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{ padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div style={{ overflowX: 'auto' }}>
        <table className="table table-bordered mt-3" style={{ minWidth: '600px' }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Business Name</th>
              <th>Gst No</th>
              <th>Phone No</th>
              <th>Address</th>
              <th>Mail</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers && customers.map((customer, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{customer.businessName}</td>
                <td>{customer.gstNo}</td>
                <td>{customer.phoneNo}</td>
                <td>{customer.address}</td>
                <td>{customer.mail}</td>
                <td>
                  <button 
                    style={{ padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                  >
                    Edit
                  </button>
                  <button style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Customers;