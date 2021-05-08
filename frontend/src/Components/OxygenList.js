import React, { Component } from "react";
import axios from "axios";
import OxygenLead from "./OxygenLead";
import OxygenSearch from "./OxygenSearch";
import { Collapse } from "react-bootstrap";

export default class OxygenList extends Component {
  state = { oxygenLeads: [], searchResults: [], open: false };
  getOxygenLeads = () => {
    axios
      .get("http://192.168.0.105:5000/oxygen")
      .then((data) => {
        this.setState({ oxygenLeads: [...data.data] });
        this.setState({ searchResults: [...data.data] });
      })
      .catch((e) => {
        console.log(e);
      });

      setTimeout(()=>this.setState({open: true}),3000)
  };

  componentDidMount() {
    this.getOxygenLeads();
    console.log("mounted");
    
  }

  verifiedByUser = (id) => {
    let leads = [...this.state.oxygenLeads];
    let index = 0;
    leads.forEach((v, i) => {
      if (v.id === id) index = i;
    });
    let lead = { ...leads[index] };
    lead.last_verified = new Date();
    lead.verified_by = lead.verified_by + 1;
    leads[index] = lead;
    this.setState({ oxygenLeads: [...leads] });
    // lead.verified_by=lead.verified_by+1
    // console.log(lead);
  };

  componentDidUpdate(prevProps) {
    console.log(prevProps, this.props);
    if (
      prevProps.search.searchBy != this.props.search.searchBy ||
      prevProps.search.searchParam != this.props.search.searchParam
    ) {
      let searchBy = this.props.search.searchBy;
      let searchParam = this.props.search.searchParam;
      console.log("componentDidUpdate", searchBy, searchParam);

      let a4 = this.state.oxygenLeads.filter((l) => l[searchBy] == searchParam);

      this.setState({ searchResults: a4 });
      console.log(a4);
    }
  }

  render(props) {
    let array_of_o2 = this.state.searchResults.map((l) => {
      return (
        <div>
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
        </div>
      );
    });

    return <Collapse in={this.state.open}><div style={{ marginTop: "5rem" }}>{array_of_o2}</div></Collapse>;
  }
}
