import React from "react";
//import { Button } from "react-bootstrap";
//import { Table } from "react-bootstrap";
//import { useNavigate } from "react-router-dom";

function UserList(props) {
  return (
    <>
      {/* listing */}

      <table>
        <button type="button" onClick={props.hadleChange}>
          Add
        </button>
        {/* <button type="button" onClick={props.deleteUser}>
          delete
        </button> */}
        <tr>
          <th> Name</th>
          <th>number</th>
          <th>email</th>
        </tr>
        {props.user.length > 0 &&
          props.user.map((data, i) => (
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.number}</td>
              <td>{data.email}</td>
            </tr>
          ))}
      </table>
    </>
  );
}
export default UserList;
