import express from "express";
var router = express.Router();

import {
  insertNewOxygenLead,
  verifyOxygenLead,
  getAllOxygenLeads,
  editOxygenLead,
  reportOxygenLead,
} from "../db/OxygenLeads";

router.all("/", (req, res) => {
  getAllOxygenLeads().then((data) => res.send(data));
});

router.post("/addOxygenLead", async (req, res) => {
  var array = [
    req.body.name,
    req.body.phNo,
    req.body.locality,
    req.body.city,
    req.body.pincode,
    new Date(),
    1,
    req.body.user,
    0,
  ];

  const response = await insertNewOxygenLead(array);
  if(response.exists == true)
  res.send(response);
  else
  res.send({inserted: true})
});

router.post("/verifyOxygenLead", (req, res) => {
  verifyOxygenLead(req.body.id);
  res.send({ updated: true });
});

router.post("/editOxygenLead", async (req, res) => {
  var array = [req.body.name, req.body.phNo, req.body.locality, req.body.city, req.body.pincode];

  const response = await editOxygenLead(array, req.body.id);
  res.send({ updated: true });
});

router.post("/report", (req, res) => {
  const id = req.body.id;
  reportOxygenLead(id)
    .then((r) => res.send({ reported: true }))
    .catch((err) => res.send(err));
});

module.exports = router;
