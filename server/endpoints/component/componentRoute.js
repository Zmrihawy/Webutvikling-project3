const express = require('express');
const componentModel = require('./componentModel.js');
const router = express.Router();

// On every hit, log the time
router.use(function timeLog (req, res, next) {
  console.log('Components endpoint hit:', new Date(Date.now()).toString());
  next();
})

// Get request to get all components
router.get('/', function (req, res) {
  componentModel.find()
    .then(components => res.send(components))
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    })
})

// Get request to get component by id
router.get('/:id', function(req, res) {
  componentModel.findById(req.params.id)
    .then(component => res.send(component))
    .catch(err => {
      console.log(err);
      res.status(404).send(err);
    });
});

// Post request to create a new component
router.post('/', function (req, res) {
  let component = new componentModel({
    name: req.body.name, 
    category: req.body.category, 
    description: req.body.description, 
    producer: req.body.producer,
    specs: JSON.parse(req.body.specs)
  }) 
  component.save()
    .then(updatedComponent => (
      res.status(201).send(JSON.stringify(updatedComponent))))
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    })
})

// Get request to get some simple info
router.get('/about', function (req, res) {
  res.send('This is the endpoint for components');
})



//TODO: Add put and/or patch request(s) to update components by id and values
//
//
//TODO: Add delete request to delete a component
//
//

module.exports = router
