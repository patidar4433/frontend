# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


******************************************************************************************
********** registration page with formik and yup npm pachage ****************
******************************************************************************************
import React, { useState } from "react";
import logo from "../img/logo.png";
import axios from "axios";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const initialValues = {
  username: "",
  password: "",
  confirmPassword: "",
  email: "",
};

const Signup = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log("values", values);
      action.resetForm();
    },
  });

  console.log("errors", errors);

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [data, setData] = useState({
  //   username,
  //   password,
  //   confirmPassword,
  //   email,
  // });
  // console.log("data", data)
  // const handleSignUp = (e) => {
  //   setData({
  //     username: username,
  //     password: password,
  //     confirmPassword: confirmPassword,
  //     email: email,
  //   });
  //   setUsername(e.target.value);
  //   setPassword(e.target.value);
  //   setConfirmPassword(e.target.value);
  //   setEmail(e.target.value);

  //   axios
  //     .post("http://localhost:4000/signup", {
  //       username,
  //       password,
  //       confirmPassword,
  //       email,
  //     })
  //     .then((res) => {
  //       if (res.data.status === 1) {
  //         alert(res.data.message);
  //       } else {
  //         alert(res.data.message);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("error", err);
  //     });
  // };

  return (
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              // onChange={(e) => setUsername(e.target.value)}
              // value={username}
            />
            <br />
            { errors.username && touched.username ? <span>{errors.username}</span> : null }
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              // onChange={(e) => setPassword(e.target.value)}
              // value={password}
            />
            <br />
            { errors.password && touched.password ? <span>{errors.password}</span> : null }
            <br />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              // onChange={(e) => setConfirmPassword(e.target.value)}
              // value={confirmPassword}
            />
            <br />
            { errors.confirmPassword && touched.confirmPassword ? <span>{errors.confirmPassword}</span> : null }
            <br />
            <input
              type="email"
              name="email"
              placeholder="E-mail address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              // onChange={(e) => setEmail(e.target.value)}
              // value={email}
            />
            <br />
            { errors.email && touched.email ? <span>{errors.email}</span> : null }
            <br />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="bottom_signin">
          <span style={{ opacity: "0.5" }}>Have an account? </span>
          <span>Sign In</span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
************************************************************************************
************************************************************************************

************************************************************************************
************ schemas folder with file index.jsx ***************
************************************************************************************

import * as Yup from "yup";

export const signUpSchema = Yup.object({
  username: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must be matched"),
});

**************************************************************************************
**************************************************************************************