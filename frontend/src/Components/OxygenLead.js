import axios from "axios";
import React, { Component } from "react";
import { Button, Col, Container, Jumbotron, Row } from "react-bootstrap";

export default class OxygenLead extends Component {
  state = { verified: false, timenow: new Date() };
  verifyLead(e) {
    const getLastArr =
      JSON.parse(localStorage.getItem("verifiedOxygen")) == null
        ? []
        : JSON.parse(localStorage.getItem("verifiedOxygen"));

    this.setState({ verified: true });
    axios
      .post("/oxygen/verifyOxygenLead", {
        id: this.props.id,
      })
      .then(console.log("Verified"))
      .catch((e) => console.log(e));

    this.props.verify(this.props.id);
    localStorage.setItem(
      "verifiedOxygen",
      JSON.stringify([...getLastArr, this.props.id.toString()])
    );

    this.setState({last_verified: new Date()})
  }

  getTime() {
  
    return new Date().getTime();
  }

  componentWillUnmount(){
    clearInterval()
  }


  componentDidMount() {
    this.setState({last_verified: this.props.last_verified})
    setInterval(() => {
      console.log("Timer called");
      this.setState({ timenow: this.getTime() });
    }, 60000);
    const getLastArr =
      JSON.parse(localStorage.getItem("verifiedOxygen")) == null
        ? []
        : JSON.parse(localStorage.getItem("verifiedOxygen"));
    // console.log(getLastArr);
    if (getLastArr.includes(this.props.id.toString()))
      this.setState({ verified: true });
  }
  render(props) {
    let telList = this.props.phNo.map((p) => {
      return (
        <p key={p}>
          <a href={"tel:" + p}>{p}</a>
        </p>
      );
    });

    console.log(this.props.last_verified);
    return (
      <Jumbotron>
        <h3>{this.props.name}</h3>
        <h5>Contact No: {telList}</h5>
        <Container>
          <Row>
            <Col>
              <p>
                Locality: <strong>{this.props.locality}</strong>
              </p>
            </Col>

            <Col>
              <p>
                {" "}
                City: <strong>{this.props.city}</strong>
              </p>
            </Col>
            <Col>
              <p>
                Pincode: <strong>{this.props.pin}</strong>
              </p>
            </Col>
          </Row>
        </Container>

        <p>
          Last verified{" "}
          <strong>
            {Math.ceil(
              (this.state.timenow -
                new Date(this.state.last_verified).getTime()) /
                (1000 * 60)
            )}{" "}
            mins ago
          </strong>
        </p>

        {this.state.verified ? (
          <p>
            You and <strong>{this.props.verified_by}</strong> other user(s) have
            verified. <br />
            Thank you for helping us!
          </p>
        ) : (
          <p>
            Verified by <strong>{this.props.verified_by}</strong> user(s)
          </p>
        )}

        <Container>
          <Row>
            <Col>
              <Button
                variant="success"
                onClick={(e) => this.verifyLead(e)}
                disabled={this.state.verified}
              >
                Verify
              </Button>
            </Col>
            <Col>
              {" "}
              <Button variant="danger" style={{ float: "right" }}>
                Report
              </Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
