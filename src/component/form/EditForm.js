import React from "react";
//import { Table } from "react-bootstrap";
function EditForm(props) {
  console.log(props.errors);
  return (
    <>
      <form>
        <p>enter first name </p>
        <input
          type="text"
          placeholder="enter name"
          name="name"
          onChange={props.hadleChange}
        ></input>
        <span>{props.errors && props.errors.name}</span>
        <p> enter contact number</p>
        <input
          type="number"
          placeholder="enter contact number"
          name="number"
          onChange={props.hadleChange}
        ></input>
        <span>{props.errors && props.errors.number}</span>
        <p> enter email</p>
        <input
          type="email"
          placeholder="enter email"
          name="email"
          onChange={props.hadleChange}
        ></input>
        <span>{props.errors && props.errors.email}</span>
        <br />
        <button onClick={props.handleSubmit} type="submit">
          add data
        </button>
      </form>
    </>
  );
}
export default EditForm;
