# Project3

## Overview
THe aim of this project was to implement an online catalog where a user can search up items and 
give a form of interaction with the items that can be saved into the catalog. As a solution to the problem, 
we decided to implement an online electronics catalog with various electronic components. We thought this idea would
provide us with a  wide range of components to use and therefor would be a good solution to the problem.


## REST API
The project is built with react js and therefore a REST API server system was implemented to enable navigation within 
our catalog page routes possible. We proffered the use of REST API over GraphQL because its more easier to understand 
and deal with. In addition some group members had more experience REST API. 

The project structure is based upon two major end points, a client and a server. The server part contains all the 
necessary REST API implementations needed for fetching data from the backend and the client part takes on the "user-based"
actions like searching for an item, filtering of items and sorting of items.


## Design and Functionality
Our catalog contains a search input field where users can search up items and get back a result in form of a list.
The result is a list of all items that have a name, a category, or a producer of the item that contains the letters 
being written in the search bar.  


## About pagination endpoint
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
