import React from "react";
import { CaretRightOutlined } from '@ant-design/icons';
import Card from "react-bootstrap/Card";
// import cardimg from "..//img/cardimg.jpg";

const Cards = (props) => {
  return (
    <div className="card_div">
      <Card className="main_card">
      <span className="card_heading">{props.text1}</span>
      <span className="card_heading" style={{top:'100px'}}>{props.text2}</span>
        <Card.Img className="card-image" variant="top" src={props.image} />
        <Card.Body className="c_body">
          <Card.Title className="c_title">{props.text1} <br/> {props.text2}</Card.Title>
          <button type="button"><CaretRightOutlined /></button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;