const express = require('express');
const componentModel = require('./componentModel.js');
const router = express.Router();

// On every hit, log the time
router.use(function timeLog (req, res, next) {
  console.log('Components endpoint hit:', new Date(Date.now()).toString());
  next();
})


// TYPE: GET
// ROUTE: /component
// DESC: Get request to get all components
router.get('/', function (req, res) {
  componentModel.find()
    .then(components => res.send(components))
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    })
})


// TYPE: GET
// ROUTE: /component/{id}
// Get request to get component by id
router.get('/:id', function(req, res) {
  componentModel.findById(req.params.id)
    .then(component => res.send(component))
    .catch(err => {
      console.log(err);
      res.status(404).send(err);
    });
});


// TYPE: POST
// ROUTE /component/{id}
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


// TYPE: PUT
// ROUTE: /component/id
// DESC: Update a component with all new values. Created a new one 
// if id does not already exist
router.put('/:id', function(req, res) {
  let component = {
    name: req.body.name, 
    category: req.body.category, 
    description: req.body.description, 
    producer: req.body.producer,
    specs: JSON.parse(req.body.specs)
  }
  // Find the object with given id and update. The third argument is an object containing 
  // options where upsert is whether to create a new object if the id was not found, new means
  // that it will return the updated object not the old one, and runValidators just tells 
  // mongoose to run validator functions.
  componentModel.findByIdAndUpdate(req.params.id, component, {upsert: true, new: true, runValidators: true})
    .then(updatedComponent => (
      res.send(updatedComponent)
    ))
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});


// TYPE: PATCH
// ROUTE: /component/id
// DESC: Updates a certain field, or several fields, of a component. Does not create a 
// new one if id does not exist
router.patch('/:id', function (req, res) {
  // Get only the required values
  let newObject = req.body;
  // Need to handle specs individually since it needs to be parsed
  if (req.body.specs) {
    newObject.specs = JSON.parse(req.body.specs);
  }
  componentModel.findByIdAndUpdate(
    req.params.id,
    newObject,
    {new: true, runValidators: true}
  )
    .then(updatedComponent => res.send(updatedComponent))
    .catch(err => {
      console.log(err);
      res.status(404).send(err);
    });
});


// TYPE: DELETE
// ROUTE: /component/id
// DESC: Delete component by id
router.delete('/:id', function (req, res) {
  componentModel.findByIdAndRemove(req.params.id)
    .then(dbRes => res.send(dbRes))
    .catch(err => {
      console.log(err);
      res.status(404).send(err);
    })
});


module.exports = router
