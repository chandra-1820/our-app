const express = require("express");
const app = express();

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home-guest");
});

app.listen(3000, () =>
  console.log(`server is listeing on port 3000 at localhost.`)
);
