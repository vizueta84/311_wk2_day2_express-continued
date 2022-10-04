const products = require("../data/products");
const counterVariable = products.length;
const list = (req, res) => {
  res.json(products);
};

const show = (req, res) => {
  const index = req.params.productId;
  const foundProduct = products.find(
    (product) => product._id === Number(index)
  );
 res.json(foundProduct);
};
const create = (req, res) => {
  const counterVariable = products.length;
  const body = req.body;
  body.id = counterVariable + 1;
  products.push(body);
};

module.exports = { list, show, create };
