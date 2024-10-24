import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import legs_bnw from "../images/legs-bnw.png";
import poduse from "../images/poduse.jpg";
import office from "../images/office2.jpg";

import { MDBCol, MDBRow, MDBInput, MDBTextArea } from "mdb-react-ui-kit";

import { motion } from "framer-motion";

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
                <motion.div
                  className="col bg-white rounded-top-5 rounded-bottom-5 ms-2"
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
                    to="/"
                  >
                    <p className="playful-regular fw-lighter fs-1 text-black mt-3">
                      ↗
                    </p>
                  </Link>
                  <Row className=" h-75 d-flex align-items-end text-center justify-content-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="3em"
                      viewBox="0 0 576 512"
                      className="icon-vertical"
                      style={{ fill: "#2f502f" }}
                    >
                      <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                    </svg>
                    <p className="vertical-regular pe-3 fs-5 playful-regular">
                      На Главную
                    </p>
                  </Row>
                </motion.div>
                <motion.div
                  className="col bg-second rounded-bottom-5 rounded-top-5 ms-1 text-first"
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
                    to="/about"
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
                      viewBox="0 0 448 512"
                      className="icon-vertical"
                      style={{ fill: "#eff6ef" }}
                    >
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
                    </svg>
                    <p className="vertical-regular pe-3 fs-5 playful-regular">
                      Обо мне
                    </p>
                  </Row>
                </motion.div>{" "}
                <Col
                  className="col-10 bg-third ms-1 rounded-5"
                  style={{ minHeight: "600px" }}
                >
                  <Container className="h-100 w-100">
                    <Row className="h-100 w-100 ">
                      <Col className="m-5  ">
                        <motion.h1
                          className="text-first text-start fw-bolder  simple-title text-nowrap  "
                          initial={{ opacity: 0, fontSize: "20px" }}
                          animate={{ opacity: 1, fontSize: "67px" }}
                          transition={{
                            delay: 0,
                            duration: 1,
                            type: "tween",
                          }}
                        >
                          Услуги
                        </motion.h1>
                        <motion.p
                          className=" playful-regular text-first "
                          initial={{ opacity: 0, scale: 0.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 1,
                            duration: 0.2,
                            type: "tween",
                          }}
                          style={{ marginTop: "250px" }}
                        >
                          Обработка ногтей, кожи и стоп. Исправление деформации
                          ногтевой пластины: врастание, утолщение и др. Работа с
                          ногтями после хирургического вмешательства. Обработка
                          мозолей и бородавок
                        </motion.p>
                        <Row className="ps-2 mt-5">
                          <Col className="bg-first col-4 d-flex justify-content-center align-items-center  text-fourth rounded-pill">
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
                              className="mb-2 mt-2 playful-regular text-first"
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
                          alt=""
                          src={legs_bnw}
                          className="ms-5"
                          style={{ maxHeight: "400px", maxWidth: "600px" }}
                        ></img>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </>
          ) : (
            <>
              <Row className="" style={{ minWidth: width >= 992 ? "" : width }}>
                <Col
                  className="col-12 bg-third rounded-5"
                  style={{ minHeight: width >= 576 ? "600px" : "" }}
                >
                  <Container className="h-100 w-100">
                    <Row className="h-100 w-100 ">
                      <Col className="m-5  ">
                        <motion.h1
                          className="text-first text-start fw-bolder  simple-title text-nowrap  "
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
                          Услуги
                        </motion.h1>
                        <motion.p
                          className=" pt-0 pt-md-5 pt-lg-0 playful-regular text-first "
                          initial={{ opacity: 0, scale: 0.1 }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            fontSize: width >= 576 ? "20px" : "15px",
                          }}
                          transition={{
                            delay: 1,
                            duration: 0.2,
                            type: "tween",
                          }}
                          style={{
                            marginTop: width >= 576 ? "250px" : "100px",
                          }}
                        >
                          Обработка ногтей, кожи и стоп. Исправление деформации
                          ногтевой пластины: врастание, утолщение и др. Работа с
                          ногтями после хирургического вмешательства. Обработка
                          мозолей и бородавок
                        </motion.p>
                        <Row className="ps-2 mt-5">
                          <Col className="bg-first col-4 d-flex justify-content-center col-12 col-sm-6 align-items-center text-fourth rounded-pill">
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
                              className="mb-2 mt-2 playful-regular text-first text-center "
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
            className="simple-title text-fourth text-end pe-5"
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

const Cabinet = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });
  return (
    <>
      {width > 596 ? (
        <>
          <motion.div
            style={{ maxHeight: "600px" }}
            className="bg-second"
            id="mycabinet"
          >
            <motion.div
              className="container pt-5 pb-5 "
              viewport={{ once: true }}
              whileInView={{
                x: [100, 0],
                y: [200, 0],
                opacity: [0, 1],
                transition: { duration: 1 },
              }}
            >
              <Row>
                <Col className="text-black playful-regular col-lg-7 col-12 ">
                  <h2
                    className="simple-title text-nowrap text-white "
                    style={{
                      fontSize:
                        width > 1200
                          ? "50px"
                          : width > 992
                          ? "40px"
                          : width > 768
                          ? "28px"
                          : "24.5px",
                    }}
                  >
                    Новейшая аппаратура и высокий проффесионализм{" "}
                  </h2>
                  <p
                    className="w-100 pt-4 text-first"
                    style={{
                      fontSize:
                        width > 1200 ? "18px" : width > 992 ? "15px" : "13px",
                    }}
                  >
                    Кабинет оснащён современным оборудованием. Кресло учитывает
                    все анатомичечкие особенности клиента. Вам будет комфортно.
                    Аппарат с функцией подачи воды. Вам будет не больно.
                    Освещение - лампа-лупа. Я увижу все ваши проблемы.
                    Стерилизатор - автоклав класса В. Мои инструменты стерильные
                    как у хирурга. Все это и многое другое позволяет мне быстро
                    и профессионально выполнить свою работу, вам избавиться от
                    боли и даже отдохнуть.
                  </p>
                </Col>
                <Col className="d-flex align-items-start justify-content-start ">
                  <img
                    src={office}
                    alt="office"
                    className="rounded-5 "
                    style={{
                      maxHeight: "450px",
                      maxWidth:
                        width > 1400
                          ? "450px"
                          : width > 992
                          ? width / 4
                          : width / 3.5,
                      marginTop: width > 992 ? "-225px" : "",
                      marginLeft:
                        width > 1200 ? "800px" : width > 992 ? width / 1.8 : "",
                    }}
                  ></img>
                </Col>
              </Row>
            </motion.div>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            id="mycabinet"
            style={{ maxHeight: "1000px" }}
            className="bg-second"
          >
            <motion.div
              className="container pt-5 pb-5 "
              viewport={{ once: true }}
              whileInView={{
                x: [100, 0],
                y: [200, 0],
                opacity: [0, 1],
                transition: { duration: 1 },
              }}
            >
              <Row>
                <Col className="col-12">
                  <img
                    src={office}
                    alt="office"
                    className="rounded-5 "
                    style={{
                      maxHeight: "500px",

                      width: width > 400 ? "200px" : width / 2.2,
                    }}
                  ></img>
                </Col>
                <Col className="text-black playful-regular col-12 ">
                  <h2
                    className="simple-title text-nowrap text-white"
                    style={{ fontSize: width > 350 ? "22px" : width / 15 }}
                  >
                    Новейшая аппаратура и <br />
                    высокий проффесионализм{" "}
                  </h2>
                  <p
                    className="w-100 pt-2 text-first"
                    style={{ fontSize: width > 350 ? "14px" : width / 30 }}
                  >
                    Кабинет оснащён современным оборудованием. Кресло учитывает
                    все анатомичечкие особенности клиента. Вам будет комфортно.
                    Аппарат с функцией подачи воды. Вам будет не больно.
                    Освещение - лампа-лупа. Я увижу все ваши проблемы.
                    Стерилизатор - автоклав класса В. Мои инструменты стерильные
                    как у хирурга. Все это и многое другое позволяет мне быстро
                    и профессионально выполнить свою работу, вам избавиться от
                    боли и даже отдохнуть.
                  </p>
                </Col>
              </Row>
            </motion.div>
          </motion.div>
        </>
      )}
    </>
  );
};

const Cabinet2 = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });
  return (
    <>
      {width > 576 ? (
        <>
          <div
            id="tool"
            style={{
              minHeight: width > 992 ? "600px" : width / 2,
              paddingTop: "50px",
            }}
            className="bg-first text-fourth"
          >
            <Container>
              <Row className="mt-5 pt-5">
                <Col>
                  <img
                    src={poduse}
                    alt="tool"
                    className="rounded-5"
                    style={{
                      maxHeight: "600px",
                      height: width > 1400 ? 600 : width > 1200 ? 500 : 400,
                      maxWidth: "600px",
                      marginTop: "-100px",
                      marginLeft: width > 768 ? "" : "15vw",
                    }}
                  ></img>
                </Col>
                <motion.div
                  className="col playful-regular "
                  whileInView={{
                    x: [-150, width > 992 ? -100 : width > 768 ? 20 : 40],
                    y: [100, width > 768 ? -100 : 0],
                    transition: {
                      delay: 0.2,
                      duration: 0.7,
                      type: "string",
                      stiffness: 70,
                    },
                    opacity: [0, 1],
                  }}
                  style={{
                    marginLeft: width > 768 ? "0" : width / 10,
                    paddingTop: "15%",
                  }}
                  viewport={{ once: true }}
                >
                  <h2
                    className="simple-title   "
                    style={{
                      fontSize:
                        width > 1200
                          ? "50px"
                          : width > 992
                          ? "40px"
                          : width > 768
                          ? "28px"
                          : "24.5px",
                    }}
                  >
                    Только лучшее для клиентов
                  </h2>
                  <p
                    className="mt-3"
                    style={{
                      fontSize:
                        width > 1200 ? "18px" : width > 992 ? "15px" : "13px",
                    }}
                  >
                    Ваш комфорт в моем кресле и мой профессионализм - залог
                    эффективной работы.
                  </p>
                </motion.div>
              </Row>
            </Container>
          </div>
        </>
      ) : (
        <>
          <div
            id="tool"
            style={{
              minHeight: width > 992 ? "600px" : width / 2,
              paddingTop: "50px",
            }}
            className="bg-first text-fourth"
          >
            <Container>
              <Row className="mt-5 pt-5">
                <Col className="col-12">
                  <img
                    src={poduse}
                    alt="tool"
                    className="rounded-5"
                    style={{
                      maxHeight: "500px",
                      maxWidth: "500px",
                      marginTop: "-100px",
                      width: width > 992 ? "350px" : width / 1.5,
                    }}
                  ></img>
                </Col>
              </Row>
              <Row>
                <motion.div
                  className="col playful-regular"
                  whileInView={{
                    x: [
                      width > 400 ? 100 : width / 8,
                      width > 400 ? -50 : width / -10,
                    ],
                    y: [100, 0],
                    transition: {
                      delay: 0.2,
                      duration: 0.7,
                      type: "string",
                      stiffness: 70,
                    },
                    opacity: [0, 1],
                  }}
                  style={{ marginLeft: width / 10 }}
                  viewport={{ once: true }}
                >
                  <h2
                    className="simple-title   "
                    style={{
                      fontSize: width > 350 ? "22px" : width / 15,
                      marginLeft: 6,
                    }}
                  >
                    Только лучшее для клиентов
                  </h2>
                  <p
                    className="mt-3"
                    style={{
                      fontSize: width > 350 ? "14px" : width / 30,
                      marginLeft: 6,
                    }}
                  >
                    Ваш комфорт в моем кресле и мой профессионализм - залог
                    эффективной работы.
                  </p>
                </motion.div>
              </Row>
            </Container>
          </div>
        </>
      )}
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

const Services = () => {
  return (
    <>
      <Hero />
      <Pedicure />
      <Cabinet />
      <Cabinet2 />
      <ContactMe />
    </>
  );
};

export default Services;
