import React, { Component } from "react";
import axios from "axios";
import OxygenLead from "./OxygenLead";

export default class OxygenList extends Component {
  state = { oxygenLeads: [] };
  getOxygenLeads = () => {
    axios
      .get("http://192.168.0.105:5000/oxygen")
      .then((data) => {
        this.setState({ oxygenLeads: [...data.data] });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  componentDidMount() {
    this.getOxygenLeads();
  }

  verifiedByUser = (id) => {
    let leads = [...this.state.oxygenLeads];
    let index = 0;
    leads.forEach((v, i) => {
      if (v.id === id) index = i;
    });
    let lead = {...leads[index]}
    lead.last_verified = new Date()
    lead.verified_by=lead.verified_by+1
    leads[index]=lead;
    this.setState({oxygenLeads:[...leads] })
    // lead.verified_by=lead.verified_by+1
    // console.log(lead);
  };

  render() {
    let array_of_o2 = this.state.oxygenLeads.map((l) => {
      return (
        <OxygenLead
          name={l.name}
          phNo={l.phone_number}
          locality={l.locality}
          city={l.city}
          pin={l.pincode}
          last_verified={l.last_verified}
          verified_by={l.verified_by}
          added_by={l.added_by}
          reports={l.reports}
          key={l.id}
          id={l.id}
          verify={this.verifiedByUser}
        ></OxygenLead>
      );
    });
    return <div>{array_of_o2}</div>;
  }
}
