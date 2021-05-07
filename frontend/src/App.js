import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import OxygenList from "./Components/OxygenList";



function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>

          <OxygenList></OxygenList>

      </Container>
    </div>
  );
}

export default App;
