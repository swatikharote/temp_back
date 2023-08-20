/** @format */

let express = require("express");
const { EmpModel } = require("../Model/employeeModel");
const { auth } = require("../middlewere/auth");

let empRoute = express.Router();

empRoute.get("/", auth, async (req, res) => {
  let query=req.query
  // console.log(query)
    try {
        let employee = await EmpModel.find(query);
        res.status(200).send(employee);
      } catch (error) {
        res.status(400).send(error);
      }
});

empRoute.post("/create", auth, async (req, res) => {
  try {
    let newEmp = new EmpModel(req.body);
    await newEmp.save();
    res.status(200).send({ msg: "new employee has been created" });
  } catch (error) {
    res.status(400).send(error);
  }
});

empRoute.patch("/update/:empId", auth, async (req, res) => {
  let { empId } = req.params;
  try {
    await EmpModel.findByIdAndUpdate({ _id: empId }, req.body);
    res.status(200).send({ msg: "note has been updated" });
  } catch (error) {
    res.status(400).send(error);
  }
});
empRoute.delete("/delete/:empId", auth, async (req, res) => {
    let { empId } = req.params;
    try {
      await EmpModel.findByIdAndDelete({ _id: empId });
      res.status(200).send({ msg: "note has been Deleted" });
    } catch (error) {
      res.status(400).send(error);
    }
  });

module.exports = { empRoute };
