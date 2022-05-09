import React, { useEffect, useState } from "react";
import axios from "axios";
import EditForm from "../component/form/EditForm";
import UserList from "../component/form/UserList";
import { Navigate, useNavigate } from "react-router-dom";
import AddForm from "../component/form/AddForm";

function Index() {
  const [user, setuser] = useState({ name: "", number: "", email: "" });
  const [allData, setAllData] = useState([]);
  const [formError, setFormError] = useState({});
  const [putData, setPutData] = useState([]);
  //const nevigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  // const hadleChange = (e) => {
  //   setuser({ ...user, [e.target.name]: e.target.value });
  //   setFormError({});
  // nevigate("/editform");
  // console.log(user);
  // }

  const handleSubmit = async (event) => {
    event.preventDefault();
    formValidation(user);
    await axios
      .post(" http://localhost:3002/student", user)
      .then((response) => {
        console.log(response.data, "????????");
        Navigate("/");
      });

    // setuser(user);
  };

  console.log(user);
  console.log(formError, "");

  const formValidation = (data) => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

    const { name, number, email } = data;
    let formErrors = {};
    let isValid = true;
    if (!name) {
      isValid = false;
      formErrors["name"] = "Please Enter Name.....";
    } else if (!number) {
      isValid = false;
      formErrors["number"] = "Please Enter Number.....";
    } else if (!email) {
      isValid = false;
      formErrors["email"] = "Please Enter Email.....";
    } else if (!regex.test(email)) {
      isValid = false;
      formErrors["email"] = "Please enter a valid email address";
    } else {
      formErrors["email"] = null;
    }
    setFormError(formErrors);
    return isValid;
  };
  const getData = async () => {
    const res = await axios.get("http://localhost:3002/student");
    console.log(res.data, "pppppp");
    setAllData(res.data);
  };
  // const deleteUser = async (id) => {
  //   const res = await axios.delete("http://localhost:3002/student");
  //   console.log(res);
  //   getData();y

  // };
  // const AddData = async (e) => {
  //   e.preventDefault();
  //   const res = await axios.put("http://localhost:3002/student/", putData);
  //   setPutData(res.data);
  // };

  return (
    <>
      <EditForm
        handleSubmit={handleSubmit}
        //hadleChange={hadleChange}
        errors={formError}
        //getData={getData}
      />

      {/* <UserList user={allData} /> */}
      {/* <AddForm /> */}
    </>
  );
}

export default Index;
