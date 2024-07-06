import { Router } from "express";
var router = Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Eze is the bomb", age: 3, height: 5.5 });
});

export default router;
