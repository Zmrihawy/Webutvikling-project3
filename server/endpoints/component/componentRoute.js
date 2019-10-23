const express = require("express");
const componentModel = require("./componentModel.js");
const router = express.Router();
const _ = require("lodash");

// On every hit, log the time
router.use(function timeLog(req, res, next) {
  console.log("Components endpoint hit:", new Date(Date.now()).toString());
  next();
});

// TYPE: GET
// ROUTE: /component
// DESC: Get request to get all components
router.get("/", function(req, res) {
  componentModel
    .find()
    .then(components => res.send(components))
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});


// TYPE: GET
// ROUTE: /component/featuredComponents
// DESC: Get request to get some featuredComponents. It gets random components, number of
// components returned depend on the size query param (default is 6). It also checks
// if components have imgURL but if to few have it, it will stop trying to enforce
// this and just return random.
router.get("/featuredComponents", function(req, res) {
  const paramSize = parseInt(req.query.size);
  let responseSize = paramSize ? paramSize : 6;
  componentModel.aggregate([{ $sample: { size: responseSize*2 } }])
    .then(components => {
      // Try to filter on components having a image URL. If not enough are found, dont bother filtering as its just a nice to have.
      let filteredComponents = components.filter(component => component.pictureURL != undefined && component.pictureURL != "");
      if (filteredComponents.length >= responseSize) {
        res.send(_.sampleSize(filteredComponents, responseSize))
      } else {
        res.send(_.sampleSize(components, responseSize));
      }
    })
  .catch(err => {
    console.log(err);
    res.status(500).send(err);
  });
});


// TYPE: GET
// ROUTE: /component/pagination/params
// PARAMS:
//    pageNum: Which page to get
//    objectsPerPage: Num of objects pr page
//    sortBy: What field to sort by
//    isAsc: sort by ascending or descending
//    filterField: What field to sort by, must be used with filterVal
//    filterVal: What value to sort filterField by. Uses regex to check if
//      the value contains this string. Must be used with filterField
// Get requests with pagination and paramaters. Paramters are optional, if none
// are provided, it just returns the 10 first objects sorted by price ascending.
router.get("/pagination/", function(req, res) {
  // Get and parse URL query params
  let {
    pageNum,
    objectsPerPage,
    sortBy,
    isAsc,
    nameSearch,
    filterField,
    filterVal
  } = req.query;
  pageNum = parseInt(pageNum) ? parseInt(pageNum) : 0;
  objectsPerPage = parseInt(objectsPerPage) ? parseInt(objectsPerPage) : 10;
  console.log(isAsc);
  isAsc = isAsc === "false" ? -1 : 1;

  // If pagination params are set, check that they are in ranger
  if (objectsPerPage < 1 || objectsPerPage > 50) {
    res.status(500).send("Bad number of objects per page: " + objectsPerPage);
  }

  // Build filter object if the corresponding query params are set
  let filter = {};
  if (nameSearch) {
    filter.name = { $regex: nameSearch, $options: "i" }
  }
  if (filterField && filterVal) {
    filter[filterField] = { $regex: filterVal, $options: "i" };
  }


  // Configure sort object if the query param is set. Otherwise, set it to default
  // This could be done in one if sentence, but doing it in two to achieve
  // good and correct error reporting
  let sortByObj = {};
  if (sortBy) {
    // Check if sortby is a valid sort query, if it isnt we return error
    if (componentModel.schema.paths[sortBy]) {
      sortByObj[sortBy] = isAsc;
    } else {
      console.log("Error! Sortby param not correct");
      // We could set sort to price here, but it is most likely a bug that should
      // be sorted out, so just return and send error
      return res
        .status(500)
        .send(
          "Sort by param not found! Not executing as this is probably a bug"
        );
    }
  } else {
    // Set default sort value
    sortByObj.price = isAsc;
  }

  console.log(sortByObj);
  console.log(sortBy);

  // Mongoose query. Get a count of all component objects of this query, this is used for pagination metadata
  componentModel
    .find(filter)
    .countDocuments()
    .then(totObjects => {
      // Compute the total number of pages for this pagination query. Used for metadata.
      let totPages = Math.ceil(totObjects / objectsPerPage);
      // This is the main mongoose query. pagination is done with .skip() and .limit() methods
      return componentModel
        .find(filter)
        .limit(objectsPerPage)
        .skip(pageNum * objectsPerPage)
        .sort(sortByObj)
        .then(components => {
          // Paginated, filtered and sorted components should now be in the
          // components variable. Send result back and include pagination
          // metadata in result
          let paginationRes = {
            components,
            objectsPerPage,
            pageNum,
            totPages,
            totObjects
          };
          res.send(paginationRes);
        })
        .catch(err => {
          console.log("Error fetching components", err);
          res.status(500).send(err);
        });
    })
    .catch(err => {
      console.log("Error getting component count", err);
      res.status(500).send(err);
    });
});

// TYPE: GET
// ROUTE: /component/{id}
// Get request to get component by id
router.get("/:id", function(req, res) {
  componentModel
    .findById(req.params.id)
    .then(component => res.send(component))
    .catch(err => {
      console.log(err);
      res.status(404).send(err);
    });
});

// TYPE: POST
// ROUTE /component/{id}
// Post request to create a new component
router.post("/", function(req, res) {
  let component = new componentModel({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    producer: req.body.producer,
    price: req.body.price,
    pictureURL: req.body.pictureURL,
    specs: JSON.parse(req.body.specs)
  });
  component
    .save()
    .then(updatedComponent =>
      res.status(201).send(JSON.stringify(updatedComponent))
    )
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

// TYPE: PUT
// ROUTE: /component/id
// DESC: Update a component with all new values. Created a new one
// if id does not already exist
router.put("/:id", function(req, res) {
  let component = {
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    producer: req.body.producer,
    price: req.body.price,
    pictureURL: req.body.pictureURL,
    specs: JSON.parse(req.body.specs)
  };
  // Find the object with given id and update. The third argument is an object containing
  // options where upsert is whether to create a new object if the id was not found, new means
  // that it will return the updated object not the old one, and runValidators just tells
  // mongoose to run validator functions.
  componentModel
    .findByIdAndUpdate(req.params.id, component, {
      upsert: true,
      new: true,
      runValidators: true
    })
    .then(updatedComponent => res.send(updatedComponent))
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

// TYPE: PATCH
// ROUTE: /component/id
// DESC: Updates a certain field, or several fields, of a component. Does not create a
// new one if id does not exist
router.patch("/:id", function(req, res) {
  // Get only the required values
  let newObject = req.body;
  // Need to handle specs individually since it needs to be parsed
  if (req.body.specs) {
    newObject.specs = JSON.parse(req.body.specs);
  }
  componentModel
    .findByIdAndUpdate(req.params.id, newObject, {
      new: true,
      runValidators: true
    })
    .then(updatedComponent => res.send(updatedComponent))
    .catch(err => {
      console.log(err);
      res.status(404).send(err);
    });
});

// TYPE: DELETE
// ROUTE: /component/id
// DESC: Delete component by id
router.delete("/:id", function(req, res) {
  componentModel
    .findByIdAndRemove(req.params.id)
    .then(dbRes => res.send(dbRes))
    .catch(err => {
      console.log(err);
      res.status(404).send(err);
    });
});

module.exports = router;
