import React, { Component } from "react";
import axios from "axios";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBTextArea,
} from "mdb-react-ui-kit";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

async function FormSubmit({ name, password }) {
  console.log(name, password);
  const result = await axios.post("/api/auth", {
    username: name,
    password: password,
  });
  window.location.reload(false);
}

async function UserDelete({ id }) {
  console.log(id);
  const result = await axios.post(`api/users/delete/${id}`);
  window.location.reload(false);
}

async function AddUser({ nameC, emailC, phoneC, messageC }) {
  const result = await axios.post(`api/users`, {
    username: nameC,
    email: emailC,
    phone: phoneC,
    form_message: messageC,
  });
  window.location.reload(false);
}

function Admin({ loggedIn }) {
  console.log(loggedIn);

  //NameState
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  //PasswordState
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //NameCState
  const [nameC, setNameC] = useState("");

  const handleNameCChange = (event) => {
    setNameC(event.target.value);
  };
  //EmailCState
  const [emailC, setEmailC] = useState("");

  const handleEmailCChange = (event) => {
    setEmailC(event.target.value);
  };
  //PhoneCState
  const [phoneC, setPhoneC] = useState("");

  const handlePhoneCChange = (event) => {
    setPhoneC(event.target.value);
  };
  //MessageCState
  const [messageC, setMessageC] = useState("");

  const handleMessageCChange = (event) => {
    setMessageC(event.target.value);
  };

  const [users, setUsers] = React.useState(null);
  React.useEffect(() => {
    axios.get("/api/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  if (loggedIn == true) {
    return (
      <div>
        <Container className="mb-5">
          <Row className=" d-flex justify-content-center align-items-stretch ">
            {users.map((user) => (
              <Col className="col-3 mt-2 d-flex align-items-stretch me-1 ms-1">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>
                      <Button
                        size="sm"
                        className=" btn-light bg-white"
                        onClick={() => UserDelete(user)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 448 512"
                        >
                          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                        </svg>
                      </Button>
                      {user.username}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {user.email}
                      <br />
                      {user.phone}
                    </Card.Subtitle>
                    <Card.Text className="mt-2">{user.form_message}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <h2 className="caption-text text-center mt-5">Добавить клиента</h2>
        <Container>
          <Row className="d-flex justify-content-center text-center">
            <Col className="mt-3">
              <form>
                <MDBInput
                  type="username"
                  id="form4Example1"
                  wrapperClass="mb-4"
                  placeholder="Имя"
                  onChange={handleNameCChange}
                />
                <MDBInput
                  type="email"
                  id="form4Example2"
                  wrapperClass="mb-4"
                  placeholder="Email"
                  onChange={handleEmailCChange}
                />
                <MDBInput
                  type="phone"
                  id="form4Example2"
                  wrapperClass="mb-4"
                  placeholder="Номер телефона"
                  onChange={handlePhoneCChange}
                />
                <MDBTextArea
                  id="form_message"
                  rows={4}
                  placeholder="Описание проблемы"
                  onChange={handleMessageCChange}
                />

                <Button
                  type="submit"
                  className="mb-4 mt-3 btn text-dark bg-transparent border-dark regular-text"
                  block
                  onClick={() => AddUser({ nameC, emailC, phoneC, messageC })}
                >
                  <span className="regular-text fw-semibold text-uppercase">
                    Добавить в список
                  </span>
                </Button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <MDBContainer fluid>
          <MDBRow className="d-flex justify-content-center align-items-center h-100">
            <MDBCol col="12">
              <MDBCard
                className="bg-white my-5 mx-auto"
                style={{ borderRadius: "1rem", maxWidth: "500px" }}
              >
                <MDBCardBody className="p-5 w-100 d-flex flex-column">
                  <h2 className="fw-bold mb-2 text-center">Вход</h2>

                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Имя"
                    id="formControlLg"
                    type="name"
                    size="lg"
                    onChange={handleNameChange}
                    value={name}
                  />
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Пароль"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    onChange={handlePasswordChange}
                    value={password}
                  />

                  <MDBCheckbox
                    name="flexCheck"
                    id="flexCheckDefault"
                    className="mb-4"
                    label="Запомнить пароль"
                  />

                  <Button
                    size="lg"
                    className=" btn-dark "
                    onClick={() => FormSubmit({ name, password })}
                  >
                    Login
                  </Button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Admin;
