import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import legs from "../images/landin-hero.jpg";

import { MDBCol, MDBRow, MDBInput, MDBTextArea } from "mdb-react-ui-kit";

import { motion } from "framer-motion";

const Hero = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });
  return (
    <div className="mt-5 pt-5">
      <Container style={{ marginTop: width > 1400 ? 150 : 50 }}>
        <Row>
          {width > 992 ? (
            <>
              <Col className="col-6">
                <h1 className="text-fourth" style={{ fontSize: 60 }}>
                  Комплексный уход и {width > 1400 ? <br /> : <></>}
                  забота о ваших ногах
                </h1>
                <p className="text-third mb-5">
                  Я &ndash; Наталья, специалист-подолог с большим стажем ( более
                  7 лет). Преподаватель Института подологии и спасатель ваших
                  ног.
                </p>
                <motion.a
                  href="#contact"
                  animate={{ x: 0, transition: { duration: 0.5 } }}
                  whileHover={{ marginRight: 5, paddingRight: 50 }}
                  className=" text-decoration-none bg-fourth text-white p-2 rounded-5 ps-3 pe-3 "
                >
                  Записаться на приём{" "}
                </motion.a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.8em"
                  viewBox="0 0 320 512"
                  style={{ marginLeft: -17 }}
                >
                  <path
                    fill="#fff"
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  />
                </svg>
                <motion.a
                  animate={{ x: 0, transition: { delay: 0.5 } }}
                  whileHover={{ marginRight: 5 }}
                  className=" text-decoration-none text-fourth p-2 rounded-5 ps-3 pe-3 "
                  href="/about"
                >
                  Обо мне{" "}
                </motion.a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.8em"
                  viewBox="0 0 320 512"
                  style={{ marginLeft: -17 }}
                >
                  <path
                    fill="#2f502f"
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  />
                </svg>
              </Col>
              <Col>
                <img
                  alt=""
                  src={legs}
                  className="rounded-5 border border-2 border-light-subtle "
                  style={{
                    marginTop: width > 1400 ? -90 : 0,
                    marginLeft: 100,
                    height: width > 1400 ? 500 : width > 1200 ? 400 : 350,
                    width: width > 1400 ? 500 : width > 1200 ? 400 : 350,
                  }}
                ></img>
              </Col>
            </>
          ) : (
            <>
              {" "}
              <Col className="col-12">
                <h1
                  className="text-fourth"
                  style={{ fontSize: width > 450 ? 60 : width / 13 }}
                >
                  Комплексный уход и {width > 1400 ? <br /> : <></>}
                  забота {width > 768 || width < 450 ? <></> : <br />} о ваших
                  ногах
                </h1>
                <p
                  className="text-third mb-5"
                  style={{ fontSize: width > 450 ? "" : width / 28 }}
                >
                  Я &ndash; Наталья, специалист-подолог с большим стажем ( более
                  7 лет). Преподаватель Института подологии и спасатель ваших
                  ног.
                </p>
                <motion.a
                  href="#contact"
                  animate={{ x: 0, transition: { duration: 0.5 } }}
                  whileHover={{ marginRight: 5, paddingRight: 50 }}
                  className=" text-decoration-none bg-fourth text-white p-2 rounded-5 ps-3 pe-3 "
                >
                  Записаться на приём {width > 325 ? "" : <br />}
                </motion.a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.8em"
                  viewBox="0 0 320 512"
                  style={{
                    marginLeft: -17,
                    marginBottom: width > 325 ? 0 : 50,
                  }}
                >
                  <path
                    fill="#fff"
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  />
                </svg>
                <motion.a
                  animate={{ x: 0, transition: { delay: 0.5 } }}
                  whileHover={{
                    marginRight: 5,
                  }}
                  className=" text-decoration-none text-fourth p-2 rounded-5 ps-3 pe-3 "
                  href="/about"
                >
                  Обо мне{" "}
                </motion.a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.8em"
                  viewBox="0 0 320 512"
                  style={{ marginLeft: -17 }}
                >
                  <path
                    fill="#2f502f"
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  />
                </svg>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

const Advantages = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });
  return (
    <>
      {width > 1200 ? (
        <>
          <motion.div
            id="advantages"
            style={{ minHeight: "200px" }}
            className="bg-first text-fourth pt-5 mt-5 border-top border-bottom pb-5"
          >
            <motion.div
              className="container"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1,
                type: "spring",
                stiffness: 30,
              }}
            >
              <Row className="d-flex text-fourth justify-content-start align-items-center text-center ">
                <Col className="border border-5 p-3 pt-4 rounded-5 col-3 me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="5em"
                    viewBox="0 0 384 512"
                    style={{ fill: "#2f502f" }}
                  >
                    <path d="M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z" />
                  </svg>
                  <h3 className="simple-title fs-2">Без боли</h3>
                </Col>
                <Col className="border border-5 p-3 pt-4 rounded-5 col-3 me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="5em"
                    viewBox="0 0 640 512"
                    style={{ fill: "#2f502f" }}
                  >
                    <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 352h8.2c32.3-39.1 81.1-64 135.8-64c5.4 0 10.7 .2 16 .7V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM320 352H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H360.2C335.1 449.6 320 410.5 320 368c0-5.4 .2-10.7 .7-16l-.7 0zm320 16a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM496 288c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16z" />
                  </svg>
                  <h3 className="simple-title fs-2">7 лет опыта</h3>
                </Col>{" "}
                <Col className="border border-5 p-3 pt-4 rounded-5 col-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="5em"
                    viewBox="0 0 448 512"
                    style={{ fill: "#2f502f" }}
                  >
                    <path d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z" />
                  </svg>
                  <h3 className="simple-title fs-2 text-nowrap ">
                    Авторские техники
                  </h3>
                </Col>
                <Col className="w-100 text-nowrap ">
                  <p className="fs-5">
                    <motion.a
                      animate={{ x: 0, transition: { duration: 1 } }}
                      whileHover={{ marginRight: 10 }}
                      className=" text-decoration-none  text-fourth"
                      href="/about"
                    >
                      Подробнее
                    </motion.a>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="0.8em"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="#2f502f"
                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                      />
                    </motion.svg>{" "}
                    + 7 937 704 66 66
                  </p>
                </Col>
              </Row>
            </motion.div>
          </motion.div>
        </>
      ) : width > 768 ? (
        <>
          <motion.div
            id="advantages"
            style={{ minHeight: "200px" }}
            className="bg-first text-fourth pt-5 mt-5 border-top border-bottom pb-5"
          >
            <motion.div
              className="container"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1,
                duration: 0.1,
                type: "spring",
                stiffness: 30,
              }}
            >
              <Row className="d-flex text-fourth justify-content-around align-items-center text-center ">
                <Col className="border border-5 border-end-0 rounded-end-0 p-3 pt-4 rounded-5 col-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="5em"
                    viewBox="0 0 384 512"
                    style={{ fill: "#2f502f" }}
                  >
                    <path d="M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z" />
                  </svg>
                  <h3
                    className={
                      width > 992 ? "simple-title fs-2" : "simple-title fs-3"
                    }
                  >
                    Без боли
                  </h3>
                </Col>
                <Col className="border border-5 border-start-0  border-end-0 p-3 pt-4  col-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="5em"
                    viewBox="0 0 640 512"
                    style={{ fill: "#2f502f" }}
                  >
                    <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 352h8.2c32.3-39.1 81.1-64 135.8-64c5.4 0 10.7 .2 16 .7V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM320 352H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H360.2C335.1 449.6 320 410.5 320 368c0-5.4 .2-10.7 .7-16l-.7 0zm320 16a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM496 288c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16z" />
                  </svg>
                  <h3
                    className={
                      width > 992 ? "simple-title fs-2" : "simple-title fs-3"
                    }
                  >
                    7 лет опыта
                  </h3>
                </Col>{" "}
                <Col className="border border-5 p-3 pt-4 rounded-5 col-4 border-start-0 rounded-start-0 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="5em"
                    viewBox="0 0 448 512"
                    style={{ fill: "#2f502f" }}
                  >
                    <path d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z" />
                  </svg>
                  <h3
                    className={
                      width > 992
                        ? "simple-title fs-2"
                        : "simple-title fs-3 text-nowrap"
                    }
                  >
                    Авторские техники
                  </h3>
                </Col>
                <Col className="w-100 text-nowrap pt-3">
                  <p className="fs-5">
                    <motion.a
                      animate={{ x: 0, transition: { duration: 1 } }}
                      whileHover={{ marginRight: 10 }}
                      className=" text-decoration-none   text-fourth"
                      href="/about"
                    >
                      Подробнее
                    </motion.a>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="0.8em"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="#2f502f"
                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                      />
                    </motion.svg>{" "}
                    + 7 937 704 66 66
                  </p>
                </Col>
              </Row>
            </motion.div>
          </motion.div>
        </>
      ) : (
        <>
          <div
            id="advantages"
            style={{ minHeight: "200px" }}
            className="bg-first text-fourth pt-5 mt-5 border-top border-bottom pb-5"
          >
            <div className="container">
              <Row className="d-flex flex-column text-fourth justify-content-around align-items-center text-center ">
                <Col className="border border-5 p-3 pt-4 rounded-5 col-8 mb-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="5em"
                    viewBox="0 0 384 512"
                    style={{ fill: "#2f502f" }}
                  >
                    <path d="M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z" />
                  </svg>
                  <h3
                    className={
                      width > 992 ? "simple-title fs-2" : "simple-title fs-3"
                    }
                  >
                    Без боли
                  </h3>
                </Col>
                <Col className="border border-5 rounded-5  p-3 pt-4 mb-2  col-8 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="5em"
                    viewBox="0 0 640 512"
                    style={{ fill: "#2f502f" }}
                  >
                    <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 352h8.2c32.3-39.1 81.1-64 135.8-64c5.4 0 10.7 .2 16 .7V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM320 352H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H360.2C335.1 449.6 320 410.5 320 368c0-5.4 .2-10.7 .7-16l-.7 0zm320 16a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM496 288c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16z" />
                  </svg>
                  <h3
                    className={
                      width > 992 ? "simple-title fs-2" : "simple-title fs-3"
                    }
                  >
                    7 лет опыта
                  </h3>
                </Col>{" "}
                <Col className="border border-5 p-3 pt-4 rounded-5 col-8 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="5em"
                    viewBox="0 0 448 512"
                    style={{ fill: "#2f502f" }}
                  >
                    <path d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z" />
                  </svg>
                  <h3
                    className={
                      width > 992
                        ? "simple-title fs-2"
                        : "simple-title fs-3 text-nowrap"
                    }
                  >
                    Авторские техники
                  </h3>
                </Col>
                <Col className="w-100 text-nowrap pt-3">
                  <p className="fs-5">
                    <motion.a
                      animate={{ x: 0, transition: { duration: 1 } }}
                      whileHover={{ marginRight: 10 }}
                      className=" text-decoration-none   text-fourth"
                      href="#"
                    >
                      Подробнее
                    </motion.a>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="0.8em"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="#2f502f"
                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                      />
                    </motion.svg>{" "}
                    +7 777-77-77
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const Pedicure = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  const [card1, setCard1] = useState(false);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);
  const [card4, setCard4] = useState(false);
  const [card5, setCard5] = useState(false);
  const [card6, setCard6] = useState(false);
  return (
    <div id="advantages" className=" text-fourth playful-regular pb-5 ">
      <Container>
        <Row className=" pe-5">
          <h2
            className="simple-title text-fourth text-start pe-5"
            style={{ fontSize: "50px" }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              height="0.5em"
              className="me-2"
              viewBox="0 0 384 512"
              initial={{ x: -100 }}
              whileInView={{
                scale: [0.1, 1],
                x: [-100, 0],
                transition: {
                  delay: 0.2,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 70,
                },
              }}
              viewport={{ once: true }}
            >
              <path
                fill="#2f502f"
                d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
              />
            </motion.svg>
            Виды услуг
          </h2>
        </Row>
      </Container>
      <Container
        id="services"
        className="bg-transparent d-flex pe-3 rounded-5 "
        style={{}}
      >
        <Container className="">
          {width > 768 ? (
            <>
              <Row className="d-flex justify-content-around text-center mb-5 mt-5">
                <motion.div
                  style={{
                    width:
                      width > 1200 ? "21rem" : width > 992 ? "18rem" : "14rem",
                    height: "230px",
                  }}
                  className="card border-0 border-bottom shadow-sm  rounded-0"
                  initial={{ background: "#eff6ef" }}
                  whileHover={{ background: "#ffffff", x: -10 }}
                  onMouseEnter={() => setCard1(true)}
                  onMouseLeave={() => setCard1(false)}
                >
                  <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth ">
                    <motion.a
                      href="/service1"
                      className={
                        width > 992
                          ? " btn-link simple-title fs-2 stretched-link text-decoration-none text-fourth "
                          : " btn-link simple-title fs-4 stretched-link text-decoration-none text-fourth "
                      }
                      animate={{
                        opacity: card1 ? 0 : 1,
                        y: card1
                          ? [0, width > 1200 ? -50 : width > 992 ? -70 : -85]
                          : 0,
                      }}
                      style={{}}
                    >
                      Корректировка ногтевой пластины
                    </motion.a>
                    <motion.p
                      className="d-flex flex-column"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: card1 ? 1 : 0,
                        y: card1
                          ? width > 1200
                            ? -100
                            : width > 992
                            ? -150
                            : -125
                          : 0,
                      }}
                      style={{ scale: width > 992 ? 1 : 0.87 }}
                    >
                      При нарушении/деформации, установка коррекционной системы
                      титановая нить/система "ЗТО"
                      <Link
                        to="/prices"
                        className={
                          width > 768
                            ? " pt-2 pb-2 btn bg-fourth text-white mt-4 rounded-pill border-white"
                            : "pt-2 pb-2 btn bg-fourth text-white mt-2 rounded-pill border-white"
                        }
                      >
                        Подробнее
                      </Link>
                    </motion.p>
                  </Card.Body>
                </motion.div>
                <motion.div
                  style={{
                    height: "230px",
                    width:
                      width > 1200 ? "21rem" : width > 992 ? "18rem" : "14rem",
                  }}
                  className="card border-0 rounded-0 shadow-sm "
                  initial={{ background: "#eff6ef" }}
                  whileHover={{ background: "#ffffff", x: -10 }}
                  onMouseEnter={() => setCard2(true)}
                  onMouseLeave={() => setCard2(false)}
                >
                  <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth  ">
                    <motion.a
                      href="/service2"
                      className={
                        width > 992
                          ? " btn-link simple-title fs-2 stretched-link text-decoration-none text-fourth "
                          : " btn-link simple-title fs-4 stretched-link text-decoration-none text-fourth "
                      }
                      animate={{
                        opacity: card2 ? 0 : 1,
                        y: card2
                          ? [0, width > 1200 ? -50 : width > 992 ? -80 : -90]
                          : 0,
                      }}
                    >
                      Гигиенический педикюр
                    </motion.a>
                    <motion.p
                      className="d-flex flex-column"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: card2 ? 1 : 0,
                        y: card2 ? (width > 992 ? -100 : -85) : 0,
                      }}
                      style={{ scale: width > 992 ? 1 : 0.87 }}
                    >
                      Подразумевает отсутствие каких-либо проблем
                      <Link
                        to="/prices"
                        className={
                          " pt-2 pb-2 btn bg-fourth text-white  rounded-pill border-white"
                        }
                        style={{ marginTop: 95 }}
                      >
                        Подробнее
                      </Link>
                    </motion.p>
                  </Card.Body>
                </motion.div>

                <motion.div
                  style={{
                    width:
                      width > 1200 ? "21rem" : width > 992 ? "18rem" : "14rem",
                    height: "230px",
                  }}
                  className="card border-0 rounded-0 shadow-sm "
                  initial={{ background: "#eff6ef" }}
                  whileHover={{ background: "#ffffff", x: -10 }}
                  onMouseEnter={() => setCard3(true)}
                  onMouseLeave={() => setCard3(false)}
                >
                  <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth  ">
                    <motion.a
                      href="/service3"
                      className={
                        width > 992
                          ? " btn-link simple-title fs-2 stretched-link text-decoration-none text-fourth "
                          : " btn-link simple-title fs-4 stretched-link text-decoration-none text-fourth "
                      }
                      animate={{
                        opacity: card3 ? 0 : 1,
                        y: card3
                          ? [0, width > 1200 ? -50 : width > 992 ? -70 : -85]
                          : 0,
                      }}
                    >
                      Парамедецинский педикюр
                    </motion.a>
                    <motion.p
                      className="d-flex flex-column"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: card3 ? 1 : 0,
                        y: card3 ? (width > 992 ? -100 : -85) : 0,
                      }}
                      style={{ scale: width > 992 ? 1 : 0.87 }}
                    >
                      Наличие проблем: глубокие трещины, мозоли, вросшие ногти
                      <Link
                        to="/prices"
                        className={
                          " pt-2 pb-2 btn bg-fourth text-white rounded-pill border-white"
                        }
                        style={{ marginTop: 70 }}
                      >
                        Подробнее
                      </Link>
                    </motion.p>
                  </Card.Body>
                </motion.div>
              </Row>
              <Row className="d-flex justify-content-around text-center">
                <motion.div
                  style={{
                    width:
                      width > 1200 ? "21rem" : width > 992 ? "18rem" : "14rem",
                    height: "230px",
                  }}
                  className="card border-0 rounded-0 shadow-sm "
                  initial={{ background: "#eff6ef" }}
                  whileHover={{ background: "#ffffff", x: -10 }}
                  onMouseEnter={() => setCard4(true)}
                  onMouseLeave={() => setCard4(false)}
                >
                  <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth  ">
                    <motion.a
                      href="/service4"
                      className={
                        width > 992
                          ? " btn-link simple-title fs-2 stretched-link text-decoration-none text-fourth "
                          : " btn-link simple-title fs-4 stretched-link text-decoration-none text-fourth "
                      }
                      animate={{
                        opacity: card4 ? 0 : 1,
                        y: card4
                          ? [0, width > 1200 ? -50 : width > 992 ? -70 : -85]
                          : 0,
                      }}
                    >
                      Мужской педикюр
                    </motion.a>
                    <motion.p
                      className="d-flex flex-column"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: card4 ? 1 : 0,
                        y: card4
                          ? width > 1200
                            ? -55
                            : width > 992
                            ? -100
                            : -85
                          : 0,
                      }}
                      style={{ scale: width > 992 ? 1 : 0.87 }}
                    >
                      Гигиеническая обработка
                      <Link
                        to="/prices"
                        className={
                          "pt-2 pb-2 btn bg-fourth text-white rounded-pill border-white"
                        }
                        style={{ marginTop: width > 768 ? 125 : 0 }}
                      >
                        Подробнее
                      </Link>
                    </motion.p>
                  </Card.Body>
                </motion.div>

                <motion.div
                  style={{
                    width:
                      width > 1200 ? "21rem" : width > 992 ? "18rem" : "14rem",
                    height: "230px",
                  }}
                  className="card border-0 rounded-0 shadow-sm "
                  initial={{ background: "#eff6ef" }}
                  whileHover={{ background: "#ffffff", x: -10 }}
                  onMouseEnter={() => setCard5(true)}
                  onMouseLeave={() => setCard5(false)}
                >
                  <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth  ">
                    <motion.a
                      href="/service5"
                      className={
                        width > 992
                          ? " btn-link simple-title fs-2 stretched-link text-decoration-none text-fourth "
                          : " btn-link simple-title fs-4 stretched-link text-decoration-none text-fourth "
                      }
                      animate={{
                        opacity: card5 ? 0 : 1,
                        y: card5
                          ? [0, width > 1200 ? -50 : width > 992 ? -70 : -85]
                          : 0,
                      }}
                    >
                      Зачистка ногтя
                    </motion.a>
                    <motion.p
                      className="d-flex flex-column"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: card5 ? 1 : 0,
                        y: card5 ? (width > 992 ? -55 : -50) : 0,
                      }}
                      style={{ scale: width > 992 ? 1 : 0.87 }}
                    >
                      На одном пальце
                      <Link
                        to="/prices"
                        className={
                          "pt-2 pb-2 btn bg-fourth text-white rounded-pill border-white"
                        }
                        style={{
                          marginTop: 125,
                          marginLeft: "-25%",
                          width: "150%",
                        }}
                      >
                        Подробнее
                      </Link>
                    </motion.p>
                  </Card.Body>
                </motion.div>
                <motion.div
                  style={{
                    width:
                      width > 1200 ? "21rem" : width > 992 ? "18rem" : "14rem",
                    height: "230px",
                  }}
                  className="card border-0 rounded-0 shadow-sm "
                  initial={{ background: "#eff6ef" }}
                  whileHover={{ background: "#ffffff", x: -10 }}
                  onMouseEnter={() => setCard6(true)}
                  onMouseLeave={() => setCard6(false)}
                >
                  <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth  ">
                    <motion.a
                      href="/service6"
                      className={
                        width > 992
                          ? " btn-link simple-title fs-2 stretched-link text-decoration-none text-fourth "
                          : " btn-link simple-title fs-4 stretched-link text-decoration-none text-fourth "
                      }
                      animate={{
                        opacity: card6 ? 0 : 1,
                        y: card6
                          ? [0, width > 1200 ? -50 : width > 992 ? -70 : -85]
                          : 0,
                      }}
                    >
                      Обработка стержневой мозоли
                    </motion.a>
                    <motion.p
                      className="d-flex flex-column"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: card6 ? 1 : 0,
                        y: card6
                          ? width > 1200
                            ? -100
                            : width > 992
                            ? -150
                            : -115
                          : 0,
                      }}
                      style={{ scale: width > 992 ? 1 : 0.87 }}
                    >
                      Обработка стержневой мазоли
                      <Link
                        to="/prices"
                        className={
                          "pt-2 pb-2 btn bg-fourth text-white rounded-pill border-white"
                        }
                        style={{
                          marginTop: width > 1200 ? 125 : 100,
                          marginLeft: "5%",
                          width: "90%",
                        }}
                      >
                        Подробнее
                      </Link>
                    </motion.p>
                  </Card.Body>
                </motion.div>
              </Row>
            </>
          ) : width > 576 ? (
            <>
              <Row className="d-flex justify-content-around text-center mb-5 mt-5">
                <motion.div
                  style={{
                    width: "14rem",
                    height: "230px",
                  }}
                  className="card border-0 border-bottom shadow-sm  rounded-0"
                  initial={{ background: "#eff6ef" }}
                  whileHover={{ background: "#ffffff", x: -10 }}
                  onMouseEnter={() => setCard1(true)}
                  onMouseLeave={() => setCard1(false)}
                >
                  <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth ">
                    <motion.a
                      href="/service1"
                      className={
                        " btn-link simple-title fs-4 stretched-link text-decoration-none text-fourth "
                      }
                      animate={{
                        opacity: card1 ? 0 : 1,
                        y: card1 ? [0, -85] : 0,
                      }}
                      style={{}}
                    >
                      Корректировка ногтевой пластины
                    </motion.a>
                    <motion.p
                      className="d-flex flex-column"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: card1 ? 1 : 0,
                        y: card1 ? -110 : 0,
                      }}
                      style={{ scale: 0.87 }}
                    >
                      При нарушении/деформации, установка коррекционной системы
                      титановая нить/система "ЗТО"
                      <Link
                        to="/prices"
                        className={
                          "pt-2 pb-2 btn bg-fourth text-white mt-4 rounded-pill border-white"
                        }
                      >
                        Подробнее
                      </Link>
                    </motion.p>
                  </Card.Body>
                </motion.div>
                <motion.div
                  style={{
                    height: "230px",
                    width:
                      width > 1200 ? "21rem" : width > 992 ? "18rem" : "14rem",
                  }}
                  className="card border-0 rounded-0 shadow-sm "
                  initial={{ background: "#eff6ef" }}
                  whileHover={{ background: "#ffffff", x: -10 }}
                  onMouseEnter={() => setCard2(true)}
                  onMouseLeave={() => setCard2(false)}
                >
                  <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth  ">
                    <motion.a
                      href="/service2"
                      className={
                        width > 992
                          ? " btn-link simple-title fs-2 stretched-link text-decoration-none text-fourth "
                          : " btn-link simple-title fs-4 stretched-link text-decoration-none text-fourth "
                      }
                      animate={{
                        opacity: card2 ? 0 : 1,
                        y: card2
                          ? [0, width > 1200 ? -50 : width > 992 ? -80 : -90]
                          : 0,
                      }}
                    >
                      Гигиенический педикюр
                    </motion.a>
                    <motion.p
                      className="d-flex flex-column"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: card2 ? 1 : 0,
                        y: card2 ? -75 : 0,
                      }}
                      style={{ scale: width > 992 ? 1 : 0.87 }}
                    >
                      Подразумевает отсутствие каких-либо проблем
                      <Link
                        to="/prices"
                        className={
                          " pt-2 pb-2 btn bg-fourth text-white mt-5 rounded-pill border-white"
                        }
                      >
                        Подробнее
                      </Link>
                    </motion.p>
                  </Card.Body>
                </motion.div>
              </Row>
              <Row className="d-flex justify-content-around text-center mb-5">
                <motion.div
                  style={{
                    width:
                      width > 1200 ? "21rem" : width > 992 ? "18rem" : "14rem",
                    height: "230px",
                  }}
                  className="card border-0 rounded-0 shadow-sm "
                  initial={{ background: "#eff6ef" }}
                  whileHover={{ background: "#ffffff", x: -10 }}
                  onMouseEnter={() => setCard3(true)}
                  onMouseLeave={() => setCard3(false)}
                >
                  <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth  ">
                    <motion.a
                      href="/service3"
                      className={
                        width > 992
                          ? " btn-link simple-title fs-2 stretched-link text-decoration-none text-fourth "
                          : " btn-link simple-title fs-4 stretched-link text-decoration-none text-fourth "
                      }
                      animate={{
                        opacity: card3 ? 0 : 1,
                        y: card3
                          ? [0, width > 1200 ? -50 : width > 992 ? -70 : -85]
                          : 0,
                      }}
                    >
                      Парамедецинский педикюр
                    </motion.a>
                    <motion.p
                      className="d-flex flex-column"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: card3 ? 1 : 0,
                        y: card3 ? -80 : 0,
                      }}
                      style={{ scale: width > 992 ? 1 : 0.87 }}
                    >
                      Наличие проблем: глубокие трещины, мозоли, вросшие ногти
                      <Link
                        to="/prices"
                        className={
                          " pt-2 pb-2 btn bg-fourth text-white mt-5 rounded-pill border-white"
                        }
                      >
                        Подробнее
                      </Link>
                    </motion.p>
                  </Card.Body>
                </motion.div>
                <motion.div
                  style={{
                    width:
                      width > 1200 ? "21rem" : width > 992 ? "18rem" : "14rem",
                    height: "230px",
                  }}
                  className="card border-0 rounded-0 shadow-sm "
                  initial={{ background: "#eff6ef" }}
                  whileHover={{ background: "#ffffff", x: -10 }}
                  onMouseEnter={() => setCard4(true)}
                  onMouseLeave={() => setCard4(false)}
                >
                  <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth  ">
                    <motion.a
                      href="/service4"
                      className={
                        width > 992
                          ? " btn-link simple-title fs-2 stretched-link text-decoration-none text-fourth "
                          : " btn-link simple-title fs-4 stretched-link text-decoration-none text-fourth "
                      }
                      animate={{
                        opacity: card4 ? 0 : 1,
                        y: card4
                          ? [0, width > 1200 ? -50 : width > 992 ? -70 : -85]
                          : 0,
                      }}
                    >
                      Мужской педикюр
                    </motion.a>
                    <motion.p
                      className="d-flex flex-column"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: card4 ? 1 : 0,
                        y: card4 ? -80 : 0,
                      }}
                      style={{ scale: width > 992 ? 1 : 0.87 }}
                    >
                      Гигиеническая обработка
                      <Link
                        to="/prices"
                        className={
                          " pt-2 pb-2 btn bg-fourth text-white mt-5 rounded-pill border-white"
                        }
                      >
                        Подробнее
                      </Link>
                    </motion.p>
                  </Card.Body>
                </motion.div>
              </Row>
              <Row className="d-flex justify-content-around text-center">
                <motion.div
                  style={{
                    width:
                      width > 1200 ? "21rem" : width > 992 ? "18rem" : "14rem",
                    height: "230px",
                  }}
                  className="card border-0 rounded-0 shadow-sm "
                  initial={{ background: "#eff6ef" }}
                  whileHover={{ background: "#ffffff", x: -10 }}
                  onMouseEnter={() => setCard5(true)}
                  onMouseLeave={() => setCard5(false)}
                >
                  <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth  ">
                    <motion.a
                      href="/service5"
                      className={
                        width > 992
                          ? " btn-link simple-title fs-2 stretched-link text-decoration-none text-fourth "
                          : " btn-link simple-title fs-4 stretched-link text-decoration-none text-fourth "
                      }
                      animate={{
                        opacity: card5 ? 0 : 1,
                        y: card5
                          ? [0, width > 1200 ? -50 : width > 992 ? -70 : -85]
                          : 0,
                      }}
                    >
                      Зачистка ногтя
                    </motion.a>
                    <motion.p
                      className="d-flex flex-column"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: card5 ? 1 : 0,
                        y: card5 ? -60 : 0,
                      }}
                      style={{ scale: width > 992 ? 1 : 0.87 }}
                    >
                      На одном пальце
                      <Link
                        to="/prices"
                        className={
                          " pt-2 pb-2 btn bg-fourth text-white mt-5 rounded-pill border-white"
                        }
                      >
                        Подробнее
                      </Link>
                    </motion.p>
                  </Card.Body>
                </motion.div>
                <motion.div
                  style={{
                    width:
                      width > 1200 ? "21rem" : width > 992 ? "18rem" : "14rem",
                    height: "230px",
                  }}
                  className="card border-0 rounded-0 shadow-sm "
                  initial={{ background: "#eff6ef" }}
                  whileHover={{ background: "#ffffff", x: -10 }}
                  onMouseEnter={() => setCard6(true)}
                  onMouseLeave={() => setCard6(false)}
                >
                  <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth  ">
                    <motion.a
                      href="/service6"
                      className={
                        width > 992
                          ? " btn-link simple-title fs-2 stretched-link text-decoration-none text-fourth "
                          : " btn-link simple-title fs-4 stretched-link text-decoration-none text-fourth "
                      }
                      animate={{
                        opacity: card6 ? 0 : 1,
                        y: card6
                          ? [0, width > 1200 ? -50 : width > 992 ? -70 : -85]
                          : 0,
                      }}
                    >
                      Обработка стержневой мазоли
                    </motion.a>
                    <motion.p
                      className="d-flex flex-column"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: card6 ? 1 : 0,
                        y: card6 ? -100 : 0,
                      }}
                      style={{ scale: width > 992 ? 1 : 0.87 }}
                    >
                      Обработка стержневой мазоли
                      <Link
                        to="/prices"
                        className={
                          " pt-2 pb-2 btn bg-fourth text-white mt-5 rounded-pill border-white"
                        }
                      >
                        Подробнее
                      </Link>
                    </motion.p>
                  </Card.Body>
                </motion.div>
              </Row>
            </>
          ) : (
            <>
              <Row className="d-flex flex-column justify-content-between align-items-center   text-center mb-5 mt-5">
                <motion.div
                  style={{
                    height: "230px",
                  }}
                  className="card border-0 border-bottom shadow-lg w-75 rounded-0 mb-2"
                  initial={{ background: "#eff6ef" }}
                  whileHover={{ background: "#ffffff", x: -10 }}
                  onMouseEnter={() => setCard1(true)}
                  onMouseLeave={() => setCard1(false)}
                >
                  <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth ">
                    <motion.a
                      href="/service1"
                      className={
                        width > 992
                          ? " btn-link simple-title fs-2 stretched-link text-decoration-none text-fourth "
                          : " btn-link simple-title fs-4 stretched-link text-decoration-none text-fourth "
                      }
                      animate={{
                        opacity: card1 ? 0 : 1,
                        y: card1 ? [0, -85] : 0,
                      }}
                      style={{}}
                    >
                      Корректировка ногтевой пластины
                    </motion.a>
                    <motion.p
                      className={
                        width > 369
                          ? "d-flex flex-column mt-5"
                          : "d-flex flex-column mt-3"
                      }
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: card1 ? 1 : 0,
                        y: card1 ? -120 : 0,
                      }}
                      style={{ scale: width > 992 ? 1 : 0.87 }}
                    >
                      При нарушении/деформации, установка коррекционной системы
                      титановая нить/система "ЗТО"
                      <Link
                        to="/prices"
                        className={
                          width > 1200
                            ? " pt-2 pb-2 btn bg-fourth text-white mt-5 rounded-pill border-white"
                            : "pt-2 pb-2 btn bg-fourth text-white mt-2 rounded-pill border-white"
                        }
                      >
                        Подробнее
                      </Link>
                    </motion.p>
                  </Card.Body>
                </motion.div>
                <motion.div
                  style={{
                    height: "230px",
                    width:
                      width > 1200 ? "21rem" : width > 992 ? "18rem" : "14rem",
                  }}
                  className="card border-0 rounded-0 shadow-lg  w-75 mb-2"
                  initial={{ background: "#eff6ef" }}
                  whileHover={{ background: "#ffffff", x: -10 }}
                  onMouseEnter={() => setCard2(true)}
                  onMouseLeave={() => setCard2(false)}
                >
                  <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth  ">
                    <motion.a
                      href="/service2"
                      className={
                        width > 992
                          ? " btn-link simple-title fs-2 stretched-link text-decoration-none text-fourth "
                          : " btn-link simple-title fs-4 stretched-link text-decoration-none text-fourth "
                      }
                      animate={{
                        opacity: card2 ? 0 : 1,
                        y: card2
                          ? [0, width > 1200 ? -50 : width > 992 ? -80 : -90]
                          : 0,
                      }}
                    >
                      Гигенический педикюр
                    </motion.a>
                    <motion.p
                      className={
                        width > 369
                          ? "d-flex flex-column mt-5 pt-5"
                          : "d-flex flex-column mt-5"
                      }
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: card2 ? 1 : 0,
                        y: card2 ? -120 : 0,
                      }}
                      style={{ scale: width > 992 ? 1 : 0.87 }}
                    >
                      Подразумевает отсутствие каких-либо проблем
                      <Link
                        to="/prices"
                        className={
                          width > 1200
                            ? " pt-2 pb-2 btn bg-fourth text-white mt-5 rounded-pill border-white"
                            : "pt-2 pb-2 btn bg-fourth text-white mt-2 rounded-pill border-white"
                        }
                      >
                        Подробнее
                      </Link>
                    </motion.p>
                  </Card.Body>
                </motion.div>
                <motion.div
                  style={{
                    width:
                      width > 1200 ? "21rem" : width > 992 ? "18rem" : "14rem",
                    height: "230px",
                  }}
                  className="card border-0 rounded-0 shadow-lg w-75 mb-2"
                  initial={{ background: "#eff6ef" }}
                  whileHover={{ background: "#ffffff", x: -10 }}
                  onMouseEnter={() => setCard3(true)}
                  onMouseLeave={() => setCard3(false)}
                >
                  <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth  ">
                    <motion.a
                      href="/service3"
                      className={
                        width > 992
                          ? " btn-link simple-title fs-2 stretched-link text-decoration-none text-fourth "
                          : " btn-link simple-title fs-4 stretched-link text-decoration-none text-fourth "
                      }
                      animate={{
                        opacity: card3 ? 0 : 1,
                        y: card3
                          ? [0, width > 1200 ? -50 : width > 992 ? -70 : -85]
                          : 0,
                      }}
                    >
                      Парамедецинский педикюр
                    </motion.a>
                    <motion.p
                      className={
                        width > 369
                          ? "d-flex flex-column mt-5"
                          : "d-flex flex-column mt-3"
                      }
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: card3 ? 1 : 0,
                        y: card3 ? -85 : 0,
                      }}
                      style={{ scale: width > 992 ? 1 : 0.87 }}
                    >
                      Наличие проблем: глубокие трещины, мозоли, вросшие ногти
                      <Link
                        to="/prices"
                        className={
                          width > 1200
                            ? " pt-2 pb-2 btn bg-fourth text-white mt-5 rounded-pill border-white"
                            : "pt-2 pb-2 btn bg-fourth text-white mt-2 rounded-pill border-white"
                        }
                      >
                        Подробнее
                      </Link>
                    </motion.p>
                  </Card.Body>
                </motion.div>
                <motion.div
                  style={{
                    width:
                      width > 1200 ? "21rem" : width > 992 ? "18rem" : "14rem",
                    height: "230px",
                  }}
                  className="card border-0 rounded-0 shadow-lg w-75 mb-2"
                  initial={{ background: "#eff6ef" }}
                  whileHover={{ background: "#ffffff", x: -10 }}
                  onMouseEnter={() => setCard4(true)}
                  onMouseLeave={() => setCard4(false)}
                >
                  <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth  ">
                    <motion.a
                      href="/service4"
                      className={
                        width > 992
                          ? " btn-link simple-title fs-2 stretched-link text-decoration-none text-fourth "
                          : " btn-link simple-title fs-4 stretched-link text-decoration-none text-fourth "
                      }
                      animate={{
                        opacity: card4 ? 0 : 1,
                        y: card4
                          ? [0, width > 1200 ? -50 : width > 992 ? -70 : -85]
                          : 0,
                      }}
                    >
                      Мужской педикюр
                    </motion.a>
                    <motion.p
                      className={
                        width > 369
                          ? "d-flex flex-column mt-5"
                          : "d-flex flex-column mt-3"
                      }
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: card4 ? 1 : 0,
                        y: card4 ? -100 : 0,
                      }}
                      style={{ scale: width > 992 ? 1 : 0.87 }}
                    >
                      Гигиеническая обработка
                      <Link
                        to="/prices"
                        className={
                          width > 1200
                            ? " pt-2 pb-2 btn bg-fourth text-white mt-5 rounded-pill border-white"
                            : "pt-2 pb-2 btn bg-fourth text-white mt-2 rounded-pill border-white"
                        }
                      >
                        Подробнее
                      </Link>
                    </motion.p>
                  </Card.Body>
                </motion.div>
                <motion.div
                  style={{
                    width:
                      width > 1200 ? "21rem" : width > 992 ? "18rem" : "14rem",
                    height: "230px",
                  }}
                  className="card border-0 rounded-0 shadow-lg w-75 mb-2"
                  initial={{ background: "#eff6ef" }}
                  whileHover={{ background: "#ffffff", x: -10 }}
                  onMouseEnter={() => setCard5(true)}
                  onMouseLeave={() => setCard5(false)}
                >
                  <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth  ">
                    <motion.a
                      href="/service5"
                      className={
                        width > 992
                          ? " btn-link simple-title fs-2 stretched-link text-decoration-none text-fourth "
                          : " btn-link simple-title fs-4 stretched-link text-decoration-none text-fourth "
                      }
                      animate={{
                        opacity: card5 ? 0 : 1,
                        y: card5
                          ? [0, width > 1200 ? -50 : width > 992 ? -70 : -85]
                          : 0,
                      }}
                    >
                      Зачистка ногтя
                    </motion.a>
                    <motion.p
                      className={
                        width > 369
                          ? "d-flex flex-column mt-5"
                          : "d-flex flex-column mt-3"
                      }
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: card5 ? 1 : 0,
                        y: card5 ? -90 : 0,
                      }}
                      style={{ scale: width > 992 ? 1 : 0.87 }}
                    >
                      На одном пальце
                      <Link
                        to="/prices"
                        className={
                          width > 1200
                            ? " pt-2 pb-2 btn bg-fourth text-white mt-5 rounded-pill border-white"
                            : "pt-2 pb-2 btn bg-fourth text-white mt-2 rounded-pill border-white"
                        }
                      >
                        Подробнее
                      </Link>
                    </motion.p>
                  </Card.Body>
                </motion.div>
                <motion.div
                  style={{
                    width:
                      width > 1200 ? "21rem" : width > 992 ? "18rem" : "14rem",
                    height: "230px",
                  }}
                  className="card border-0 rounded-0 shadow-lg  w-75"
                  initial={{ background: "#eff6ef" }}
                  whileHover={{ background: "#ffffff", x: -10 }}
                  onMouseEnter={() => setCard6(true)}
                  onMouseLeave={() => setCard6(false)}
                >
                  <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth  ">
                    <motion.a
                      href="/service6"
                      className={
                        width > 992
                          ? " btn-link simple-title fs-2 stretched-link text-decoration-none text-fourth "
                          : " btn-link simple-title fs-4 stretched-link text-decoration-none text-fourth "
                      }
                      animate={{
                        opacity: card6 ? 0 : 1,
                        y: card6
                          ? [0, width > 1200 ? -50 : width > 992 ? -70 : -85]
                          : 0,
                      }}
                    >
                      Обработка стержневой мозоли
                    </motion.a>
                    <motion.p
                      className={
                        width > 369
                          ? "d-flex flex-column mt-5"
                          : "d-flex flex-column mt-3"
                      }
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: card6 ? 1 : 0,
                        y: card6 ? -100 : 0,
                      }}
                      style={{ scale: width > 992 ? 1 : 0.87 }}
                    >
                      Обработка стержневой мозоли
                      <Link
                        to="/prices"
                        className={
                          width > 1200
                            ? " pt-2 pb-2 btn bg-fourth text-white mt-5 rounded-pill border-white"
                            : "pt-2 pb-2 btn bg-fourth text-white mt-2 rounded-pill border-white"
                        }
                      >
                        Подробнее
                      </Link>
                    </motion.p>
                  </Card.Body>
                </motion.div>
              </Row>
            </>
          )}
        </Container>
      </Container>
    </div>
  );
};
const ContactMe = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });
  return (
    <section
      className="border-top text-fourth text-center p-5 pb-0 pb-lg-5"
      id="contact"
    >
      <h2 className="mb-5 simple-title">Связаться со мной</h2>
      <Row>
        <Col className="col-lg-5">
          {width >= 768 ? (
            <>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55301.51018358445!2d44.720666260265965!3d48.788674372377805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41054c3a59832769%3A0x6eb96d9cf4bf8a2a!2sUlitsa%20Olomoutskaya%2C%2078%2C%20Volzhskiy%2C%20Volgogradskaya%20oblast&#39;%2C%20404109!5e0!3m2!1sen!2sru!4v1695821190403!5m2!1sen!2sru"
                width="600"
                height="450"
                className="h-100 w-100 rounded-5"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </>
          ) : (
            <>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55301.51018358445!2d44.720666260265965!3d48.788674372377805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41054c3a59832769%3A0x6eb96d9cf4bf8a2a!2sUlitsa%20Olomoutskaya%2C%2078%2C%20Volzhskiy%2C%20Volgogradskaya%20oblast&#39;%2C%20404109!5e0!3m2!1sen!2sru!4v1695821190403!5m2!1sen!2sru"
                width="600"
                height="450"
                className="h-100 w-100 rounded-5 pb-5"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </>
          )}
        </Col>
        <Col className="col-lg-7 col-12 col-md-7  mt-xl-5 mt-xxl-0">
          <form>
            <Row className="row">
              <Col className="col-lg-9">
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label="Имя" id="form3FirstName" />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label="Телефон" id="form3Email" />
                  </MDBCol>
                </MDBRow>
                <MDBTextArea
                  label="Как я могу помочь?"
                  id="form3Textarea"
                  rows={5}
                  wrapperClass="mb-4"
                />
                <Button className=" btn-dark bg-third border-0  mb-4">
                  Отправить
                </Button>
              </Col>
              <Col className="col-md-3 d-none d-lg-flex align-items-center">
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-map-marker-alt fa-2x text-third"></i>
                    <p>
                      <small>Оломоуцкая, 78A, Волжский </small>
                    </p>
                  </li>
                  <li>
                    <i className="fas fa-phone fa-2x text-third"></i>
                    <p>
                      <small>+ 7 937 704 66 66</small>
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
          </form>
        </Col>
        <Col className="col-12 d-lg-none">
          <ul className="list-unstyled d-flex flex-row justify-content-around align-items-center pt-5">
            <li>
              <i className="fas fa-map-marker-alt fa-2x text-third"></i>
              <p>
                <small>Оломоуцкая, 78A, Волжский</small>
              </p>
            </li>
            <li>
              <i className="fas fa-phone fa-2x text-third"></i>
              <p>
                <small>+ 7 937 704 66 66</small>
              </p>
            </li>
          </ul>
        </Col>
      </Row>
    </section>
  );
};

const Landing = () => {
  return (
    <div>
      <Hero />
      <Advantages />
      <Pedicure />
      <ContactMe />
    </div>
  );
};

export default Landing;
