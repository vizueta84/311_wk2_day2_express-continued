const contacts = require("../data/contacts");
const counterVariable = contacts.length;
const list = (req, res) => {
  res.json(contacts);
};

const show = (req, res) => {
  const index = req.params.contactId;
  const foundContact = contacts.find(
    (contact) => contact._id === Number(index)
  );
res.json(foundContact);
};
const create = (req, res) => {
  const counterVariable = contacts.length;
  const body = req.body;
  body.id = counterVariable + 1;
  contacts.push(body);
};
// app.put("/contacts/:id", (req, res) => {
//   const counterVariable = contacts.length;
//   const user = contacts.find((contact) => contacts._id === req.params.id);
//   const body = req.body;
//   console.log(user);
//   // body.id = counterVariable + 1;
//   // contacts.push(body);
// });

module.exports = { list, show, create };
