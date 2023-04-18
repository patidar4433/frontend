import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Progress } from "antd";

const Myprofile = () => {
  const userEmail = JSON.parse(localStorage.getItem("user")).email;
  const [userName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const [show, setShow] = useState(false);

  // useState for modal
  const [email, setemail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [password, setpassword] = useState("");

  const updateProfileDetails = async (e) => {
    setShow(false);
    setFirstname(e.target.value);
    setemail(e.target.value);
    setpassword(e.target.value);

    axios
      .post("http://localhost:4000/user-profile-update", {
        firstname,
        email,
        password,
      })
      .then(async (res) => {
        if (res.data.status === 1) {
          await getUserData(userEmail);
          console.log("res", res);
          console.log("first", firstname, email, password);
          console.log("second", userName, Email, Password);
        } else {
          console.log("res", res);
        }
      });
  };

  const handleClose = () => {
    setShow(false);
  };

  const getUserData = (userEmail) => {
    axios
      .post("http://localhost:4000/getUserDetailsByEmail", { userEmail })
      .then((res) => {
        if (res.data.status === 1) {
          setUserName(res.data.response[0].firstname);
          setEmail(res.data.response[0].email);
          setPassword(res.data.response[0].password);
        } else {
          console.log("else res", res);
        }
      });
  };

  const handleShow = (userName, Email, password) => {
    console.log("handleShow", userName, Email, password);

    setShow(true);
    axios
      .post("http://localhost:4000/getUserDetailsByEmail", { userEmail })
      .then((res) => {
        console.log("res", res);
        if (res.data.status === 1) {
          setFirstname(res.data.response[0].firstname);
          setemail(res.data.response[0].email);
          setpassword(res.data.response[0].password);
        } else {
          console.log("else res", res);
        }
      });
  };

  // upload photo
  const [avatar, setAvatar] = useState("");

  console.log("avatar", avatar);

  const formData = new FormData();

  console.log("formData", formData);

  const handleUploadPhoto = () => {
    formData.append("avatar", avatar);
    console.log("formData", formData);
    fetch("http://localhost:4000/user-profile-photo", {
      // content-type header should not be specified!
      method: "POST",
      body: formData,
      "content-type": "multipart/form-data",
    })
      .then((response) => response.json())
      .then((success) => {
        console.log("success", success);
        // Do something with the successful response
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUserData(userEmail);
  }, [userEmail]);

  return (
    <>
      <Container className="profile_container">
        <Row style={{justifyContent:"center"}}>
          <Col md={{ span: 4, offset: 0 }} className="main_pro_div">
            <Row style={{ padding: "15px 5px" }} className="profile_div">
              <Col md={6} className="profile_image">
                <form>
                  <div className="profile_image_div">
                    <input
                      type="file"
                      id="file"
                      style={{ display: "none" }}
                      onChange={(e) => setAvatar(e.target.files[0])}
                    />
                    <label className="label" htmlFor="file">
                      <AddPhotoAlternateOutlinedIcon />
                    </label>
                  </div>
                  <button onClick={handleUploadPhoto} type="button">
                    <CloudUploadOutlinedIcon />
                  </button>
                </form>
              </Col>
              <Col md={6}>
                <div className="rank">
                  <span style={{fontSize:"15px"}}>{userName}</span>
                  <span style={{color:"darkorange"}}>Rank- 1075420</span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={{ span: 6, offset: 1 }} className="user_detail">
            <div className="details">
              <div style={{padding:"10px 15px"}}>
                <span style={{color:'silver'}}>UserName</span><br/>
                <span style={{paddingLeft:'10px'}}>{userName}</span>
                <br />
                <span style={{color:'silver'}}>Email</span><br/>
                <span style={{paddingLeft:'10px'}}>{Email}</span>
                <br />
                <span style={{color:'silver'}}>Password</span><br/>
                <span style={{paddingLeft:'10px'}}>{Password}</span>
              </div>
              <div className="edit-button">
                <BorderColorOutlinedIcon
                  onClick={() => handleShow(userName, Email, Password)}
                />
              </div>
            </div>
          </Col>
        </Row>
        <div className="progress_div">
          <Row style={{justifyContent:'center'}}>
            <Col md={{ span: 6, offset: 0 }} className="main_pro_div">
              <div className="progress_line">
              <span>Solved Problem</span><br/>
                <span>Easy</span>
                <Progress percent={30} />
                <span>Medium</span>
                <Progress percent={15} />
                <span>Hard</span>
                <Progress percent={30} />
              </div>
            </Col>
            <Col md={{ span: 4, offset: 1 }} className="main_pro_div">
              <div className="radial_div">
              <span>Progress</span>
                <Progress
                  style={{ padding: "36px" }}
                  type="circle"
                  percent={75}
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{borderColor:'orange'}}>
          <Modal.Title style={{fontSize:'16px', color:'orange'}}>User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="update_label">Username</Form.Label>
              <Form.Control
              className="update_input"
                type="text"
                placeholder="Username"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                autoFocus
              />
              <Form.Label className="update_label">Email address</Form.Label>
              <Form.Control
              className="update_input"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                autoFocus
              />
              <Form.Label className="update_label">Password</Form.Label>
              <Form.Control
              className="update_input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{borderColor:'orange'}}>
          <Button variant="primary" className="update_btn" onClick={updateProfileDetails}>
            Update profile
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Myprofile;
