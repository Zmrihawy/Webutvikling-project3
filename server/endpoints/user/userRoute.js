const express = require("express");
const userModel = require("./userModel.js");
const router = express.Router();

// On every hit, log the time
router.use(function timeLog(req, res, next) {
  console.log("User endpoint hit:", new Date(Date.now()).toString());
  next();
});

// TYPE: GET
// ROUTE: /user
// DESC: Get request to get all users
router.get("/", function(req, res) {
  userModel
    .find()
    .then(user => res.send(user))
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

// TYPE: GET
// ROUTE: /user/{id}
// Get request to get user by id
router.get("/:id", function(req, res) {
  userModel
    .findById(req.params.id)
    .then(user => res.send(user))
    .catch(err => {
      console.log(err);
      res.status(404).send(err);
    });
});

// TYPE: POST
// ROUTE /user/{id}
// Post request to create a new user
router.post("/", function(req, res) {
  const { username, shoppingCart } = req.body;
  let user = new userModel({
    username,
    shoppingCart: shoppingCart ? JSON.parse(shoppingCart) : []
  });
  user
    .save()
    .then(updatedUser => res.status(201).json(updatedUser))
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

// TYPE: PATCH
// ROUTE: /user/id
// DESC: Updates a certain field, or several fields, of a user. Does not create a
// new one if id does not exist
router.patch("/:id", function(req, res) {
  // Get only the required values
  let newObject = req.body;
  // Need to handle specs individually since it needs to be parsed
  if (req.body.shoppingCart) {
    newObject.shoppingCart = JSON.parse(req.body.shoppingCart);
  }
  userModel
    .findByIdAndUpdate(req.params.id, newObject, {
      new: true,
      runValidators: true
    })
    .then(updatedUser => res.send(updatedUser))
    .catch(err => {
      console.log(err);
      res.status(404).send(err);
    });
});

// TYPE: DELETE
// ROUTE: /user/id
// DESC: Delete user by id
router.delete("/:id", function(req, res) {
  userModel
    .findByIdAndRemove(req.params.id)
    .then(dbRes => res.send(dbRes))
    .catch(err => {
      console.log(err);
      res.status(404).send(err);
    });
});

module.exports = router;
