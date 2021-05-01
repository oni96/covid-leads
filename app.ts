import express from "express";


const app = express();

const oxygenLeads = require("./routes/oxygenLeadsRoute");

app.use(express.urlencoded());
app.use(express.json());

app.use("/oxygen", oxygenLeads);

app.listen(3000, () => {
  console.log("App is started");
});
