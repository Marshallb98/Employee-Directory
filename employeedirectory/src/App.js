import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import './App.css';


function App() {
  return (
<div>
      <Container>   
      <Row>
      <Col><EmployeeList /></Col>       
      </Row>
      </Container>  
</div>
  );
}

export default App;
