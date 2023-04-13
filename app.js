const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorise = require("./authorise");
const peopleRouter=require('./routes/people')
const authRouter=require('./routes/auth')
// app.use([morgan("tiny")])

// app.get("/",  (req, res) => {
//   res.send("Home");
// });
// app.get("/about", (req, res) => {
//     console.log(req.user)
//   res.send("About");
// });
//app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use('/api/people',peopleRouter)
app.use("/login",authRouter)


app.listen(5000, () => {
  console.log("we up!");
});
