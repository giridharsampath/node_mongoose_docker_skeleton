const express = require("express");
const healthCheck = require("../routes/healthCheck");

module.exports = (app) => {
  app.use(express.json());
  app.use("/healthCheck", healthCheck);
  app.use("/", errorHandler);
  app.use("*", function (req, res) {
    return res.status(404).send({ message: "Invalid request" });
  });
};

const errorHandler = async (err, req, res, next) => {
  if (err && err.response && err.response.data && err.response.data.message) {
    return res.status(400).send({ message: err.response.data.message });
  } else if (err && err.message) {
    return res.status(400).send({ message: err.message });
  }
  return res.status(500).send({ message: "Server error" });
};
