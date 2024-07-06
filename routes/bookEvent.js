import { Router } from "express";

var router = Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("bookEvent", {
    title: "book event page...",
    heading: "book event",
  });
});

export default router;
