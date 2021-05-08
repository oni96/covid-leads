import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config({path: '../dev.env'})
import path from 'path'
const staticPage = path.join(__dirname,"../","frontend","build")
console.log(staticPage);


const app = express();

const oxygenLeads = require("./routes/oxygenLeadsRoute");

app.use(express.urlencoded());
app.use(express.json());
app.use(cors())
app.use("/oxygen", oxygenLeads);

app.use(express.static(staticPage))

app.listen(process.env.PORT, () => {
  console.log("App is started");
});
