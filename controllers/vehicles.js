const vehicles = require("../data/vehicles");
const counterVariable = vehicles.length;
const list = (req, res) => {
  res.json(vehicles);
};

const show = (req, res) => {
  const index = req.params.vehicleId;
  const foundVehicle = vehicles.find(
    (vehicle) => vehicle._id === Number(index)
  );
  res.json(foundVehicle);
};
const create = (req, res) => {
  const counterVariable = vehicles.length;
  const body = req.body;
  body.id = counterVariable + 1;
  vehicles.push(body);
};
// app.put("/vehicles/:id", (req, res) => {
//   const counterVariable = vehicles.length;
//   const user = vehicles.find((vehicle) => vehicles._id === req.params.id);
//   const body = req.body;
//   console.log(user);
// });
module.exports = { list, show, create };
