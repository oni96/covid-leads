import express from "express";
var router = express.Router();

import {
  insertNewOxygenLead,
  verifyOxygenLead,
  getAllOxygenLeads,
  editOxygenLead
} from "../db/OxygenLeads";

router.all("/", (req, res) => {
  getAllOxygenLeads().then((data) => res.send(data));
});

router.post("/addOxygenLead", async (req, res) => {
  var array = [
    req.body.name,
    req.body.address,
    req.body.phNo,
    new Date(),
    1,
    req.body.user,
    req.body.email,
  ];

  const response = await insertNewOxygenLead(array);
  res.send(response);
});

router.post("/verifyOxygenLead", (req, res) => {
  verifyOxygenLead(req.body.id);
  res.send({ updated: true });
});

router.post("/editOxygenLead",async (req,res)=>{
  var array = [
    req.body.name,
    req.body.address,
    req.body.phNo,
  ];

  const response = await editOxygenLead(array,req.body.id);
  res.send({updated: true})
})

module.exports = router;
