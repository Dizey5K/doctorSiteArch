import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Hero = () => {};

const Serv1 = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="service" className="bg-second mt-5 pb-5">
        <Container
          style={{
            marginLeft: width > 992 ? "" : 0,
            marginRight: width > 992 ? "" : 0,
          }}
        >
          {width >= 1400 ? (
            <>
              <Row className="pt-3 text-center playful-regular">
                <Row className="">
                  <Col className="col-8  mt-3 d-flex flex-column playful-regular">
                    <h1
                      className="simple-title text-nowrap fs-2 text-start"
                      style={{ fontSize: "50px" }}
                    >
                      Цены <br />
                    </h1>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-8">
                    <h2 className="fs-5 mt-5 text-start simple-title fs-4">
                      Корректировка ногтевой пластины
                    </h2>
                    <p className="text-start pe-5 ">
                      При нарушении/деформации, установка коррекционной системы
                      титановая нить/система "ЗТО"
                    </p>
                  </Col>
                  <Col className="mt-5 pt-3">
                    <h2 className="p-2">
                      <span className="fs-6 text-nowrap ">Титановая нить</span>
                      <br />
                      2000р
                    </h2>
                  </Col>
                  <Col className=" mt-5 pt-3"></Col>
                  <Col className="mt-5 pt-3">
                    <h2 className="p-2">
                      {" "}
                      <span className="fs-6 text-nowrap ">Система "ЗТО"</span>
                      <br />
                      4000р
                    </h2>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-8">
                    <h2 className="fs-5 mt-5 text-start  simple-title fs-4">
                      Гигиенический педикюр
                    </h2>
                    <p className="text-start pe-5 ">
                      Подразумевает отсутствие каких-либо проблем
                    </p>
                  </Col>
                  <Col className="mt-5 pt-3">
                    <h2 className="p-2">1500р</h2>
                  </Col>
                  <Col className="mt-5 pt-3"></Col>
                  <Col className="mt-5 pt-3"></Col>
                </Row>
                <Row>
                  <Col className="col-8">
                    <h2 className="fs-5 mt-5 text-start simple-title fs-4 ">
                      Парамедецинский педикюр
                    </h2>
                    <p className="text-start pe-5 ">
                      Наличие проблем: глубокие трещины, мозоли, вросшие ногти
                    </p>
                  </Col>
                  <Col className="mt-5 pt-3">
                    <h2 className="p-2">2000р+</h2>
                  </Col>
                  <Col className="mt-5 pt-3"></Col>
                  <Col className="mt-5 pt-3"></Col>
                </Row>
                <Row>
                  <Col className="col-8">
                    <h2 className="fs-5 mt-5 text-start simple-title fs-4 ">
                      Мужской педикюр
                    </h2>
                    <p className="text-start pe-5 ">Гигиеническая обработка</p>
                  </Col>
                  <Col className="mt-5 pt-3">
                    <h2 className="p-2">2000р</h2>
                  </Col>
                  <Col className="mt-5 pt-3"></Col>
                  <Col className="mt-5 pt-3"></Col>
                </Row>
                <Row>
                  <Col className="col-8">
                    <h2 className="fs-5 mt-5 text-start simple-title fs-4 ">
                      Зачистка ногтя
                    </h2>
                    <p className="text-start pe-5 ">На одном пальце</p>
                  </Col>
                  <Col className="mt-5 pt-3">
                    <h2 className="p-2">500р</h2>
                  </Col>
                  <Col className="mt-5 pt-3"></Col>
                  <Col className="mt-5 pt-3"></Col>
                </Row>
                <Row>
                  <Col className="col-8">
                    <h2 className="fs-5 mt-5 text-start simple-title fs-4 ">
                      Обработка стержневой мозоли
                    </h2>
                    <p className="text-start pe-5 "></p>
                  </Col>
                  <Col className="mt-5 pt-3">
                    <h2 className="p-2">500р</h2>
                  </Col>
                  <Col className="mt-5 pt-3"></Col>
                  <Col className="mt-5 pt-3"></Col>
                </Row>{" "}
              </Row>
            </>
          ) : (
            <>
              <Row>
                <Col className="col-12 mt-5 d-flex flex-column playful-regular">
                  <h1 className="simple-title text-nowrap fs-2 text-start">
                    Цены <br />
                  </h1>
                </Col>
                <Row className="pt-3 text-center playful-regular">
                  <Col className="col-12 d-flex flex-columnn fs-5 mt-5 text-start simple-title fs-4">
                    <h2>Корректировка ногтевой пластины</h2>
                  </Col>
                  <Col className="d-flex flex-row col-12">
                    <p className="text-start pe-5 ">
                      При нарушении/деформации, установка коррекционной системы
                      титановая нить/система "ЗТО"
                    </p>
                  </Col>
                  <Col className="col-2 d-flex flex-row ">
                    <h5 className="p-2">
                      <span className="fs-6 text-nowrap ">Титановая нить</span>
                      <br />
                      2000р
                    </h5>
                  </Col>
                  {width > 768 ? (
                    <>
                      <Col className="col-2 d-flex flex-row ms-5 ">
                        <h5 className="p-2">
                          <span className="fs-6 text-nowrap">
                            Система "ЗТО"
                          </span>
                          <br />
                          4000р
                        </h5>
                      </Col>
                    </>
                  ) : (
                    <>
                      <Col className="col-12"></Col>
                      <Col className="col-2 d-flex flex-row ms-0 ">
                        <h5 className="p-2">
                          <span className="fs-6 text-nowrap">
                            Система "ЗТО"
                          </span>
                          <br />
                          4000р
                        </h5>
                      </Col>
                    </>
                  )}
                </Row>
                <Row className="pt-3 text-center playful-regular">
                  <Col className="col-12 d-flex flex-columnn fs-5 mt-5 text-start simple-title fs-4">
                    <h2>Гигиенический педикюр</h2>
                  </Col>
                  <Col className="d-flex flex-row col-12">
                    <p className="text-start pe-5 ">
                      Подразумевает отсутствие каких-либо проблем
                    </p>
                  </Col>
                  <Col className="col-2 d-flex flex-row ">
                    <h5 className="p-2">1500р</h5>
                  </Col>
                </Row>
                <Row className="pt-3 text-center playful-regular">
                  <Col className="col-12 d-flex flex-columnn fs-5 mt-5 text-start simple-title fs-4">
                    <h2>Парамедецинский педикюр </h2>
                  </Col>
                  <Col className="d-flex flex-row col-12">
                    <p className="text-start pe-5 ">
                      Наличие проблем: глубокие трещины, мозоли, вросшие ногти
                    </p>
                  </Col>
                  <Col className="col-2 d-flex flex-row ">
                    <h5 className="p-2">2000р+</h5>
                  </Col>
                </Row>
                <Row className="pt-3 text-center playful-regular">
                  <Col className="col-12 d-flex flex-columnn fs-5 mt-5 text-start simple-title fs-4">
                    <h2>Мужской педикюр</h2>
                  </Col>
                  <Col className="d-flex flex-row col-12">
                    <p className="text-start pe-5 ">Гигиеническая обработка</p>
                  </Col>
                  <Col className="col-2 d-flex flex-row ">
                    <h5 className="p-2">2000р</h5>
                  </Col>
                </Row>
                <Row className="pt-3 text-center playful-regular">
                  <Col className="col-12 d-flex flex-columnn fs-5 mt-5 text-start simple-title fs-4">
                    <h2>Зачистка ногтя</h2>
                  </Col>
                  <Col className="d-flex flex-row col-12">
                    <p className="text-start pe-5 ">На одном пальце</p>
                  </Col>
                  <Col className="col-2 d-flex flex-row ">
                    <h5 className="p-2">500р</h5>
                  </Col>
                </Row>
                <Row className="pt-3 text-center playful-regular">
                  <Col className="col-12 d-flex flex-columnn fs-5 mt-5 text-start simple-title fs-4">
                    <h2>Обработка стержневой мозоли</h2>
                  </Col>
                  <Col className="col-2 d-flex flex-row ">
                    <h5 className="p-2">500р</h5>
                  </Col>
                </Row>
              </Row>
            </>
          )}
        </Container>
      </div>
    </>
  );
};

const About = () => {
  return (
    <>
      <Hero />
      <Serv1 />
    </>
  );
};

export default About;
