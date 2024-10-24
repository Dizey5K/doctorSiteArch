var express = require("express");
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});
router.get("/about", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});
router.get("/contact", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});
router.get("/services", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});
router.get("/admin", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

router.get("/*.*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../client/build", `${req.path}`));
});

module.exports = router;
