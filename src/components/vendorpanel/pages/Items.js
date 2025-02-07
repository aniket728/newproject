import React, { useState } from 'react';
import { Modal, Button, Form, ToggleButtonGroup, ToggleButton, Row, Col, Card } from 'react-bootstrap';

const Items = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [formData, setFormData] = useState({
    itemName: '',
    isActive: false,
    unit: '',
    sellPrice: '',
    itemCode: '',
    description: '',
    category: '',
    brand: '',
    images: [],
    priceDetails: {
      mrp: '',
      purchasePrice: '',
      hsnCode: '',
      gst: '',
      cess: '',
      discount: '',
      offerText: ''
    },
    stockDetails: {
      warehouses: []
    }
  });

  const [savedItem, setSavedItem] = useState(null); // New state to store the saved item details

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      priceDetails: {
        ...prevState.priceDetails,
        [name]: value
      }
    }));
  };

  const handleStockChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      stockDetails: {
        ...prevState.stockDetails,
        [name]: value
      }
    }));
  };

  const handleToggleChange = () => {
    setFormData((prevState) => ({
      ...prevState,
      isActive: !prevState.isActive
    }));
  };

  const handleAddWarehouse = () => {
    setFormData((prevState) => ({
      ...prevState,
      stockDetails: {
        ...prevState.stockDetails,
        warehouses: [...prevState.stockDetails.warehouses, '']
      }
    }));
  };

  const handleSave = () => {
    // Save the item and close the sidebar
    setSavedItem(formData); // Save the item details
    toggleSidebar(); // Close sidebar after saving
    resetForm(); // Reset form data for next item
  };

  const handleCancel = () => {
    toggleSidebar(); // Close sidebar without saving
  };

  const resetForm = () => {
    setFormData({
      itemName: '',
      isActive: false,
      unit: '',
      sellPrice: '',
      itemCode: '',
      description: '',
      category: '',
      brand: '',
      images: [],
      priceDetails: {
        mrp: '',
        purchasePrice: '',
        hsnCode: '',
        gst: '',
        cess: '',
        discount: '',
        offerText: ''
      },
      stockDetails: {
        warehouses: []
      }
    });
  };

  return (
    <div className="container py-5">
      <Button onClick={toggleSidebar} variant="primary">Create Item</Button>

      {/* Sidebar for creating item */}
      <div
        className={`sidebar ${showSidebar ? 'sidebar-open' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100%',
          width: '400px',
          backgroundColor: '#fff',
          boxShadow: '0px 0px 5px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease',
          transform: showSidebar ? 'translateX(0)' : 'translateX(100%)',
          zIndex: 1050,
          paddingTop: '20px',
          overflowY: 'auto',
        }}
      >
        <div className="p-4">
          <h4>Create New Item</h4>
          <Form>
            {/* Item Name */}
            <Form.Group className="mb-3">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleInputChange}
                placeholder="Enter item name"
              />
            </Form.Group>

            {/* Activate Item Toggle */}
            <Form.Group className="mb-3">
              <Form.Label>Activate Item</Form.Label>
              <ToggleButtonGroup type="radio" name="isActive" value={formData.isActive} onChange={handleToggleChange}>
                <ToggleButton variant="outline-primary" value={true}>Active</ToggleButton>
                <ToggleButton variant="outline-danger" value={false}>Inactive</ToggleButton>
              </ToggleButtonGroup>
            </Form.Group>

            {/* Unit */}
            <Form.Group className="mb-3">
              <Form.Label>Unit</Form.Label>
              <Form.Control
                type="text"
                name="unit"
                value={formData.unit}
                onChange={handleInputChange}
                placeholder="Enter unit"
              />
            </Form.Group>

            {/* Sell Price */}
            <Form.Group className="mb-3">
              <Form.Label>Sell Price</Form.Label>
              <Form.Control
                type="number"
                name="sellPrice"
                value={formData.sellPrice}
                onChange={handleInputChange}
                placeholder="Enter sell price"
              />
            </Form.Group>

            {/* Item Code */}
            <Form.Group className="mb-3">
              <Form.Label>Item Code</Form.Label>
              <Form.Control
                type="text"
                name="itemCode"
                value={formData.itemCode}
                onChange={handleInputChange}
                placeholder="Enter item code"
              />
            </Form.Group>

            {/* Description */}
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter item description"
              />
            </Form.Group>

            {/* Price Details */}
            <h5>Price Details</h5>
            <Form.Group className="mb-3">
              <Form.Label>MRP</Form.Label>
              <Form.Control
                type="number"
                name="mrp"
                value={formData.priceDetails.mrp}
                onChange={handlePriceChange}
                placeholder="Enter MRP"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Purchase Price</Form.Label>
              <Form.Control
                type="number"
                name="purchasePrice"
                value={formData.priceDetails.purchasePrice}
                onChange={handlePriceChange}
                placeholder="Enter purchase price"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>HSN Code</Form.Label>
              <Form.Control
                type="text"
                name="hsnCode"
                value={formData.priceDetails.hsnCode}
                onChange={handlePriceChange}
                placeholder="Enter HSN Code"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>GST %</Form.Label>
              <Form.Control
                type="number"
                name="gst"
                value={formData.priceDetails.gst}
                onChange={handlePriceChange}
                placeholder="Enter GST %"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cess %</Form.Label>
              <Form.Control
                type="number"
                name="cess"
                value={formData.priceDetails.cess}
                onChange={handlePriceChange}
                placeholder="Enter Cess %"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Discount</Form.Label>
              <Form.Control
                type="number"
                name="discount"
                value={formData.priceDetails.discount}
                onChange={handlePriceChange}
                placeholder="Enter discount"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Offer Text</Form.Label>
              <Form.Control
                type="text"
                name="offerText"
                value={formData.priceDetails.offerText}
                onChange={handlePriceChange}
                placeholder="Enter offer text"
              />
            </Form.Group>

            {/* Stock Details */}
            <h5>Stock Details</h5>
            <Form.Group className="mb-3">
              <Form.Label>Warehouses</Form.Label>
              {formData.stockDetails.warehouses.map((warehouse, index) => (
                <Row key={index}>
                  <Col>
                    <Form.Control
                      type="text"
                      value={warehouse}
                      onChange={(e) => {
                        const newWarehouses = [...formData.stockDetails.warehouses];
                        newWarehouses[index] = e.target.value;
                        setFormData((prevState) => ({
                          ...prevState,
                          stockDetails: {
                            ...prevState.stockDetails,
                            warehouses: newWarehouses
                          }
                        }));
                      }}
                      placeholder="Enter warehouse"
                    />
                  </Col>
                </Row>
              ))}
            </Form.Group>
            <Button variant="outline-success" onClick={handleAddWarehouse}>Add Warehouse</Button>

            {/* Save & Cancel buttons */}
            <div className="d-flex justify-content-between mt-3">
              <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
              <Button variant="primary" onClick={handleSave}>Save</Button>
            </div>
          </Form>
        </div>
      </div>

      {/* Show Saved Item in Card */}
      {savedItem && (
        <div className="mt-5">
          <Card>
            <Card.Body>
              <Card.Title>{savedItem.itemName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Item Code: {savedItem.itemCode}</Card.Subtitle>
              <Card.Text><strong>Price: </strong>{savedItem.sellPrice}</Card.Text>
              <Card.Text><strong>Unit: </strong>{savedItem.unit}</Card.Text>
              <Card.Text><strong>Description: </strong>{savedItem.description}</Card.Text>
              <Card.Text><strong>GST %: </strong>{savedItem.priceDetails.gst}</Card.Text>
              <Card.Text><strong>Warehouses: </strong>{savedItem.stockDetails.warehouses.join(', ')}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Items;
