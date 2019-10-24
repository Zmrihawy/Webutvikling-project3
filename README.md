## Overview
THe aim of this project was to implement an online catalog where a user is able to search up items and 
give a review for an item that later can be saved into the catalog. As a solution to the problem, 
we decided to implement an online electronics catalog with various electronic components. We thought this idea would
provide us with a variety of components to use and therefor would be a good solution to the problem.

## Project structure
Our project build is based upon two major end points, a client part and a server part. The server part contains all the 
necessary REST API implementations needed for fetching data from the backend and the client part contains the frontend "user-based"
actions like searching for an item, showing items, filtering and sorting of items.

### REST API (backend)
A REST API server system was setup to enable navigation within our catalog page routes possible. We preferred to use REST API 
over GraphQL because its more easier to understand and deal with. In addition some group members had more experience REST API. 
See section about Redux.

### Material - UI components (Frontend)
Most of our react components are built using Material Ui elements. The Material Ui library comes stocked with elements  
like `<Grid/>`, `</Typography>`, and custom html elements `<Card/>` and `<Button/>` which made it easier to implement
our components. This ensured that we didnt need to build much styles and therefore giving our  catalog a 
consistent frontend design. 


## State management
### Redux 
Redux is a Javascript Library for mananging application state.


### Testing
### Unit Testing


### Cypress
For end to end testing we take advantage of cypress' functionality and test what would exactly happen in real time
when a user searches for an item from the backend. The aim is to test that the item is fetched from the backed and 
downloaded for the client. With cypress we test this and confirm that a user gets a search result containing at least 
one component if the item is available in the backend. The test fails if the component is not available.

To use cypress navigate to the client directory and the run the following command: `npx cypress open` 
Then select a test file to begin running it.

## Design and Functionality
Our catalog contains a search input field where users can search up items and get back a result in form of a list.
The result is a list of all items that have a name, a category, or a producer of the item that contains the letters 
being written in the search bar.  




### Pagination 
We have an endpoint that implements pagination. It has several features and uses several params.

### Params

pageNum: What page to get.

objectsPerPage: Number of objects to get pr page

isAsc: Which way to sort. If set to "false" it sorts by descending, everything else id ascending. Default value is ascending.

sortBy: What field to sort by. Example: "name". Default value is "price".

filterField: What field to sort by. If no value is provided, nothing is filtered. Needs to be used with filterVal.

filterVal: What value to sort filterField by. Uses a regex to check if value contains this field, so it does not check for exact match, its more relaxed. Must be used with filterField.


Example curl commands:

Get components, ten per page, first page: `curl "localhost:5000/api/component/pagination"`

Get components, three per page, first page: `curl "localhost:5000/api/component/pagination?pageNum=0&objectsPerPage=3"`

Get components, three per page, second page: `curl "localhost:5000/api/component/pagination?pageNum=1&objectsPerPage=3"`

Get components, sort by names instead of default value price, get 4 objects per page, get first page:
`curl "localhost:5000/api/component/pagination?pageNum=0&objectsPerPage=4?sortBy=name"`

Get components, sort by name, sort descending, get 4 objects per page, get second page:
`curl "localhost:5000/api/component/pagination?pageNum=1&objectsPerPage=4?sortBy=name&isAsc=false"`

Get components, filter categories on all category values that contain the string "Lapto" (So it gets all laptops), get 4
objects per page, get first page:
`curl "localhost:5000/api/component/pagination?pageNum=0&objectsPerPage=4&filterField=category&filterVal=Lapto"`
