import axios from "axios";
import React, { useState } from "react";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  const resetPassword = (e) => {
    setEmail(e.target.value);
    setPassword(e.target.value);
    setConfirm_password(e.target.value);

    axios
      .post("http://localhost:4000/forgotpassword", {
        email: email,
        password: password,
        confirm_password: confirm_password,
      })
      .then((res) => {
        if (res.data.status === 1) {
          console.log("back res", res);
          message.success(res.data.message);
          setTimeout(() => {
            navigate("/signin");
          }, 1500);
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        message.error(err);
      });
  };

  return (
    <>
      <div className="login_div">
        <div className="login_box">
          <div style={{ marginBottom: "20px" }}>
            <div className="login_page_logo">
              <img src={logo} alt="" />
            </div>
            <div className="login_page_brand">
              <span>CodeUNIT</span>
            </div>
          </div>
          <div className="login_input">
            <input
              type="text"
              placeholder="Username or E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <span></span>
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <span></span>
            <br />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirm_password}
              onChange={(e) => setConfirm_password(e.target.value)}
            />
            <br />
            <span></span>
            <br />
            <button onClick={resetPassword} type="button">
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;
