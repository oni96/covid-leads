import React, { Component } from "react";
import { Col, Dropdown, Row } from "react-bootstrap";

export default class OxygenSearch extends Component {
  render() {
    return (

      <div>
        <div>
          <input
            type="text"
            placeholder="Search By"
            style={{ width: "100%" }}
          ></input>
        </div>
        <div xl={2}>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
}
