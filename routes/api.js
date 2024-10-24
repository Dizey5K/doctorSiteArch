var express = require("express");
var router = express.Router();
var path = require("path");
var database = require("../database");
const { request } = require("http");

//get all Users
router.get("/users", async (req, res, next) => {
  if (req.session.loggedin === true) {
    const users = await database.getAllUsers();
    res.json(users);
  } else {
    res.json({ loggedin: "false" });
  }
});

//get1User
router.get("/users/:id", async (req, res, next) => {
  if (req.session.loggedin === true) {
    const id = +req.params.id;
    const user = await database.getUser(id);
    res.json(user);
  } else {
    res.json({ loggedin: "false" });
  }
});

//add User
router.post("/users", async (req, res, next) => {
  req.session.count++;
  console.log(req.session.count, req.body);
  if (
    req.session.count <= 2 ||
    !req.session.count ||
    req.session.loggedin === true
  ) {
    const data = req.body;
    const id = await database.addUser(data);
    res.json(id);
  } else {
    res.json({ session: "banned" });
  }
});

//delete Users
router.post("/users/delete/:id", async (req, res, next) => {
  if (req.session.loggedin === true) {
    const id = +req.params.id;
    await database.deleteUser(id);
    res.status(200).send("Пользователь удалён.");
  } else {
    res.json({ loggedin: "false" });
  }
});

//auth
router.post("/auth", async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username, password);

  if (username && password) {
    const admin = await database.getAdmin();
    console.log(admin);
    if (username == admin.username && password == admin.password_adm) {
      req.session.loggedin = true;
      req.session.cookie.expires = false;
      res.status(200).send("Вход выполнен.");
    } else {
      res.send("Неправильный логин или пароль.");
    }
  } else {
    res.send("Введите логин и пароль.");
  }
});
router.get("/isloggedin", async (req, res, next) => {
  if (req.session.loggedin == true) {
    res.send(true);
  } else {
    res.send(false);
  }
});
module.exports = router;
