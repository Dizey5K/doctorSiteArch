import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Helmet } from "react-helmet";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import legs_bnw from "../images/legs-bnw.png";
import office from "../images/office.jpg";
import person from "../images/person2.jpg";
import review from "../images/review.jpg";

import { motion } from "framer-motion";

import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.7,
      type: "spring",
      stiffness: 70,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Hero = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <motion.div
        id="hero"
        className="bg-transparent text-black mt-5  mb-5 pt-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Container
          className=""
          style={{
            marginLeft: width > 992 ? "" : 0,
            marginRight: width > 992 ? "" : 0,
          }}
        >
          {width > 1400 ? (
            <>
              <Row>
                <Col
                  className="col-10 bg-white rounded-5"
                  style={{ minHeight: "600px" }}
                >
                  <Container className="h-100 w-100">
                    <Row className="h-100 w-100 ">
                      <Col className="m-5  ">
                        <motion.h1
                          className="text-fourth text-start fw-bolder  simple-title text-nowrap  "
                          initial={{ opacity: 0, fontSize: "20px" }}
                          animate={{ opacity: 1, fontSize: "67px" }}
                          transition={{
                            delay: 0,
                            duration: 1,
                            type: "tween",
                          }}
                        >
                          Стопы &ndash;
                          <br /> зеркало тела
                        </motion.h1>
                        <motion.p
                          className="mt-5 pt-5 playful-regular text-black-50 "
                          initial={{ opacity: 0, scale: 0.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 1,
                            duration: 0.2,
                            type: "tween",
                          }}
                        >
                          Предлагаю комплексный уход и заботу о ваших стопах.
                          Решаю широкий спектр проблем на коже и ногтях
                          Доврачебная помошь. Моя миссия &ndash; помочь вам
                          шагать уверенно и без боли. Ваши ноги в моих руках
                          будут счастливы! Ваш надежный партнер в обеспечении
                          здоровья и комфорта ваших ног
                        </motion.p>
                        <Row className="ps-2 mt-5">
                          <Col className="bg-fourth col-4 d-flex justify-content-center align-items-center text-white rounded-pill">
                            <motion.p
                              initial={{ opacity: 0, scale: 0.1 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: 1,
                                duration: 0.2,
                                type: "spring",
                              }}
                              className="mb-2 mt-2 playful-regular"
                            >
                              Подолог
                            </motion.p>
                          </Col>
                          <Col className="">
                            <motion.p
                              className="mb-2 mt-2 playful-regular "
                              initial={{ opacity: 0, scale: 0.1 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: 1,
                                duration: 0.2,
                                type: "tween",
                              }}
                            >
                              Наталья Глухова
                            </motion.p>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="d-flex align-items-end justify-content-end  ">
                        <img
                          src={legs_bnw}
                          alt=""
                          className="ms-5"
                          style={{ maxHeight: "400px", maxWidth: "600px" }}
                        ></img>
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <motion.div
                  className="col bg-second rounded-top-5 rounded-bottom-5 ms-2"
                  initial={{ opacity: 0, scale: 0.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1,
                    duration: 0.5,
                    type: "spring",
                  }}
                >
                  <Link
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0px 0px 20px rgb(255,255,255)",
                      textShadow: "0px 0px 8px rgb(255, 255, 255)",
                      transition: {},
                    }}
                    className="btn rounded-circle bg-white border-0 mt-4 w-100 hero-button d-flex justify-content-center align-items-center"
                    style={{
                      minHeight: "30px",
                      minWidth: "50px",
                      height: "75px",
                    }}
                    to="/about"
                  >
                    <p className="playful-regular fw-lighter fs-1 text-black mt-3">
                      ↗
                    </p>
                  </Link>
                  <Row className=" h-75 d-flex align-items-end text-center justify-content-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="3em"
                      viewBox="0 0 448 512"
                      className="icon-vertical"
                      style={{ fill: "#eff6ef" }}
                    >
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
                    </svg>
                    <p className="vertical-regular pe-3 fs-5 playful-regular text-first">
                      Обо мне
                    </p>
                  </Row>
                </motion.div>
                <motion.div
                  className="col bg-third rounded-bottom-5 rounded-top-5 ms-1"
                  initial={{ opacity: 0, scale: 0.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1,
                    duration: 0.5,
                    type: "spring",
                  }}
                >
                  <Link
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0px 0px 20px rgb(255,255,255)",
                      textShadow: "0px 0px 8px rgb(255, 255, 255)",
                      transition: {},
                    }}
                    className="btn rounded-circle bg-first border-0 mt-4 w-100 hero-button d-flex justify-content-center align-items-center"
                    style={{
                      minHeight: "30px",
                      minWidth: "50px",
                      height: "75px",
                    }}
                    to="/services"
                  >
                    <motion.p
                      className="playful-regular fw-lighter fs-1 text-black mt-3"
                      whileHover={{
                        boxShadow: "0px 0px 20px rgb(255,255,255)",
                        textShadow: "0px 0px 8px rgb(255, 255, 255)",
                        transition: {},
                      }}
                    >
                      ↗
                    </motion.p>
                  </Link>
                  <Row className=" h-75 d-flex align-items-end text-center justify-content-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="3em"
                      className="icon-vertical"
                      viewBox="0 0 576 512"
                      style={{ fill: "#eff6ef" }}
                    >
                      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                    <p className="vertical-regular pe-3 fs-5 playful-regular text-first">
                      Услуги
                    </p>
                  </Row>
                </motion.div>{" "}
              </Row>
            </>
          ) : (
            <>
              <Row className="" style={{ minWidth: width >= 992 ? "" : width }}>
                <Col
                  className="col-12 bg-white rounded-5"
                  style={{ minHeight: width >= 576 ? "600px" : "" }}
                >
                  <Container className="h-100 w-100">
                    <Row className="h-100 w-100 ">
                      <Col className="m-5  ">
                        <motion.h1
                          className="text-fourth text-start fw-bolder  simple-title text-nowrap  "
                          initial={{ opacity: 0, fontSize: "20px" }}
                          animate={{
                            opacity: 1,
                            fontSize: width >= 576 ? "67px" : "32px",
                          }}
                          transition={{
                            delay: 0,
                            duration: 1,
                            type: "tween",
                          }}
                        >
                          Стопы -<br /> зеркало тела
                        </motion.h1>
                        <motion.p
                          className="mt-5 pt-0 pt-md-5 pt-lg-0 playful-regular text-black-50 "
                          initial={{ opacity: 0, scale: 0.1 }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            fontSize: width >= 576 ? "20px" : width / 30,
                          }}
                          transition={{
                            delay: 1,
                            duration: 0.2,
                            type: "tween",
                          }}
                          style={{
                            fontSize: width >= 576 ? "20px" : width / 35,
                          }}
                        >
                          Предлагаю комплексный уход и заботу о ваших стопах.
                          Решаю широкий спектр проблем на коже и ногтях
                          Доврачебная помошь. Моя миссия - помочь вам шагать
                          уверенно и без боли. Ваши ноги в моих руках будут
                          счастливы! Ваш надежный партнер в обеспечении здоровья
                          и комфорта ваших ног
                        </motion.p>
                        <Row className="ps-2 mt-5">
                          <Col
                            className={
                              width > 390
                                ? "bg-fourth col-4 d-flex justify-content-center align-items-center text-white rounded-pill"
                                : "bg-fourth col-12 d-flex justify-content-center align-items-center text-white rounded-pill"
                            }
                          >
                            <motion.p
                              initial={{ opacity: 0, scale: 0.1 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: 1,
                                duration: 0.2,
                                type: "spring",
                              }}
                              className="mb-2 mt-2 playful-regular"
                            >
                              Подолог
                            </motion.p>
                          </Col>
                          <Col className="">
                            <motion.p
                              className={
                                width > 390
                                  ? "mb-2 mt-2 playful-regular "
                                  : "mb-2 mt-2 playful-regular text-center"
                              }
                              initial={{ opacity: 0, scale: 0.1 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: 1,
                                duration: 0.2,
                                type: "tween",
                              }}
                            >
                              Наталья Глухова
                            </motion.p>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="d-none align-items-end justify-content-end d-lg-flex">
                        <img
                          src={legs_bnw}
                          alt=""
                          className="ms-5"
                          style={{
                            maxHeight: "400px",
                            maxWidth: width > 1200 ? "600px" : "200px",
                          }}
                        ></img>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </motion.div>
    </>
  );
};

const Cabinet = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });
  return (
    <div id="cabinet" style={{ maxHeight: "600px" }} className="bg-second">
      <Container className="pt-5">
        <Row>
          <motion.div
            className=" col text-black playful-regular col-lg-7 col-md-9 col-10"
            initial={{ opacity: 0, scale: 0.8, y: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: [200, 0],
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              type: "spring",
              stiffness: 30,
            }}
            exit={{ opacity: 0, transition: { delay: 0, duration: 0.2 } }}
          >
            <motion.h2
              className="simple-title text-nowrap text-white"
              style={{
                fontSize:
                  width > 992 ? "50px" : width >= 576 ? "32px" : width / 20,
              }}
            >
              Здесь вы почувствуете себя по-новому. <br />
              <span
                style={{
                  fontSize:
                    width > 992 ? "55px" : width >= 576 ? "37px" : width / 13,
                }}
              >
                Добро пожаловать.
              </span>
            </motion.h2>
            <motion.p
              style={{
                display: width >= 740 ? "block" : "none",
              }}
              className="w-50 pt-4 text-first"
            >
              В моем кабинете чисто, уютно, без свидетелей. Я предложу вам чай
              или кофе. Вы будете отдыхать, я буду работать.
            </motion.p>
            <img
              src={office}
              alt=""
              className="rounded-5"
              style={{
                display: width >= 740 ? "none" : "block",
                maxWidth: width >= 576 ? 250 : 225,
              }}
            ></img>
            <Link
              className="btn btn-light mt-5 rounded-pill mb-3"
              to="/services#mycabinet"
            >
              <span className="playful-regular text-fourth">Узнать больше</span>
            </Link>
          </motion.div>
          <Col className="pb-5 pb-xxl-none pt-5">
            <img
              alt=""
              src={office}
              className="rounded-5"
              style={{
                display: width >= 740 ? "block" : "none",
                maxHeight:
                  width >= 1400
                    ? "500px"
                    : width >= 1200
                    ? 450
                    : width >= 992
                    ? 400
                    : width >= 928
                    ? 350
                    : width >= 768
                    ? "350px"
                    : "300px",
                maxWidth:
                  width >= 1400
                    ? "600px"
                    : width >= 1200
                    ? "600px"
                    : width >= 992
                    ? "500px"
                    : width >= 928
                    ? "400px"
                    : width >= 768
                    ? "350px"
                    : "300px",
                marginTop: width >= 1400 ? "-396px" : width > 992 ? -300 : -280,
                marginLeft:
                  width > 1400
                    ? 900
                    : width > 1200
                    ? 800
                    : width >= 1100
                    ? 600
                    : width >= 842
                    ? 500
                    : "300px",
              }}
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const Me = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });
  return (
    <div
      id="me"
      style={{
        minHeight: width > 1400 ? "600px" : "",
        paddingTop: width > 1400 ? "200px" : "50px",
        paddingBottom: width > 1400 ? "0px" : "50px",
      }}
      className="bg-first text-fourth"
    >
      <Container>
        <Row className="mt-5 pt-5  ">
          <Col className="d-lg-block d-flex justify-content-center  pb-5">
            <img
              src={person}
              alt="me"
              className="rounded-5"
              style={{
                maxHeight: "500px",
                maxWidth: "500px",
                marginTop: "-100px",
                height: width > 327 ? "" : 300,
                marginLeft: width > 832 ? 100 : 0,
              }}
            ></img>
          </Col>
          <motion.div
            className="col playful-regular"
            initial={{ opacity: 0, scale: 0.8, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, y: [200, 0] }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              type: "spring",
              stiffness: 30,
            }}
            exit={{ x: "100vw" }}
          >
            <h2
              className="simple-title   "
              style={{ fontSize: width >= 576 ? "70px" : width / 10 }}
            >
              Наталья Глухова
            </h2>
            <p
              className="mt-3"
              style={{ fontSize: width >= 576 ? "" : width / 30 }}
            >
              Я &ndash; Наталья, cпециалист-подолог с большим стажем ( более 7
              лет). Преподаватель Института подологии. Спасатель ваших ног.
            </p>
            <Link
              className="btn text-decoration-none btn-dark bg-fourth hero-button rounded-pill"
              to="/about"
            >
              Обо мне
            </Link>
          </motion.div>
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
    <div id="advantages" className="bg-third text-white playful-regular pb-5">
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
        <Row className="text-center">
          <h2
            className="simple-title mt-5 d-none d-md-block "
            style={{ fontSize: "70px" }}
          >
            Мои приемущества
          </h2>
        </Row>
        {width >= 992 ? (
          <>
            {" "}
            <Row className="d-flex justify-content-around text-center mb-5 mt-5">
              <motion.div style={{ width: "18rem" }} className="card">
                <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="5em"
                    viewBox="0 0 384 512"
                    style={{ fill: "#2f502f" }}
                  >
                    <path d="M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z" />
                  </svg>
                  <Card.Title className="simple-title fs-2">
                    Без боли
                  </Card.Title>
                </Card.Body>
              </motion.div>
              <Card style={{ width: "18rem" }}>
                <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="5em"
                    viewBox="0 0 448 512"
                    style={{ fill: "#2f502f" }}
                  >
                    <path d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z" />
                  </svg>
                  <Card.Title className="simple-title fs-2">
                    Авторские техники
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="5em"
                    viewBox="0 0 640 512"
                    style={{ fill: "#2f502f" }}
                  >
                    <path d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z" />
                  </svg>
                  <Card.Title className="simple-title fs-2">
                    Практикующий преподаватель
                  </Card.Title>
                </Card.Body>
              </Card>
            </Row>
            <Row className="d-flex justify-content-around text-center">
              <Card style={{ width: "18rem" }}>
                <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="5em"
                    viewBox="0 0 512 512"
                    style={{ fill: "#2f502f" }}
                  >
                    <path d="M208 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM320 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM416 32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0 160c0 27.6-11.7 52.5-30.4 70.1C422.1 275.7 448 310.8 448 352c0 53-43 96-96 96H160c-53 0-96-43-96-96s43-96 96-96h88.4c-15.2-17-24.4-39.4-24.4-64H96c-53 0-96 43-96 96V416c0 53 43 96 96 96H416c53 0 96-43 96-96V288c0-53-43-96-96-96zM160 288c-35.3 0-64 28.7-64 64s28.7 64 64 64H352c35.3 0 64-28.7 64-64s-28.7-64-64-64H320 160z" />
                  </svg>
                  <Card.Title className="simple-title fs-2">
                    Гигиенический педикюр
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="5em"
                    viewBox="0 0 576 512"
                    style={{ fill: "#2f502f" }}
                  >
                    <path d="M288 176A88 88 0 1 0 288 0a88 88 0 1 0 0 176zM78.7 372.9c15-12.5 50-34.4 97.3-50.1V432H400V322.7c47.3 15.8 82.3 37.7 97.3 50.1c20.4 17 50.6 14.2 67.6-6.1s14.2-50.6-6.1-67.6c-12-10-30.1-22.5-53.2-35C497.2 278.4 481.7 288 464 288c-26.5 0-48-21.5-48-48c0-4.3 .6-8.4 1.6-12.4C379.1 215.9 335.3 208 288 208c-60.2 0-114.9 12.9-160 29.9c0 .7 0 1.4 0 2.1c0 26.5-21.5 48-48 48c-11.8 0-22.7-4.3-31-11.4c-13.1 8.1-23.7 15.9-31.7 22.5c-20.4 17-23.1 47.2-6.1 67.6s47.2 23.1 67.6 6.1zM24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24H552c13.3 0 24-10.7 24-24s-10.7-24-24-24H24zM224 280a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM96 240a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm368 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
                  </svg>
                  <Card.Title className="simple-title fs-2">
                    Индивидуальный подход
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="5em"
                    viewBox="0 0 640 512"
                    style={{ fill: "#2f502f" }}
                  >
                    <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 352h8.2c32.3-39.1 81.1-64 135.8-64c5.4 0 10.7 .2 16 .7V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM320 352H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H360.2C335.1 449.6 320 410.5 320 368c0-5.4 .2-10.7 .7-16l-.7 0zm320 16a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM496 288c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16z" />
                  </svg>
                  <Card.Title className="simple-title fs-2">
                    7 лет опыта
                  </Card.Title>
                </Card.Body>
              </Card>
            </Row>
          </>
        ) : width >= 768 ? (
          <>
            {" "}
            <Row className="d-flex justify-content-around text-center mb-5 mt-5">
              <motion.div style={{ width: "18rem" }} className="card">
                <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="5em"
                    viewBox="0 0 384 512"
                    style={{ fill: "#2f502f" }}
                  >
                    <path d="M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z" />
                  </svg>
                  <Card.Title className="simple-title fs-2">
                    Без боли
                  </Card.Title>
                </Card.Body>
              </motion.div>
              <Card style={{ width: "18rem" }}>
                <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="5em"
                    viewBox="0 0 448 512"
                    style={{ fill: "#2f502f" }}
                  >
                    <path d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z" />
                  </svg>
                  <Card.Title className="simple-title fs-2">
                    Авторские техники
                  </Card.Title>
                </Card.Body>
              </Card>
            </Row>
            <Row className="d-flex justify-content-around text-center mb-5">
              <Card style={{ width: "18rem" }}>
                <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="5em"
                    viewBox="0 0 640 512"
                    style={{ fill: "#2f502f" }}
                  >
                    <path d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z" />
                  </svg>
                  <Card.Title className="simple-title fs-2">
                    Практикующий преподаватель
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="5em"
                    viewBox="0 0 512 512"
                    style={{ fill: "#2f502f" }}
                  >
                    <path d="M208 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM320 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM416 32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0 160c0 27.6-11.7 52.5-30.4 70.1C422.1 275.7 448 310.8 448 352c0 53-43 96-96 96H160c-53 0-96-43-96-96s43-96 96-96h88.4c-15.2-17-24.4-39.4-24.4-64H96c-53 0-96 43-96 96V416c0 53 43 96 96 96H416c53 0 96-43 96-96V288c0-53-43-96-96-96zM160 288c-35.3 0-64 28.7-64 64s28.7 64 64 64H352c35.3 0 64-28.7 64-64s-28.7-64-64-64H320 160z" />
                  </svg>
                  <Card.Title className="simple-title fs-2">
                    Гигиенический педикюр
                  </Card.Title>
                </Card.Body>
              </Card>
            </Row>{" "}
            <Row className="d-flex justify-content-around text-center">
              <Card style={{ width: "18rem" }}>
                <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="5em"
                    viewBox="0 0 576 512"
                    style={{ fill: "#2f502f" }}
                  >
                    <path d="M288 176A88 88 0 1 0 288 0a88 88 0 1 0 0 176zM78.7 372.9c15-12.5 50-34.4 97.3-50.1V432H400V322.7c47.3 15.8 82.3 37.7 97.3 50.1c20.4 17 50.6 14.2 67.6-6.1s14.2-50.6-6.1-67.6c-12-10-30.1-22.5-53.2-35C497.2 278.4 481.7 288 464 288c-26.5 0-48-21.5-48-48c0-4.3 .6-8.4 1.6-12.4C379.1 215.9 335.3 208 288 208c-60.2 0-114.9 12.9-160 29.9c0 .7 0 1.4 0 2.1c0 26.5-21.5 48-48 48c-11.8 0-22.7-4.3-31-11.4c-13.1 8.1-23.7 15.9-31.7 22.5c-20.4 17-23.1 47.2-6.1 67.6s47.2 23.1 67.6 6.1zM24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24H552c13.3 0 24-10.7 24-24s-10.7-24-24-24H24zM224 280a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM96 240a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm368 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
                  </svg>
                  <Card.Title className="simple-title fs-2">
                    Индивидуальный подход
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Body className="d-flex flex-column  align-items-center justify-content-center text-fourth ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="5em"
                    viewBox="0 0 640 512"
                    style={{ fill: "#2f502f" }}
                  >
                    <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 352h8.2c32.3-39.1 81.1-64 135.8-64c5.4 0 10.7 .2 16 .7V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM320 352H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H360.2C335.1 449.6 320 410.5 320 368c0-5.4 .2-10.7 .7-16l-.7 0zm320 16a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM496 288c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16z" />
                  </svg>
                  <Card.Title className="simple-title fs-2">
                    7 лет опыта
                  </Card.Title>
                </Card.Body>
              </Card>
            </Row>
          </>
        ) : (
          <>
            <Row className="d-flex text-first justify-content-around align-items-center pt-5 text-center">
              <Col>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="5em"
                  viewBox="0 0 384 512"
                  style={{ fill: "#eff6ef" }}
                >
                  <path d="M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z" />
                </svg>
                <h3 className="simple-title fs-2">Без боли</h3>
              </Col>
              <Col>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="5em"
                  viewBox="0 0 640 512"
                  style={{ fill: "#eff6ef" }}
                >
                  <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 352h8.2c32.3-39.1 81.1-64 135.8-64c5.4 0 10.7 .2 16 .7V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM320 352H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H360.2C335.1 449.6 320 410.5 320 368c0-5.4 .2-10.7 .7-16l-.7 0zm320 16a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM496 288c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16z" />
                </svg>
                <h3 className="simple-title fs-2">7 лет опыта</h3>
              </Col>
              <Col>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="5em"
                  viewBox="0 0 448 512"
                  style={{ fill: "#eff6ef" }}
                >
                  <path d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z" />
                </svg>
                <h3 className="simple-title fs-2">Авторские техники</h3>
              </Col>
            </Row>
          </>
        )}
      </motion.div>
    </div>
  );
};

const Reviews = () => {
  return (
    <>
      <motion.div
        id="reviews"
        className=" text-white playful-regular pb-5"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1, x: ["100vw", "0vw"] }}
        viewport={{ once: true }}
        transition={{
          delay: 0.1,
          type: "spring",
          stiffness: 60,
        }}
      >
        <MDBContainer
          fluid
          className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded"
        >
          <MDBRow className="d-flex justify-content-center">
            <div className="text-center mb-4 pb-2">
              <MDBIcon
                fas
                icon="quote-left"
                size="3x"
                className="text-fourth"
              />
            </div>
            <MDBCol md="10">
              <MDBCard className="bg-fourth text-white rounded-4">
                <MDBCardBody className="m-3">
                  <MDBRow>
                    <MDBCol
                      lg="4"
                      className="d-flex justify-content-center align-items-center mb-4 mb-lg-0"
                    >
                      <img
                        src={review}
                        className="rounded-circle img-fluid shadow-1"
                        alt="woman avatar"
                        width="200"
                        height="200"
                      />
                    </MDBCol>
                    <MDBCol lg="8">
                      {" "}
                      <p className="text-white  playful-regular  fw-light mb-4">
                        Трудно найти настоящего профессионала, но мне повезло.
                        Попала к Наталье пару лет назад со стержневой мозолью,
                        проблему решила очень быстро и безболезненно. Тогда же я
                        и решила, что маникюр и педикюр только у неё!)
                        Гениальная! Невероятная энергетика! Обожаю!
                      </p>
                      <p className="fw-bold lead mb-2 simple-title">
                        <strong>Наталья</strong>
                      </p>
                      <MDBTypography
                        listUnStyled
                        className="d-flex justify-content-lg-start justify-content-center  mb-0 text-first"
                      >
                        <li>
                          <MDBIcon fas icon="star" size="sm" className="" />
                        </li>
                        <li>
                          <MDBIcon fas icon="star" size="sm" className="" />
                        </li>
                        <li>
                          <MDBIcon fas icon="star" size="sm" className="" />
                        </li>
                        <li>
                          <MDBIcon fas icon="star" size="sm" className="" />
                        </li>
                        <li>
                          <MDBIcon fas icon="star" size="sm" className="" />
                        </li>
                      </MDBTypography>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <div className="text-center mt-4 pt-2">
              <MDBIcon
                fas
                icon="quote-right"
                size="3x"
                className="text-fourth"
              />
            </div>
          </MDBRow>
        </MDBContainer>
      </motion.div>
    </>
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

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Наталья Глухова - Ваш надежный партнер в обеспечении здоровья и комфорта ваших ног. Я предлагаю высококачественные услуги, обеспечивая комплексный уход и решая широкий спектр проблем, от болей и деформаций до кожных заболеваний. Моя миссия - помочь вам шагать уверенно и без боли. Доверьтесь моей экспертизе для поддержания здоровья ваших ног."
        />
        <link rel="canonical" href="https://????/" />
        <title>Наталья Глухова | Ваш подолог</title>
      </Helmet>
      <Hero />
      <Cabinet />
      <Me />
      <Advantages />
      <Reviews />
      <ContactMe />
    </div>
  );
};

export default Home;
