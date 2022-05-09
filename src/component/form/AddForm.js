import React from "react";

function AddForm(props) {
  return (
    <>
      <form>
        <p>name</p>
        <input type="text"></input>
        <p>number</p>
        <input type="number"></input>
        <p>email</p>AddData
        <input type="email"></input>
        <button type="button" onClick={props.AddData}></button>
      </form>
    </>
  );
}
export default AddForm;
