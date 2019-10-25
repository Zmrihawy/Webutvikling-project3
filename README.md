## Overview
THe aim of this project was to implement an online catalog where a user is able to search up items and 
give a review for an item that later can be saved into the catalog. As a solution to the problem, 
we decided to implement an online electronics catalog with various electronic components. We thought this idea would
provide us with a variety of components to use and therefor would be a good solution to the problem.

## Project structure
Our project build is based upon two major end points, a client part and a server part. The server part contains all the 
necessary REST API implementations needed for fetching data from the backend and the client part contains the frontend "user-based"
actions like searching for an item, showing items, filtering and sorting of items.

### Node js + express (backend)
An Express application is most often used as backend application in a client-server architecture whereas the client could 
be written in React.js, the server could be written in Express. We used express to setup connections to the server. 
Express ensured that all middleware can respond to HTTP requests and routing tables were setup to respond to different actions 
based on the HTTP method. A REST API server system was setup to enable navigation within our catalog page routes possible. 
We preferred to use REST API over GraphQL because its more easier to understand and deal with. In addition some group 
members had more experience REST API. 

TODO: mention something about mongodb server ?? -- Rahim

### Material - UI components (Frontend)
Most of our react components are built using Material Ui elements. The Material Ui library comes stocked with elements  
like `<Grid/>`, `</Typography>`, and custom html elements `<Card/>` and `<Button/>` which made it easier to implement
our components. This ensured that we didnt need to build much styles for our components and furthermore giving our catalog a 
consistent frontend design. 

### Redux 
Redux is a Javascript Library for managing application state. Redux provides a realtime current state of the catalog with all the 
state variables that the app has at a given time. This helps keep control of how the catalog state changes overtime and it is also
very useful when debugging. To use redux on our catalog, open our project in google chrome and ensure that
`Redux DevTools` plugin is installed.

## Testing
We deployed to methods of testing, unit testing with jest and end-to-end testing with cypress. All tests can be found in
client directory in tests folder. Run `npm test` run all tests. The cypress tests can be found in the cypress folder. 

### Unit Testing
We decided to use unit testing for testing individual components. This was done by making snapshot tests for the major
components. 
  
### Cypress
For end to end testing we take advantage of cypress' functionality and test what would exactly happen in real time
when a user searches for an item from the backend. The aim is to test that the item is fetched from the backed and 
downloaded for the client. With cypress we test this and confirm that a user gets a search result containing at least 
one component if the item is available in the backend. The test fails if the component is not available.

To use cypress navigate to the client directory and the run the following command: `npx cypress open` 
Then select a test file to begin running it.


## Design and Functionality

## Sorting and filtering 
To search a component, navigate to the "Browse" page. A user can search for a particular item by simply typing the name of 
the component in the search field "filter by name". Filtering is also possible and is done by typing the value that should 
be filtered in the "filter by value" search field and then selecting what type of value this is by clicking the "Filter by" 
button.  The search result is then returned in form of a list. 

Sorting items can be done by clicking "Sort by" button. Its possible to sort by name, price, category and so on. In addition 
its possible to sort in ascending or defending order.


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


## User generated data
To store user generated data a user model was implemented. A user has a shopping cart where items can be added or removed.
A user can add up to 40 items of a particular item to the cart. This limit constricts a user from adding lots of items
at ounce which would crash the browser.

## Data visualisation
Two forms of visualisation were setup, a user shopping cart visualisation and a visualisation for all available items. 

## Shopping Cart Visualisation
In the user shopping cart visualisation, all items in the users shopping cart are displayed according to their quantity. 
The visualisation is in form of words whose font size changes depending on the number of that item in the user's 
shopping cart. This visualisation gets all the users in the database who have added items to their shopping carts 
an displays these items at ounce. 

## Visualisation for all items
Similar to the shopping cart visualisation this visualisation works in the same way. The difference is that it shows all 
available items in the database by their quantity and all manufacturers.  
