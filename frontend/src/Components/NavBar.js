import React, { useState } from "react";
import {
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import logo from "../logo.svg";

export default function NavBar(props) {
  const [searchBy, setsearchBy] = useState("pincode");
  const [searchParam, setSearchParam] = useState("");
  const [collapseNavBar, setCollapseNavBar] = useState(false);

  const searchLeads = (e) => {
    e.preventDefault();
    console.log("Searching Leads Here");
    console.log("Searching by", searchBy, "with params", searchParam);
    props.search(searchParam, searchBy);
    setCollapseNavBar(!collapseNavBar);
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="null"
        ></img>
        COVID Something
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={(e) => setCollapseNavBar(!collapseNavBar)}
      />
      <Navbar.Collapse id="basic-navbar-nav" in={collapseNavBar}>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline onSubmit={(e) => searchLeads(e)}>
          <Form.Control
            as="select"
            onChange={(e) => setsearchBy(e.target.value)}
          >
            <option value="pincode">Pincode</option>
            <option value="city">City</option>
            <option value="locality">Locality</option>
          </Form.Control>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            required={true}
            value={searchParam}
            onChange={(e) => {
              setSearchParam(e.target.value);
            }}
          />
          <FormControl
            type="submit"
            variant="outline-success"
            value="Search"
            className="btn btn-outline-success"
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
