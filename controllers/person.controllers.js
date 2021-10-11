const Person = require("../models/Person");



  // Add new Person
  exports.addPerson = async (req, res) => {
    try {
      const findUser = await Person.findOne({ email: req.body.email });
      if (findUser) {
        return res.status(400).send({ msg: "email should be unique" });
      }
      const newPerson = new Person({ ...req.body });
      await newPerson.save();
      res.send({ msg: "add route", newPerson });
    } catch (error) {
      res.status(400).send({ msg: "user not saved", error });
    }
  };
  
  // Get the entire list of People
  exports.getAllPerson = async (req, res) => {
    try {
      const personslist = await Person.find();
      res.send({ personslist, msg: "get all Person" });
    } catch (error) {
      console.log(error);
      res.status(400).send({ msg: "can not get", error });
    }
  };

  
  // Update one Person by id
  exports.updatePerson = async (req, res) => {
    try {
      const { id } = req.params;
      await Person.updateOne({ _id: id }, { $set: { ...req.body } });
      res.send({ msg: "updated succ" });
    } catch (error) {
      res.status(400).send({ msg: "can not update" });
    }
  };

  // Delete one Person by id
  exports.deletePerson = async (req, res) => {
    try {
      const { id } = req.params;
      let result = await Person.deleteOne({ _id: id });
      res.send({ msg: "deleted succ" });
    } catch (error) {
      res.status(400).send({ msg: "can not delete" });
    }
  };