const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

const cars = [
  { name: "BMW", color: "black", price: 140 },
  { name: "Opel", color: "red", price: 40 },
  { name: "Audi", color: "white", price: 130 },
];

app.get("/cars", (req, res) => {
  res.send(cars);
});

app.post("/cars", (req, res) => {
  const { name: carName } = req.body;
  const filtered = cars.filter(({ name }) => name === carName);

  res.send(filtered);
});

app.listen(port, "", () => {
  console.log("Server listen at port: ", port);
});
