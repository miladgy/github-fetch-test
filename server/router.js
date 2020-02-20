const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/users/:username", (req, res) => {
  fetch(`https://api.github.com/users/${req.params.username}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        message: "Some error occured",
        err
      });
    });
});

module.exports = router;
