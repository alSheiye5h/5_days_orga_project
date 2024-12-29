const path = require("path");

const login = async (req, res) => {
  res.status(200).render("login");
};

module.exports = login;
