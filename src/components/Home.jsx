import React from "react";
import explore1 from "../img/explore1.png";
import { useNavigate } from "react-router-dom";
import question from "../img/Questions.png";
import company from "../img/company.png";
import dev from "../img/dev.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Image } from "antd";

const Home = () => {
  const navigate = useNavigate();

  const getStarted = () => {
    setTimeout(() => {
      navigate("/signin");
    }, 500);
  };

  const handleExplore = () => {
    setTimeout(() => {
      navigate("/signin");
    }, 500);
  };

  return (
    <div>
      <div className="home_bg">
        <div className="banner_div">
          <div className="banner_content">
            <h1>A Platform that can Change your Life</h1>
            <p>
              CodeUNIT is the best platform to help you enhance your skills,
              expand <br /> your knowledge and prepare for technical interviews.
            </p>
            <button type="button" onClick={getStarted}>
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Container style={{ marginBottom: "20px" }}>
        <Row>
          <Col style={{ paddingTop: "30px" }}>
            <div className="explore">
              <div className="explore_div">
                <h1>Start Exploring</h1>
              </div>
              <p>
                Explore is a well-organized tool that helps you get the most out
                of codeUNIT by providing structure to guide your progress
                towards the <br /> next step in your programming career,
                providing structure to guide your progress towards the next step
                in your programming career.
              </p>
              <button type="button" onClick={handleExplore}>
                Get Started
              </button>
            </div>
          </Col>
          <Col>
            <div className="explore_img">
              <Image width={300} src={explore1} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="q_div">
              <div className="q_img">
                <Image width={160} src={question} />
              </div>
              <div className="q_heading">
                <h1>Questions, Community & Contests</h1>
              </div>
              <div className="q_para">
                <p>
                  Over 2650 questions for you to practice. Come and join one of
                  the largest tech communities with hundreds of thousands of
                  active users and participate in our contests to challenge
                  yourself and earn rewards.
                </p>
              </div>
              <div className="q_btn">
                <button type="button">View Questions ?</button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="com_div">
              <div className="q_img">
                <Image width={190} src={company} />
              </div>
              <div className="q_heading">
                <h1>Companies & Candidates</h1>
              </div>
              <div className="q_para">
                <p>
                  Not only does LeetCode prepare candidates for technical
                  interviews, we also help companies identify top technical
                  talent. From sponsoring contests to providing online
                  assessments and training, we offer numerous services to
                  businesses.
                </p>
              </div>
              <div className="q_btn">
                <button type="button">Business Opportunities</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div style={{ margin: "20px 0px 10px 0px" }}>
              <div className="d_img">
                <Image width={200} src={dev} />
              </div>
              <div className="d_heading">
                <h1>Developer</h1>
              </div>
              <div className="d_para">
                <p>
                  We now support 14 popular coding languages. At our core,
                  codeUNIT is about developers. Our powerful development tools
                  such as Playground help you test, debug and even write your
                  own projects online.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
