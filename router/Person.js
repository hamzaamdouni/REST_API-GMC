const express = require('express');
const { addPerson, getAllPerson, getPerson, deletePerson, updatePerson, getSortPerson } = require('../controllers/person.controllers');
const router = express.Router()


// create => POST ()
router.post("/", addPerson);

// Read => GET ()
router.get("/", getAllPerson);


// Update => Update ()
router.put("/:id", updatePerson);

// DELETE => DELETE ()
router.delete("/:id", deletePerson);


module.exports = router;