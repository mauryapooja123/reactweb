import React from "react";
import { useState } from "react";
import UserList from "../component/form/UserList";

function TableData() {
  const [user, setUser] = useState();

  const hadleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    //setFormError({});
  };
  return (
    <>
      <UserList hadleChange={hadleChange} user={user} />
    </>
  );
}
export default TableData;
