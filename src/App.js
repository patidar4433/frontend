import React from "react";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Developer from "./components/Developer";
import Problems from "./components/Problems";
import ForgotPassword from "./components/ForgotPassword";
import CodeEditor from "./components/CodeEditor";
import Myprofile from "./components/Myprofile";
import Compo from "./components/Compo";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/developer/:id" element={<Developer/>} />
          <Route path="/problems" element={<Problems/>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/code-editor" element={<CodeEditor/>} />
          <Route path="/myprofile" element={<Myprofile />}/>
          <Route path="/compo" element={<Compo />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      {/* <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <Counter />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <span>
      <span>Learn </span>
      <a
        className="App-link"
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        React
      </a>
      <span>, </span>
      <a
        className="App-link"
        href="https://redux.js.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Redux
      </a>
      <span>, </span>
      <a
        className="App-link"
        href="https://redux-toolkit.js.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Redux Toolkit
      </a>
      ,<span> and </span>
      <a
        className="App-link"
        href="https://react-redux.js.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        React Redux
      </a>
    </span>
  </header> */}
    </div>
  );
}

export default App;
