import express from "express";
import route from "./routes/index";
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // if data is received from an html form it converts it to json

app.use(route);

app.listen(4000, () => {
  console.log("Server on port", 4000);
});
