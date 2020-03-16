const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// HTML support for views
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use("/static", express.static("static"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/routes", (req, res) => {
  let routes = [];
  app._router.stack.forEach(function(r) {
    if (r.route && r.route.path && !r.route.path.endsWith("/formatted")) {
      routes.push(r.route.path);
    }
  });
  res.send(routes);
});

app.post("/auth", (req, res) => {
  console.log(req.body);
  res.send("RECV");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server started on port ${port}`));
