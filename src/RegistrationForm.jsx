import React, { useState } from "react";
import styled from "styled-components";
import "./Registration.css";
import { Typography } from "@mui/material";

const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  width: 40%; /* Adjust the width as needed */
  height: 100%; /* Adjust the height to fill the entire container */
  margin: 150px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  transform: scale(1);
`;

const BusinessCard = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [nameError, setNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [dateError, setDateError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [enrollmentError, setEnrollmentError] = useState("");
  const [isValid, setIsValid] = useState(true);

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeMobile = (e) => {
    setMobile(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeAddress = (e) => {
    setAddress(e.target.value);
  };

  const changeDate = (e) => {
    setDate(e.target.value);
  };
  const changeGender = (e) => {
    setGender(e.target.value);
  };

  const changeEnrollment = (e) => {
    setEnrollment(e.target.value);
  };

  const validateForm = (event) => {
    event.preventDefault(); // Prevent form submission

    const name = event.target.form3Example1q.value;
    const mobile = event.target.form2Example1q.value;
    const email = event.target.form3Example2q.value;
    const address = event.target.form3Example1w.value;
    const date = event.target.exampleDatepicker1.value;
    const gender = event.target.genderSelect.value;
    const enrollment = event.target.form6Example2q.value;

    const nameRegex = /^[A-Za-z\s]+$/;
    const mobileRegex = /^[0-9]+$/;
    const emailRegex = /^[A-Za-z]+@+[A-Za-z]+\.+[A-Za-z]+$/;
    const enrollmentRegex = /^[0-9]+$/;

    let isValid = true;

    if (!nameRegex.test(name)) {
      setNameError("Invalid name format");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!mobileRegex.test(mobile) || mobile.toString().length !== 10) {
      setMobileError("Invalid mobile number format");
      isValid = false;
    } else {
      setMobileError("");
    }

    if (!emailRegex.test(email)) {
      setEmailError("Invalid Email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (address.trim() === "") {
      setAddressError("Address is required");
      isValid = false;
    } else {
      setAddressError("");
    }

    if (date.trim() === "") {
      setDateError("Date is required");
      isValid = false;
    } else {
      setDateError("");
    }

    if (gender === "") {
      setGenderError("Gender is required");
      isValid = false;
    } else {
      setGenderError("");
    }

    if (
      enrollment === "" ||
      !enrollmentRegex.test(enrollment) ||
      enrollment.toString().length !== 12
    ) {
      setEnrollmentError("Invalid enrollment format");
      isValid = false;
    } else {
      setEnrollmentError("");
    }

    setIsValid(isValid);

    if (isValid) {
      console.log("Form submitted successfully");
    }
  };

  return (
    <form className="px-md-2" onSubmit={validateForm}>
      <section
        className="h-100 d-flex justify-content-center align-items-center"
        style={{
          backgroundImage:
            "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp)",
          minHeight: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="blur"></div>
        <div className="flex jusitfy-center items-center w-full h-screen p-5">
          <div className="card rounded-3 shadow gap-0">
            <h3 className="text-center mb-0 pb-2 pb-md-0">Registration Info</h3>
            <div className="card-body p-5 py-0 p-md-5">
              <div className="mb-2">
                <label htmlFor="form3Example1q">
                  <b>Name</b>
                </label>
                <input
                  type="text"
                  id="form3Example1q"
                  className="form-control"
                  placeholder="Enter your name"
                  onChange={(e) => {
                    changeName(e);
                  }}
                  style={{ border: "1px solid black" }}
                  required
                />
                <span className="error" id="nameError">
                  {nameError}
                </span>
              </div>

              <div className="mb-2">
                <label htmlFor="form2Example1q">Mobile Number</label>
                <input
                  type="text"
                  id="form2Example1q"
                  className="form-control"
                  placeholder="Enter your mobile number"
                  onChange={(e) => {
                    changeMobile(e);
                  }}
                  style={{ border: "1px solid black" }}
                  required
                />
                <span className="error" id="mobileError">
                  {mobileError}
                </span>
              </div>

              <div className="mb-2">
                <label htmlFor="form6Example2q">Enrollment Number</label>
                <input
                  type="text"
                  id="form6Example2q"
                  className="form-control"
                  placeholder="Enter your Enrollment Number"
                  onChange={(e) => {
                    changeEnrollment(e);
                  }}
                  required
                  style={{ border: "1px solid black" }}
                />
                <span className="error" id="enrollmentError">
                  {enrollmentError}
                </span>
              </div>

              <div className="mb-2">
                <label htmlFor="form3Example2q">Email</label>
                <input
                  type="email"
                  id="form3Example2q"
                  className="form-control"
                  placeholder="Enter your email"
                  onChange={(e) => {
                    changeEmail(e);
                  }}
                  required
                  style={{ border: "1px solid black" }}
                />
                <span className="error" id="emailError">
                  {emailError}
                </span>
              </div>

              <div className="mb-2">
                <label htmlFor="form3Example1w">Address</label>
                <input
                  type="text"
                  id="form3Example1w"
                  className="form-control"
                  placeholder="Enter your address"
                  onChange={(e) => {
                    changeAddress(e);
                  }}
                  required
                  style={{ border: "1px solid black" }}
                />
                <span className="error" id="addressError">
                  {addressError}
                </span>
              </div>

              <div className="row mb-2">
                <div className="col-md-6">
                  <label htmlFor="exampleDatepicker1">Birthdate</label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleDatepicker1"
                    onChange={(e) => {
                      changeDate(e);
                    }}
                    required
                    style={{ border: "1px solid black" }}
                  />
                  <span className="error" id="dateError">
                    {dateError}
                  </span>
                </div>

                <div className="col-md-6">
                  <label htmlFor="genderSelect">Gender</label>
                  <select
                    className="form-select"
                    id="genderSelect"
                    name="gender"
                    onChange={(e) => {
                      changeGender(e);
                    }}
                    required
                    style={{
                      height: "40px",
                      width: "100%",
                      margin: "-1px",
                      borderRadius: "10px",
                    }}
                  >
                    <option value="" disabled selected>
                      Select Gender
                    </option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                  <span className="error" id="genderError">
                    {genderError}
                  </span>
                </div>
              </div>

              <div className=" flex items-center gap-2 justify-center">
                <button
                  type="submit"
                  className="btn btn-success btn-lg flex items-center gap-1"
                >
                  <i className="fas fa-check-circle me-2" /> <span>Submit</span>
                </button>
              </div>
            </div>
          </div>
          {name && (
            <StyledCard>
              <Typography
                variant="h3"
                color={"black"}
                align="center"
                gutterBottom
              >
                User Details
              </Typography>
              <Typography variant="h4" color={"black"} gutterBottom>
                Name: {name}
              </Typography>
              <Typography variant="h4" color={"black"} gutterBottom>
                Mobile: {mobile}
              </Typography>
              <Typography variant="h4" color={"black"} gutterBottom>
                enrollment: {enrollment}
              </Typography>
              <Typography variant="h4" color={"black"} gutterBottom>
                email: {email}
              </Typography>
              <Typography variant="h4" color={"black"} gutterBottom>
                Address: {address}
              </Typography>
              <Typography variant="h4" color={"black"} gutterBottom>
                date: {date}
              </Typography>
              <Typography variant="h4" color={"black"} gutterBottom>
                gender: {gender}
              </Typography>
            </StyledCard>
          )}
        </div>
      </section>
    </form>
  );
};

export default BusinessCard;