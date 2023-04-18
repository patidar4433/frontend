import React, { useState } from "react";
import logo from "../img/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Radio, message, Button, Form, Input } from "antd";

const Signup = () => {
  const regexEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const regexPassword = new RegExp(
    "^((?=.*[a-z])|(?=.*[A-Z]))(?=.*[0-9])(?=.{6,10})"
  );
  const regexName = new RegExp("^[a-zA-Z]+$");
  const regexContact = new RegExp(
    "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
  );
  const navigate = useNavigate();
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [firstnameErr, setFirstnameErr] = useState("");
  const [lastnameErr, setLastnameErr] = useState("");
  const [contactErr, setContactErr] = useState("");
  const [role, setRole] = useState(1);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [college, setCollege] = useState("");
  const [data, setData] = useState({
    firstname,
    lastname,
    contact,
    email,
    password,
    college,
    role,
  });
  console.log("data", data);

  const handleFirstName = (e) => {
    setFirstname(e.target.value);
    setFirstnameErr("Must be in alphabets, length should be 2-18 characters");
  };

  const handleLastName = (e) => {
    setLastname(e.target.value);
    setLastnameErr("Must be in alphabets, length should be 2-18 characters");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailErr("Enter valid email address");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordErr("Enter valid password");
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
    setContactErr("Enter valid mobile number");
  };

  const handleSignUp = (e) => {
    if (
      firstname === "" &&
      lastname === "" &&
      email === "" &&
      password === "" &&
      contact === ""
    ) {
      setEmailErr("*Email address is required !");
      setPasswordErr("*Password is required");
      setFirstnameErr("*Firstname is required");
      setLastnameErr("*Lastname is required");
      setContactErr("*Mobile Number is required");
    } else if (
      regexName.test(firstname) &&
      regexName.test(lastname) &&
      regexEmail.test(email) &&
      regexPassword.test(password) &&
      regexContact.test(contact)
    ) {
      setData({
        firstname: firstname,
        lastname: lastname,
        contact: contact,
        email: email,
        password: password,
        college: college,
        role: role,
      });
      setFirstname(e.target.value);
      setLastname(e.target.value);
      setContact(e.target.value);
      setEmail(e.target.value);
      setPassword(e.target.value);
      setCollege(e.target.value);
      setRole(e.target.value);

      axios
        .post("http://localhost:4000/signup", {
          firstname,
          lastname,
          contact,
          email,
          password,
          college,
          role,
        })
        .then((res) => {
          if (res.data.status === 1) {
            setTimeout(() => {
              message.success(res.data.message);
            }, 200);
            setTimeout(() => {
              navigate("/signin");
            }, 500);
          } else {
            message.error(res.data.message);
          }
        })
        .catch((err) => {
          message.error(err);
        });
    } else {
      setEmailErr("Incorrect email address !");
      setPasswordErr("Incorrect password !");
      setFirstnameErr("Incorrect firstname !");
      setLastnameErr("Incorrect lastname !");
      setContactErr("Incorrect contact !");
    }
  };

  const goToSignIn = () => {
    setTimeout(() => {
      navigate("/signin");
    }, 200);
  };

  return (
    <div className="login_div">
      <div className="login_box">
        <div style={{ marginBottom: "10px" }}>
          <div className="login_page_logo">
            <img src={logo} alt="" />
          </div>
          <div className="login_page_brand">
            Code<span>Unit</span>
          </div>
        </div>
        <div className="login_input">
          <Form autoComplete="off">
            <div>
              <Radio.Group
                onChange={(e) => setRole(e.target.value)}
                value={role}
              >
                <Radio value={1}><span style={{ color: "black" }}>Student</span></Radio>
                <Radio value={2}><span style={{ color: "black" }}>Admin</span></Radio>
              </Radio.Group>
            </div>
            <br />
            <Input
              className="input"
              type="text"
              name="firstname"
              placeholder="Firstname"
              onChange={handleFirstName}
              value={firstname}
            />
            <br />
            <span style={{ float: "left" }}>
              {regexName.test(firstname) ? "" : firstnameErr}
            </span>
            <br />
            <Input
              className="input"
              type="text"
              name="lastname"
              placeholder="Lastname"
              onChange={handleLastName}
              value={lastname}
            />
            <br />
            <span style={{ float: "left" }}>
              {regexName.test(lastname) ? "" : lastnameErr}
            </span>
            <br />
            <Input
              className="input"
              type="text"
              name="contact"
              placeholder="Contact Number"
              onChange={handleContactChange}
              value={contact}
            />
            <br />
            <span style={{ float: "left" }}>
              {regexContact.test(contact) ? "" : contactErr}
            </span>
            <br />
            <Input
              className="input"
              type="text"
              placeholder="abc@example.com"
              value={email}
              onChange={handleEmailChange}
            />
            <br />
            <span style={{ float: "left" }}>
              {regexEmail.test(email) ? "" : emailErr}
            </span>
            <br />
            <Input.Password
              className="input"
              placeholder="dkboss009"
              value={password}
              onChange={handlePasswordChange}
            />
            <br />
            <span style={{ float: "left" }}>
              {regexPassword.test(password) ? "" : passwordErr}
            </span>
            <br />
            {/* <Input
              className="input"
              type="text"
              name="college"
              placeholder="College Name"
              onChange={(e) => setCollege(e.target.value)}
              value={college}
            /> */}
            {/* <br /> */}
            <br />
            <Button onClick={handleSignUp} type="primary" htmlType="submit">
              <span className="input-button">Sign Up</span>
            </Button>
          </Form>
        </div>
        <div className="bottom_signin">
          <span onClick={goToSignIn}>Sign In</span>
        </div>
      </div>
    </div>
  );
};
export default Signup;
