import React from "react";
import Card_ from "../card/Card";
import "./cards.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Cards() {
  return (
    <div className="container-fluid pt-5">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
        <Card_ />
        <Card_ />
        <Card_ />
        <Card_ />
        <Card_ />
        <Card_ />
        <Card_ />
        <Card_ />
        <Card_ />
        <Card_ />
        <Card_ />
        <Card_ />
        <Card_ />
        <Card_ />
        <Card_ />
        <Card_ />
        <Card_ />
        <Card_ />
        <Card_ />
        <Card_ />
      </div>
    </div>
  );
}
