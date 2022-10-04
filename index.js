const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4001;
const contacts = require("./data/contacts");
const vehicles = require("./data/vehicles");
const comments = require("./data/comments");
const products = require("./data/products");

const contactsRoute = require("./routes/contacts");
const vehiclesRoute = require("./routes/vehicles");
const commentsRoute = require("./routes/comments");
const productsRoute = require("./routes/products");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(commentsRoute);
app.use(contactsRoute);
app.use(productsRoute);
app.use(vehiclesRoute);

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
