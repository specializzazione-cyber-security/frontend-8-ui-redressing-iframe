var express = require("express");
var router = express.Router();

const Users = [
  {
    username: "admin@gmail.com",
    password: "admin1234",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Input Validation Example" });
});

router.get("/login", function (req, res, next) {
  res.render("login", { title: "Input Validation Example" });
});

/* POST login. */
router.post("/login", function (req, res, next) {
  const { username, password } = req.body;
  if (password && username) {
    const user = Users.find(
      (u) => u.username == username && u.password == password
    );
    if (user) {
      res.send("auth_OK");
      return;
    }
  }
  res.send("auth_KO");
});

router.get("/signup", function (req, res, next) {
  res.render("signup", { title: "Input Validation Example" });
});

/* POST signup. */
router.post("/signup", function (req, res, next) {
  const { username, password } = req.body;
  if (password && username && password.length >= 10) {
    // Signup
    Users.push({
      username,
      password,
    });
    res.send("signup_OK");
    return;
  }
  res.send("signup_KO");
});

module.exports = router;
