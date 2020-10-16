const express = require("express");

const Shia = require("./scheme-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Shia.find()
    .then((schemes) => {
      res.json(schemes);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/", (req, res) => {
  const details = req.body;
  Shia.insert(details)
    .then((detail) => {
      res.status(201).json({ data: detail });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Shia.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.status(200).json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find that user with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
