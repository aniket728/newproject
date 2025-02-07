import React from 'react'
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';

const SalesOrder = () => {
  return (
    <>
     <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Sales Order</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Orders</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default SalesOrder