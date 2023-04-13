const { query } = require("express");

const authorise = (req, res, next) => {
  const { user } = req.query;
  if (user === "john") {
    req.user = { name: "john", id: 3 };
  } else {
    return res.status(401).send("unauthorised");
  }
  console.log("authorise");

  next();
};
module.exports = authorise;
