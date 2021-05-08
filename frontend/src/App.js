import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import OxygenList from "./Components/OxygenList";



function App() {
  const [searchParam, setSearchParam] = useState("");
  const [searchBy, setSearchBy] = useState("")

  const getSearchParam = (param,by)=>{
    setSearchParam(param)
    setSearchBy(by)
  }
  return (
    <div>
      <NavBar search={getSearchParam}></NavBar>
      <Container>

          <OxygenList search={{searchBy, searchParam}}></OxygenList>

      </Container>
    </div>
  );
}

export default App;
