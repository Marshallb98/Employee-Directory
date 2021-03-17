import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";
import Body from "../body/Body";
import Jumbotron from "react-bootstrap/Jumbotron";

class EmployeeList extends Component {
  state = {
    employees: [],
    sortState: [],
    search: "",
  };
  componentDidMount() {
    this.loadEmployees();
  }

  searchByTarget = (event) => {
    this.setState({ search: event.target.value }, () => {
      this.setState({
        sortState: this.state.employees.filter((emp) =>
          emp.name.first.toLowerCase().includes(this.state.search.toLowerCase())
        ),
      });
    });
  };

  loadEmployees = () => {
    API.getEmployees()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          sortState: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  sortByFirst() {
    function compare(a, b) {
      const aName = a.name.first.toLowerCase();
      const bName = b.name.first.toLowerCase();

      let comparison = 0;
      if (aName > bName) {
        comparison = 1;
      } else if (aName < bName) {
        comparison = -1;
      }

      return comparison;
    }

    let sortedArray = this.state.sortState.sort(compare);
    this.setState({ sortState: sortedArray });
  }

  sortByLast() {
    function compare(a, b) {
      const aName = a.name.first.toLowerCase();
      const bName = b.name.first.toLowerCase();

      let comparison = 0;
      if (aName < bName) {
        comparison = 1;
      } else if (aName > bName) {
        comparison = -1;
      }

      return comparison;
    }

    let sortedArray = this.state.sortState.sort(compare);
    this.setState({ sortState: sortedArray });
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Employee Directory</h1>
        </Jumbotron>
        <input
          type="text"
          value={this.state.search}
          placeholder="Search By First Name"
          onChange={this.searchByTarget}
        ></input>
        <button onClick={this.sortByFirst.bind(this)}>
          First Name Alphabetical
        </button>
        <button onClick={this.sortByLast.bind(this)}>
          First Name Non Alphabetical
        </button>
        <Body employees={this.state.sortState} />
      </div>
    );
  }
}

export default EmployeeList;
