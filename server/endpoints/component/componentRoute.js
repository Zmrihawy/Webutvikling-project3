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


router.put('/:id', function(req, res) {
  console.log("in components put request. id: " + req.params.id);
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


router.patch('/:id', function (req, res) {
  console.log('in components put request. id: ' + req.params.id);

  // Get only the required values
  let newObject;
  if (req.body.name) {
    newObject.name = req.body.name;
  }
  if (req.body.category) {
    newObject.category = req.body.category;
  }
  if (req.body.description) {
    newObject.description = req.body.description;
  }
  if (req.body.producer) {
    newObject.producer = req.body.producer;
  }
  if (req.body.specs) {
    newObject.specs = JSON.parse(req.body.specs);
  }

  componentModel.findByIdAndUpdate(
    req.params.id,
    newObject,
    {new: true},
  )
  // .then etc etc
});


// Get request to get some simple info
router.get('/about', function (req, res) {
  res.send('This is the endpoint for components');
})




//TODO: Add delete request to delete a component
//
//

module.exports = router
