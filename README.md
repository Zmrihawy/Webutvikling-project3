## Overview
The aim of this project was to implement an online catalog with possibility for a user to search up items and 
give a form of review for an item that later can be saved into the catalog. As a solution to the problem, 
we decided to implement an online electronics catalog with various electronic components were a user has a
shopping cart that can be used to buy components. We thought this idea would provide us with a variety of 
components to use and therefore would be a good solution to the problem. Important to mention that we refer to our 
catalog items as components, this should not be confused with basic react components.

## Project structure
Our project build is based on two parts, a client part and a server part. The server part contains all the 
necessary REST API implementations needed for fetching data from the backend and the client part contains the frontend "user-based"
actions like searching for an item, showing items, filtering and sorting of items.

### Node js + express (backend)
An Express application is most often used as backend application in a client-server architecture whereas the client could 
be written in React.js, the server could be written in Express. We used express as our server.
Express ensured that all middleware can respond to HTTP requests and routing tables were setup to respond to different actions 
based on the HTTP method. A REST API server system was setup to enable navigation within our catalog page routes possible. 
We preferred to use REST API over GraphQL because it is easier to understand and deal with. In addition some group 
members had more experience with REST API. 

We used mongodb as our db. Mongodb is a schemaless database that is easy to setup and use, and is famous for scaling really well, 
perfect for an app that should be able to handle large amounts of data. To interface with mongodb we chose 
to use mongoose, which provides a lot of nice functionality such as validation functions. With this setup, we define our database
model in mongoose schemas, and then we can easily do CRUD operations with mongoose methods.


## Design 
### Material - UI components (Frontend)
Most of our react components are built using Material Ui elements. The Material Ui library comes stocked with elements  
like `<Grid/>`, `</Typography>`, and custom html elements `<Card/>` and `<Button/>` which made it easier to implement
our components. This ensured that we did not need to build much styles for our components and furthermore giving our catalog a 
consistent frontend design. 

### Item Details 
To view details about a component, simply search for it (from the “Browse” link in the Navbar), expand on the result 
tab and click “Go to item page” button. This can also be accessed directly from the homepage by simply clicking on a component. 

### Data visualisation
Three forms of user generated data visualisation were setup, a user shopping cart visualisation, a tag cloud visualisation of
the amount of times components appear in shopping carts, and a tag cloud visualisation of search queries.

We also have some data visualisation of non-user generated data. On our home page, some components are selected at random,
where components that have a picture URL are more likely to be chosen than those that do not have it. These components are
represented as featured items, and are faded in. In addition, we also have a tag cloud visualization of the amount of 
components that are from a producer and category.

###  Shopping Cart Visualisation
In the user shopping cart visualisation, all items in the users shopping cart are displayed according to their quantity. 
The visualisation is in form of words whose font size changes depending on the number of that item in the user's 
shopping cart. This visualisation gets all the users in the database who have added items to their shopping carts 
and displays these items at once. In order to be guarantee that our webapp can handle large amounts of data, a limit
on the amount of items possible to have in the shopping cart is set.

### Tag cloud visualization
A generalized tag cloud view was created. This component accepts an object where keys are the strings that will be
displayed and the values are the weights for how large the string should appear. It projects the values to
always be in a specified range and is used for several visualizations. 

We have also kept in mind that our webapp should handle large amounts of data when designing this visualization. The 
data that this feature uses is calculated on the backend, and accessed through the various `/statistics` endpoints on 
the different models. All these endpoint return data in the same format, the data is stored in redux under statistics, 
and then it is used by the tag cloud React component

## Functionality
### REST API
We have implemented a REST API with pagination capabilities on our server. Our REST resources are users and components. 
For components, there are endpoints for POST, PATCH, PUT, DELETE, and several GET requests. The requests are designed 
in a RESTful way, where the endpoint is `/api/component`, and to access a specific component you add the id. The exceptions 
are the pagination endpoint and statistics endpoint which are GET requests to `/api/component/pagination?<pagination-params>` 
and `api/component/statistics` accordingly. Some of the endpoints are not used by the webapp, but we used it in development 
with the `curl` command to always manage data through our backend to ensure the same format (which could otherwise represent 
an issue since mongodb is schemaless). We also keep them in the codebase to show a complete REST implementation. For users, 
we have POST, GET, PATCH and DELETE requests in the same manner as components, in addition to a statistics endpoint. 
We also have a `log` model and endpoint used to store search queries, which only has a statistics and an unused GET 
request (for development). 

### Redux 
Redux is a Javascript Library for managing application state. Redux provides a real time current state of the catalog with all the 
state variables that the app has at a given time. This helps keep control of how the catalog state changes overtime and it is also

very useful when debugging. We utilize redux extensively in our solution. All API requests are handled through redux with the use
of action creators and the `thunk` package. This means that all the relevant state data for our app is always stored and updated 
in redux. We have structured our code such that React components that represent pages connect to redux, and then delegate the redux
state to their child components that often do most of the work.




### Search, Sorting and filtering 
To search for a component, navigate to the "Browse" page. A user can search for a particular item by simply typing the name of 
the component in the search field "search by name". Filtering is also possible and is done by typing the value that should 
be filtered in the "filter by value" search field and then selecting what type of value this is by clicking the "Filter by" 
button.  The search result is then returned in the form of a list. 

When browsing the results all the paginated components that 
are loaded is viewed, no more components are loaded. This is done through a pagination endpoint (explained later in this document).
When browsing and switching to a new page, the client makes a new request for a new page that replace the old components
with the new components. This way, our app is able to handle (almost) any amount of data. All of this state management is 
done through redux.

Sorting items can be done by clicking "Sort by" button. It is possible to sort by name, price, category and so on. In addition 
It is possible to sort in ascending or descending order. Again, this is done on the server side.

### Pagination 
We have a solid pagination endpoint that accepts many params and returns a list of components. This endpoint can do
filtering on any category, searching by name, sorting by any field in ascending or descending order, and of course pagination.
Pagination is controlled by specifying which page to be retrieved and the number of objects per page. Pagination 
metadata such as the total number of pages for the corresponding query is included in the result. On the client, 
the pagination data is stored in redux and used by the appropriate React components. 

### User generated data
To store user generated data a user model was implemented. A user has a shopping cart where items can be added or removed.
A user can add up to 40 items of a particular item to the cart. This limit constricts a user from adding lots of items
at ounce which would crash the browser. In addition, a log model was implemented to store all searches and results. This
represents another form of user generated data.


## Testing
We deployed three methods of testing, unit testing with jest, end-to-end testing with cypress and Chai mocha super testing. 
All unit tests can be found in client directory in tests folder. Run `npm test` run all tests. 
The cypress tests can be found in the cypress folder. The Chai mocha tests can be found in the server directory.

### Unit Testing
We decided to use unit testing for testing individual components. This was done by making snapshot tests for the major
components. 
  
### Cypress
For end to end testing we take advantage of cypress' functionality and test what would exactly happen in real time
when a user searches for an item from the backend. The aim is to test that the item is fetched from the backed and 
downloaded for the client. With cypress we test this and confirm that a user gets a search result containing at least 
one component if the item is available in the backend. The test fails if the component is not available.

To use cypress navigate to the client directory and run the following command: `npx cypress open` 
Then select a test file to begin running it.

### Chai Mocha Testing 
We have implemented backend tests using chai, mocha and super-tests. With these framework, we can automatically check 
that the responds our backend returns are as expected. With super-test we can actually start an instance of our server
and make request to it. Of course, our mongodb instance has to be in reach for this to work. To run the tests, make sure
you are on the NTNU net, go to the server folder, then run `npm test`.
