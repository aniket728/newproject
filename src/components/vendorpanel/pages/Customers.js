import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { api_url } from '../../../helpers/api_helper';

const Customers = () => {
  const [show, setShow] = useState(false);
  const [customers, setCustomers] = useState([]); // Initialize as an empty array
  const [contactPersonName, setContactPersonName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [mail, setMail] = useState("");
  const [phoneno, setPhoneNo] = useState("");
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const storeCustomerData = async () => {
    const customerData = {
      contactPersonName,
      businessName,
      mail,
      phoneno,
      
    };

    console.log("Sending customer data:", customerData); // Debugging

    try {
      const response = await fetch(`${api_url}/api/customer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerData),
      });

      if (response.ok) {
        const newCustomer = await response.json();
        console.log("Received response:", newCustomer); // Debugging
        setCustomers([...customers, newCustomer]);
        handleClose();

        // Show success alert
        alert("Customer data saved successfully!");

        // Clear form fields
        setContactPersonName("");
        setBusinessName("");
        setMail("");
        setPhoneNo("");
      } else {
        console.error("Failed to store customer data");
        alert("Failed to save customer data. Please try again.");
      }
    } catch (error) {
      console.error("Error storing customer data:", error);
      alert("An error occurred while saving customer data.");
    }
  };

  useEffect(() => {
    // Fetch customers data from the API
    const fetchCustomers = async () => {
      try {
        const response = await fetch(`${api_url}/api/customer`);
        if (response.ok) {
          const data = await response.json();
          console.log("API Response:", data); // Debugging

          // Ensure data is an array before setting it
          if (Array.isArray(data)) {
            setCustomers(data);
          } else {
            console.error("API response is not an array:", data);
            setCustomers([]); // Set to empty array if response is not an array
          }
        } else {
          console.error("Failed to fetch customers");
          setCustomers([]); // Set to empty array on fetch failure
        }
      } catch (error) {
        console.error("Error fetching customers:", error);
        setCustomers([]); // Set to empty array on error
      }
    };

    fetchCustomers();
  }, []);

  return (
    <>
      <div className="container mt-3">
        <Button variant="primary" onClick={handleShow}>
          Add Customer
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6">
                <label>Business Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Business Name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                />
              </div>
              <div className="col-lg-6">
                <label>Contact Person Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Contact Person Name"
                  value={contactPersonName}
                  onChange={(e) => setContactPersonName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6">
                <label>Email</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  required
                />
              </div>
              <div className="col-lg-6">
                <label>Phone Number</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Phone Number"
                  value={phoneno}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  required
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={storeCustomerData}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Business Name</th>
              <th>Contact Person Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(customers) && customers.map((customer, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{customer.businessName}</td>
                <td>{customer.contactPersonName}</td>
                <td>{customer.mail}</td>
                <td>{customer.phoneno}</td>
                <td>
                  <Button variant="warning" className="me-2">
                    Edit
                  </Button>
                  <Button variant="danger">Delete</Button>
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