const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to our new app!");
});

app.listen(3000, () =>
  console.log(`server is listeing on port 3000 at localhost.`)
);
