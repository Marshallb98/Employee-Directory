import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";
import Body from "../body/Body";
import Jumbotron from "react-bootstrap/Jumbotron";
class EmployeeList extends Component {
  state = {
    employees: [],
    sortState: ""
  };
  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = () => {
    API.getEmployees()
      .then((res) => this.setState({ employees: res.data.results }))
      .catch((err) => console.log(err));
  };

  sortByFirst = () => {
      
  }
  render() {
    return (
      <div>
        <Jumbotron >
          <h1>Employee Directory</h1>
        </Jumbotron>
        <div>
          <Body employees={this.state.employees} />
        </div>
      </div>
    );
  }
}

export default EmployeeList;
