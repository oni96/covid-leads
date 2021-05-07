import express from "express";
import cors from 'cors'


const app = express();

const oxygenLeads = require("./routes/oxygenLeadsRoute");

app.use(express.urlencoded());
app.use(express.json());
app.use(cors())
app.use("/oxygen", oxygenLeads);

app.listen(5000, () => {
  console.log("App is started");
});
