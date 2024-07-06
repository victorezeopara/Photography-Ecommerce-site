import { Router } from "express";
var router = Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("about", { title: "about" });
});

export default router;
