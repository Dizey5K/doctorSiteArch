import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Helmet } from "react-helmet";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import legs_bnw from "../images/legs-bnw.png";
import person from "../images/person.jpg";
import work1 from "../images/work1.png";
import work2 from "../images/work2.jpg";
import work3 from "../images/work3.jpg";

import { motion } from "framer-motion";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBCol,
  MDBRow,
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
                      На главную
                    </p>
                  </Row>
                </motion.div>
                <Col
                  className="col-10 bg-second ms-1 rounded-5"
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
                          Обо мне
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
                          Подологи занимаются проблемами ногтей и стоп,
                          оказывают доврачебную помощь.
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
                  className="col-12 bg-second rounded-5"
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
                          Обо мне
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
                          Подологи занимаются проблемами ногтей и стоп,
                          оказывают доврачебную помощь.
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
      style={{ minHeight: "600px" }}
      className="bg-first text-fourth pt-5"
    >
      <Container>
        <Row className="mt-5 pt-5">
          <Col>
            <img
              src={person}
              alt="me"
              className="rounded-5 "
              style={{
                maxHeight: "600px",
                maxWidth: "600px",
                marginTop: "-40px",
                width:
                  width > 1200
                    ? ""
                    : width > 992
                    ? 400
                    : width > 768
                    ? ""
                    : width > 525
                    ? 480
                    : width / 1.1,
              }}
            ></img>
          </Col>
          <motion.div
            className="col playful-regular"
            initial={{ opacity: 0.2 }}
            style={{ marginTop: width > 1200 ? 0 : width > 992 ? -125 : 0 }}
            whileInView={{ opacity: 1, y: [100, 0] }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              type: "spring",
              stiffness: 30,
            }}
          >
            <h2
              className="simple-title "
              style={{
                fontSize:
                  width > 1400 ? "70px" : width > 525 ? "50px" : width / 10,
              }}
            >
              Наталья Глухова
            </h2>
            <p
              className="mt-3"
              style={{ fontSize: width > 525 ? "" : width / 30 }}
            >
              Я Наталья. Специалист-подолог с большим стажем ( более 7 лет).
              Преподаватель Института подологии. Спасатель ваших ног. Подологи
              занимаются проблемами ногтей и стоп, оказывают доврачебную помощь.
            </p>
            <h3 className="ps-4 simple-title fs-4">В чем моя особенность? </h3>
            <p style={{ fontSize: width > 525 ? "" : width / 30 }}>
              Все просто. Я знаю, что вы чувствуете, потому что сама это
              пережила. Я понимаю, что нужно делать и делаю так, чтобы было не
              больно, аккуратно и действенно. У меня есть все необходимое для
              того, чтобы вам было комфортно и безопасно: чистый кабинет,
              аппарат работы со спреем, стерильные инструменты и
              профессиональная космецевтика. Я работаю на результат. Вот и всё.
              Мои клиенты — мои друзья. Друзья, которые нуждаются в помощи. И я
              помогаю. Записывайтесь на консультацию внизу страницы и приходите
              ко мне за качеством.
            </p>
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
    <>
      {width > 400 ? (
        <>
          <motion.div
            id="advantages"
            style={{ minHeight: "200px" }}
            className="bg-fourth text-fourth pt-5 mt-5"
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
              <Row className="d-flex text-first justify-content-around align-items-center text-center">
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
            </motion.div>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            id="advantages"
            style={{ minHeight: "200px" }}
            className="bg-fourth text-fourth pt-5 mt-5"
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
              <Row className="d-flex text-first justify-content-around align-items-center text-center">
                <Row>
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
                </Row>
                <Row>
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
                </Row>
                <Row>
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
              </Row>
            </motion.div>
          </motion.div>
        </>
      )}
    </>
  );
};

const Works = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });
  return (
    <>
      {width > 768 ? (
        <>
          <div
            id="works"
            style={{ minHeight: "200px" }}
            className="text-fourth pt-5 mt-5"
          >
            <Container className="playful-regular text-center">
              <h2 className="simple-title fs-1">Мои работы</h2>
              <Row className="text-center pt-5">
                <motion.div
                  className="col-4 d-flex align-items-stretch "
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1, x: ["-100vw", "0vw"] }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                    stiffness: 30,
                  }}
                >
                  {" "}
                  <MDBCard className=" rounded-5">
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image hover-overlay"
                    >
                      <MDBCardImage
                        src={work1}
                        fluid
                        alt=""
                        className="w-100 rounded-top-5 rounded-bottom-2"
                        style={{}}
                      />
                      <a href="/services">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody>
                      <MDBCardText>
                        Деформация и дистрофия ногтевой пластины, онихолизис
                        зачистка, установка коррекционной системы 3ТО
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </motion.div>
                <motion.div
                  className="col-4 d-flex align-items-stretch "
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1, y: ["100vh", "0vh"] }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                    stiffness: 30,
                  }}
                >
                  <MDBCard className="rounded-5">
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image hover-overlay"
                    >
                      <MDBCardImage
                        src={work2}
                        fluid
                        alt="..."
                        className="w-100 rounded-top-5 rounded-bottom-2"
                        style={{}}
                      />
                      <a href="/services">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody>
                      <MDBCardText>
                        Онихокриптоз. Коррекционная система титановая нить
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </motion.div>
                <motion.div
                  className="col-4 d-flex align-items-stretch "
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1, x: ["100vw", "0vw"] }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                    stiffness: 30,
                  }}
                >
                  <MDBCard className="rounded-5">
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image hover-overlay"
                    >
                      <MDBCardImage
                        src={work3}
                        fluid
                        alt="..."
                        className="w-100 rounded-top-5 rounded-bottom-2"
                        style={{}}
                      />
                      <a href="/services">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody>
                      <MDBCardText>Стержневая мозоль</MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </motion.div>
              </Row>
            </Container>
          </div>
        </>
      ) : (
        <>
          <div
            id="works"
            style={{ minHeight: "200px" }}
            className="text-fourth pt-5 mt-5"
          >
            <Container className="playful-regular text-center align-content-center justify-content-center">
              <h2 className="simple-title fs-1">Мои работы</h2>
              <Row className="text-center pt-5">
                <Row>
                  <motion.div
                    className="col-12 d-flex align-items-stretch"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      x: ["-100vw", "0vw"],
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.1,
                      type: "spring",
                      stiffness: 30,
                    }}
                    style={{
                      width: width > 400 ? "400px" : "",
                      marginLeft:
                        width > 540
                          ? "70px"
                          : width > 500
                          ? "60px"
                          : width > 470
                          ? "40px"
                          : width > 400
                          ? "25px"
                          : "15px",
                    }}
                  >
                    {" "}
                    <MDBCard>
                      <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image hover-overlay"
                      >
                        <MDBCardImage
                          src={work1}
                          fluid
                          alt="..."
                          className="w-100"
                          style={{}}
                        />
                        <a href="/services">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.15)",
                            }}
                          ></div>
                        </a>
                      </MDBRipple>
                      <MDBCardBody>
                        Деформация и дистрофия ногтевой пластины, онихолизис
                        зачистка, установка коррекционной системы 3ТО
                      </MDBCardBody>
                    </MDBCard>
                  </motion.div>
                </Row>
                <Row className="align-items-centre justify-content-centre pt-3 pb-3  ">
                  <motion.div
                    className="col-12 d-flex align-items-stretch "
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      y: ["100vh", "0vh"],
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.1,
                      type: "spring",
                      stiffness: 30,
                    }}
                    style={{
                      width: width > 400 ? "400px" : "",
                      marginLeft:
                        width > 540
                          ? "70px"
                          : width > 500
                          ? "60px"
                          : width > 470
                          ? "40px"
                          : width > 400
                          ? "25px"
                          : "15px",
                    }}
                  >
                    <MDBCard>
                      <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image hover-overlay"
                      >
                        <MDBCardImage
                          src={work2}
                          fluid
                          alt="..."
                          className="w-100"
                          style={{}}
                        />
                        <a href="/services">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.15)",
                            }}
                          ></div>
                        </a>
                      </MDBRipple>
                      <MDBCardBody>
                        <MDBCardText>
                          Онихокриптоз. Коррекционная система титановая нить
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </motion.div>
                </Row>
                <Row>
                  <motion.div
                    className="col-12 d-flex align-items-stretch "
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1, x: ["100vw", "0vw"] }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.1,
                      type: "spring",
                      stiffness: 30,
                    }}
                    style={{
                      width: width > 400 ? "400px" : "",
                      marginLeft:
                        width > 540
                          ? "70px"
                          : width > 500
                          ? "60px"
                          : width > 470
                          ? "40px"
                          : width > 400
                          ? "25px"
                          : "15px",
                    }}
                  >
                    <MDBCard>
                      <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image hover-overlay"
                      >
                        <MDBCardImage
                          src={work3}
                          fluid
                          alt="..."
                          className="w-100"
                          style={{}}
                        />
                        <a href="/services">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.15)",
                            }}
                          ></div>
                        </a>
                      </MDBRipple>
                      <MDBCardBody>
                        <MDBCardText>Стержневая мозоль</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </motion.div>
                </Row>
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
const TITLE = "Наталья Глухова | Обо мне";

const About = () => {
  return (
    <motion.div>
      <Helmet>
        <meta
          name="description"
          content="Наталья Глухова - Esse dolore cupidatat ex Lorem ut ea ut proident. Proident sint reprehenderit reprehenderit eu occaecat eu id nisi occaecat officia et deserunt ea. Officia cupidatat velit mollit minim veniam. Elit duis ex non labore labore est voluptate."
        />
        <link rel="canonical" href="https://????/about" />
        <title>{TITLE}</title>
      </Helmet>
      <Hero /> <Me /> <Advantages /> <Works />
      <ContactMe />
    </motion.div>
  );
};

export default About;
