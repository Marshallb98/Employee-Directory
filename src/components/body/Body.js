import React from "react";
import Table from "react-bootstrap/Table";
import "./style.css";
function Body(props) {
  
  return (
      <Table striped bordered hover>
         <thead>
            <tr>
              <th>Employee</th>
              <th>Years with Company</th>
              <th>
                  First Name
              </th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
        <tbody>
          {props.employees.map(
            ({  login, picture, registered, name, email, phone }) => {
              return (
                
                <tr key={login.uuid}>
                  <td>
                    <img src={picture.medium} alt="IdPicture" />
                  </td>
                  <td>{registered.age}</td>
                  <td>{name.first}</td>
                  <td>{name.last}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </Table>
  );
}

export default Body;
