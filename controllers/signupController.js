var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/signupcontroller", function (req, res, next) {
  console.log("this is the singup contorller");

  // res.render("signup", { title: "controller", heading: "sign up" });
});

module.exports = router;
