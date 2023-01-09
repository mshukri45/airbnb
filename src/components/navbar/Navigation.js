import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../images/logo.png";
import { FaGlobe } from "react-icons/fa";
import { FaGripLines } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import "./navigation.css";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <>
      <nav
        class="navbar navbar-expand-md bg-light border-bottom mb-2 sticky-top "
        style={{ height: "80px" }}
      >
        <input
          class="navbar-toggler flex-fill rounded-pill mx-3"
          type="input"
        ></input>

        <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
          <div class="container-fluid d-flex justify-content-around">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-text-center"
              />
              <span class="text-danger fw-bold">airbnb</span>
            </Navbar.Brand>

            <div
              class="navbar-nav border rounded-pill align-items-center"
              style={{ height: "48px" }}
            >
              <a class="nav-link border-end py-0 text-body" href={"#"}>
                Anywhere
              </a>
              <a class="nav-link border-end py-0 text-body" href={"#"}>
                Any week
              </a>
              <a class="nav-link py-0 text-body" href={"#"}>
                Add guests <FaSearch className="" />
              </a>
            </div>
            <div class="align-items-center me-5">
              <ul class="navbar-nav ">
                <li class="nav-item align-self-center ">
                  <a class="nav-link text-body" href={"#"}>
                    airbnb your home
                  </a>
                </li>
                <li class="nav-item align-self-center mx-4">
                  <FaGlobe className="" />
                </li>
                <li class="nav-item align-self-center">
                  <div
                    className="d-flex align-items-center border rounded-pill"
                    style={{ height: "48px" }}
                  >
                    <FaGripLines className="topRightIcon" />
                    <FaRegUserCircle className="topRightReg me-2" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg bg-light border-top fixed-bottom">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  © 2022 Airbnb, Inc.
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Privacy
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Terms</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Sitemap</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Destination</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
