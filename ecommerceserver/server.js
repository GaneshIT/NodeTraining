const express = require("express");
const cors = require("cors");

const app = express(); //to access rest api
const db = require("./model");
// parse requests of content-type - application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

//access API URL
app.get("/", (req, res) => {
    res.json({ message: "Welcome" });
  });
  // set port, listen for requests
require("./routes/product.route.js")(app);
require('./routes/auth.routes')(app);
const PORT = 8085;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});




