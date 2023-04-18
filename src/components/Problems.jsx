import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import { Carousel } from "antd";

const Problems = () => {
  // const navigate = useNavigate();
  const questionBank = [
    {
      id: 1,
      title: "Two sum",
      difficulty: "Easy",
      frequency: "2",
      description:
        "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    },
    {
      id: 2,
      title: "Add two numbers",
      difficulty: "Medium",
      frequency: "4",
      description:
        "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    },
    {
      id: 3,
      title: "Longest substring without repeating characters",
      difficulty: "Medium",
      frequency: "4",
      description:
        "Given a string s, find the length of the longest substring without repeating characters.",
    },
    {
      id: 4,
      title: "Median of two sorted arrays",
      difficulty: "Hard",
      frequency: "5",
      description:
        "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.The overall run time complexity should be O(log (m+n)).",
    },
    {
      id: 5,
      title: "Longest palindromic substring",
      difficulty: "Mediam",
      frequency: "2",
      description:
        "The string 'PAYPALISHIRING' is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)",
    },
  ];

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 0 }}>
            <Slider />
          </Col>
          <Col md={{ span: 6, offset: 1 }}>
            <Carousel autoplay>
              <div>
                <h3 style={contentStyle}>coDeunit</h3>
              </div>
              <div>
                <h3 style={contentStyle}>Learning in new way</h3>
              </div>
              <div>
                <h3 style={contentStyle}>Everything is Logic</h3>
              </div>
              <div>
                <h3 style={contentStyle}>let's TRY... It's Your turn.</h3>
              </div>
            </Carousel>
          </Col>
        </Row>
        <h1 className="p_prob">Problems</h1>
        <div style={{ marginTop: "20px" }}>
          <Table striped bordered>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Title</th>
                <th>Level</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              {questionBank.map((question, index) => {
                return (
                  <tr key={index}>
                    <td>{question.id}</td>
                    <td
                      style={{
                        textAlign: "left",
                      }}
                    >
                      <Link to={`/developer/${index}`} className="que_btn">
                        {question.title}
                      </Link>
                    </td>
                    <td style={{ textAlign: "left" }}>{question.difficulty}</td>
                    <td>{question.frequency}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default Problems;
