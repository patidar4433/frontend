import React, { useState } from "react";
import logo from "../img/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message, Button, Form, Input } from "antd";

const Signin = () => {
  const regexEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const regexPassword = new RegExp(
    "^((?=.*[a-z])|(?=.*[A-Z]))(?=.*[0-9])(?=.{6,10})"
  );
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailErr("Enter valid email address");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordErr("Enter valid password");
  };

  const handleSignIn = () => {
    if (email === "" && password === "") {
      setEmailErr("*Email address is required !");
      setPasswordErr("*Password is required");
    } else if (regexEmail.test(email) && regexPassword.test(password)) {
      setData({
        email: email,
        password: password,
      });
      // setEmail(e.target.value);
      // setPassword(e.target.value);

      axios
        .post("http://localhost:4000/signin", { email, password })
        .then((res) => {
          if (res.data.status === 1) {
            localStorage.setItem("user", JSON.stringify(res.data));
            setTimeout(() => {
              message.success(res.data.message);
            }, 300);
            setTimeout(() => {
              navigate("/explore");
            }, 500);
          } else {
            message.error(res.data.message);
          }
        });
    } else {
      setEmailErr("Incorrect email address !");
      setPasswordErr("Incorrect password !");
    }
  };

  const goToSignUp = () => {
    setTimeout(() => {
      navigate("/signup");
    }, 200);
  };

  const forgotPassword = () => {
    setTimeout(() => {
      navigate("/forgotpassword");
    }, 200);
  };

  return (
    <div className="login_div">
      <div className="login_box">
        <div style={{ marginBottom: "20px" }}>
          <div className="login_page_logo">
            <img src={logo} alt="" />
          </div>
          <div className="login_page_brand">
            Code<span>Unit</span>
          </div>
        </div>
        <div className="login_input">
          <Form autoComplete="off">
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
              placeholder="Password - dkboss09"
              value={password}
              onChange={handlePasswordChange}
            />
            <br />
            <span style={{ float: "left" }}>
              {regexPassword.test(password) ? "" : passwordErr}
            </span>
            <br />
            <Button onClick={handleSignIn} type="primary" htmlType="submit">
              <span className="input-button">Sign In</span>
            </Button>
          </Form>
        </div>
        <div className="forgot_signup">
          <span onClick={forgotPassword}>Forgot password</span>
          <span onClick={goToSignUp}>Sign Up</span>
        </div>
      </div>
    </div>
  );
};
export default Signin;