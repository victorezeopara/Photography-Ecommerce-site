import { Router } from "express";
var router = Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("signup", { title: "sign up", heading: "sign up" });
});

export default router;
