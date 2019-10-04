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
  componentModel.findById(req.params.id)
    .then(dbResComponent => {
      let component;
      // If there is no component with this id, create a new one as per PUT request definition
      if (!dbResComponent) {
        console.log("component was not found, creating a new one");
        component = new componentModel({
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
      // If there is a component with this id, update that component
      } else {
        console.log("component was found, updateing with new values");
        dbResComponent.name = req.body.name, 
        dbResComponent.category = req.body.category, 
        dbResComponent.description = req.body.description, 
        dbResComponent.producer = req.body.producer,
        dbResComponent.specs = JSON.parse(req.body.specs)
        dbResComponent.save()
          .then(updatedComponent => (
            res.status(201).send(JSON.stringify(updatedComponent))))
          .catch(err => {
            console.log(err);
            res.status(500).send(err);
          })
      }

    })
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
