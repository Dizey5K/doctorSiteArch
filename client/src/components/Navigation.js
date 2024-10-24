import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HashLink as Link } from "react-router-hash-link";

const Navigation = ({ _path }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });
  return (
    <div>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        className="bg-first"
        style={{
          textShadow: "none",
        }}
      >
        <Container>
          <Navbar.Brand className="text-black simple-title  fw-bolder">
            <Link className="text-fourth text-decoration-none" to="/">
              Подолог Глухова
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className=" d-lg-flex justify-content-start   justify-content-lg-center "
          >
            <Nav
              className={
                width > 992
                  ? "me-5 ps-1 pe-1 simple-title bg-white rounded-pill"
                  : "simple-title align-items-start"
              }
              activeKey="/"
              style={{ minHeight: 45 }}
            >
              <Nav.Item className="d-flex justify-content-center align-items-center">
                {_path === "/" ? (
                  <Link
                    to="/"
                    className=" text-black bg-first rounded-pill h-75 justify-content-center d-flex text-center align-items-center ps-1 pe-1  text-decoration-none"
                  >
                    Главная
                  </Link>
                ) : (
                  <Link
                    to="/"
                    className="mt-1 mb-1 bg-transparent text-black h-75 justify-content-center d-flex text-center align-items-center ps-1 pe-1  text-decoration-none "
                  >
                    Главная
                  </Link>
                )}
              </Nav.Item>
              <Nav.Item className="d-flex justify-content-center align-items-center ">
                {_path === "/about" ? (
                  <Link
                    to="/about"
                    className=" text-black bg-first rounded-pill h-75 justify-content-center d-flex text-center align-items-center ps-1 pe-1  text-decoration-none"
                  >
                    Обо мне
                  </Link>
                ) : (
                  <Link
                    to="/about"
                    className="mt-1 mb-1 bg-transparent text-black h-75 justify-content-center d-flex text-center align-items-center ps-1 pe-1  text-decoration-none "
                  >
                    Обо мне
                  </Link>
                )}
              </Nav.Item>
              <Nav.Item className="d-flex justify-content-center align-items-center ">
                {_path === "/services" ? (
                  <Link
                    to="/services"
                    className=" text-black bg-first rounded-pill h-75 justify-content-center d-flex text-center align-items-center ps-1 pe-1  text-decoration-none"
                  >
                    Услуги
                  </Link>
                ) : (
                  <Link
                    to="/services"
                    className="mt-1 mb-1 bg-transparent text-black h-75 justify-content-center d-flex text-center align-items-center ps-1 pe-1  text-decoration-none "
                  >
                    Услуги
                  </Link>
                )}
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <Link
            className="hero-button d-none pt-2 pb-2 d-lg-block btn bg-white text-black rounded-pill border-white"
            to="#contact"
            size="m"
          >
            <span className="simple-title mt-1 mb-1">Связаться со мной</span>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
