// server.js
const express = require("express");
const morgan = require("morgan");
const cookieSession = require("cookie-session");
const sassMiddleware = require("./lib/sass-middleware");
const usersRoutes = require("./routes/users");
const attainRoutes = require("./routes/attain");
const insertRoutes = require("./routes/insert");
const updateRoutes = require("./routes/update");

const PORT = process.env.PORT || 3001;
const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false,
  })
);
app.use(express.static("public"));
app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],
  })
);

app.use("/users", usersRoutes);
app.use("/attain", attainRoutes);
app.use("/insert", insertRoutes);
app.use("/update", updateRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
