import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

//the important dependencies....
import createError from "http-errors";
import { json, urlencoded } from "express";
import { join } from "path";

// these are the routes the user can request.....
import indexRouter from "./routes/index.js";

import bookEventRouter from "./routes/bookEvent.js";
import galleryRouter from "./routes/gallery.js";
import aboutRouter from "./routes/about.js";
import contactRouter from "./routes/contact.js";
import bookSessionController from "./controllers/bookSession.js";

//database

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//satic routes for files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/images", express.static(__dirname + "public/images"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/index", indexRouter);
//

app.use("/bookevent", bookEventRouter);
app.use("/booksession", bookSessionController);
app.use("/gallery", galleryRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
