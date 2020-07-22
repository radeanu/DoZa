const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const expressJWT = require("express-jwt");

const app = express();
const { cars } = require("./data");
const port = 3030;

app.use(cors());
app.options("*", cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  expressJWT({
    secret: "todo-app-super-shared-secret",
    algorithms: ["HS256"],
  }).unless({
    path: ["/api/auth"],
  })
);

app.post("/api/auth", (req, res) => {
  const { userName, password } = req.body;

  if (userName != "mail@mail.com" || password != "demo18demo") {
    return res.sendStatus(401);
  }

  const token = jwt.sign({ userID: 12344 }, "todo-app-super-shared-secret", {
    expiresIn: "2h",
  });
  res.send({ token });
});

app.get("/api/cars", (req, res) => {
  res.type("json");
  res.send(cars);
});

app.listen(port, () => {
  console.log("Server listen at port: ", port);
});

// function getCars(jwtString) {
//   const token = jwt.decode(jwtstring);

//   if (Date.now() < token.nbf * 1000) {
//     throw new Error("Token not yet valid");
//   }
//   if (Date.now() > token.exp * 1000) {
//     throw new Error("Token has expired");
//   }
//   if (token.iss != "carApi") {
//     throw new Error("Token not issued here");
//   }

//   const userID = token.uid;
//   console.log(userID);

//   return JSON.stringify(cars);
// }
