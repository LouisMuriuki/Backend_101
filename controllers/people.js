let { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: true, msg: "please provide some details" });
  }
  res.status(201).send({ success: true, data: [...people, { name, id: 6 }] });
};

const updatePerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, mdg: `no person with id ${id}` });
  }
  const newPeople = people.filter((person, i) => person.id !== Number(id));
  return res.status(200).json({ success: true, data: newPeople });
};

module.exports={
    getPeople,
    createPersonPostman,
    updatePerson,
    deletePerson
}