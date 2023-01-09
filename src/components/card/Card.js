import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import House from "../../images/house.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Card_() {
  return (
    <div class="card border-0 text-start" style={{ width: "" }}>
      <Card.Img rounded variant="top" src={House} />
      <div class="card-body">
        <h4 class="card-title">Tambon Kamala, Thailand</h4>
        <p class="card-subtitle mb-2 text-muted">Lorem ipsum dolor sit </p>
        <p class="card-subtitle mb-2 text-muted">
          consectetur adipisicing elit.
        </p>
        <p class="card-subtitle mb-2 ">
          <span class="fw-bold"> RMXXX</span>
          <span class="text-muted"> night</span>
        </p>
      </div>
    </div>
  );
}
