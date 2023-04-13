const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorise = require("./authorise");
let { people } = require("./data");

// app.use([morgan("tiny")])

// app.get("/",  (req, res) => {
//   res.send("Home");
// });
// app.get("/about", (req, res) => {
//     console.log(req.user)
//   res.send("About");
// });
//app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`welcome ${name}`);
  } else {
    res.status(401).send("please provide some details");
  }
});
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: true, msg: "please provide some details" });
  }
  res.status(201).send({ success: true, data: [...people, { name, id: 6 }] });
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, mdg: `no person with id ${id}` });
  }
  const newPeople = people.map((person, i) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  return res.status(200).json({ success: true, data: newPeople });
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, mdg: `no person with id ${id}` });
  }
  const newPeople = people.filter((person, i) => person.id !== Number(id));
  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("we up!");
});
