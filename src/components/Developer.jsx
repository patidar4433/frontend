import React, { useState, useEffect } from "react";
import Split from "react-split";
import COdeEditor from "./CodeEditor";
import { Button } from "antd";
import { PlayCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
const Developer = () => {
  const [questionDetails, setQuestionDetails] = useState("");
  const [title, setTitle] = useState("");
  const { id } = useParams();
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

  const getQuestionDetails = (id) => {
    var question = questionBank[id].description;
    var questionHeading = questionBank[id].title;
    setQuestionDetails(question);
    setTitle(questionHeading);
  };
  useEffect(() => {
    getQuestionDetails(id);
  }, [id]);

  const languages = [
    { value: "0", text: "Language" },
    { value: "c", text: "C" },
    { value: "c++", text: "C++" },
    { value: "java", text: "Java" },
    { value: "javascript", text: "JavaScript" },
    { value: "python", text: "Python" },
  ];
  const [language, setLanguage] = useState(languages[0].value);
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const themes = [
    { value: "", text: "Theme" },
    { value: "github", text: "Github" },
    { value: "twilight", text: "Twilight" },
    { value: "monokai", text: "Monokai" },
    { value: "terminal", text: "Terminal" },
    { value: "tomorrow", text: "Tomorrow" },
  ];

  const [theme, setTheme] = useState(themes[0].value);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="developer_div">
      <Container>
        <h1 className="dev_heading">Problem -</h1>
        <Row>
          {/* <Col> */}
          <Split
            style={{ display: "flex" }}
            sizes={[50, 50]}
            minSize={350}
            direction="horizontal"
            cursor="col-resize"
            gutterSize={5}
            gutterAlign="center"
          >
            <div>
              <div className="dev_1">
                <h4>{title}</h4>
                <div>
                  <p>{questionDetails}</p>
                </div>
              </div>
              <div className="dev_1_result">
                <span>
                  OutPut
                </span>
                <br />
                <hr/>
                <p style={{ textAlign: "left", fontSize:"14px" }}>
                  Your output will display here...!
                </p>
              </div>
            </div>
            <div>
              <div className="codeEditor_div">
                <div className="language">
                  <select value={language} onChange={handleLanguageChange}>
                    {languages.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.text}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="theme_btn">
                  <select value={theme} onChange={handleThemeChange}>
                    {themes.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.text}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="run_btn">
                  <Button type="primary" ghost>
                    <PlayCircleOutlined /> Run
                  </Button>
                </div>
                <div className="submit_btn">
                  <Button type="primary" ghost>
                    Submit <RightCircleOutlined />
                  </Button>
                </div>
              </div>
              <COdeEditor theme={theme} language={language}/>
            </div>
          </Split>
          {/* </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Developer;
