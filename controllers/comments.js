const comments = require("../data/comments");
const counterVariable = comments.length;
const list = (req, res) => {
  return res.json(comments);
};

const show = (req, res) => {
  const index = req.params.commentId;
  const foundComment = comments.find(
    (comment) => comment._id === Number(index)
  );
  res.json(foundComment);
};
const create = (req, res) => {
  const counterVariable = comments.length;
  const body = req.body;
  body.id = counterVariable + 1;
  comments.push(body);
};
// // app.put("/comments/:id", (req, res) => {
// //   const counterVariable = comments.length;
// //   const user = comments.find((comment) => comments._id === req.params.id);
// //   const body = req.body;
// //   console.log(user);
// });

module.exports = { list, show, create };
