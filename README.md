# Project3





## About pagination endpoint
We have an endpoint that implements pagination. It has several features and uses several params.

### Params

pageNum: What page to get.

objectsPerPage: Number of objects to get pr page

isAsc: Which way to sort. If set to "false" it sorts by descending, everything else id ascending. Default value is ascending.

sortBy: What field to sort by. Example: "name". Default value is "price".

filterField: What field to sort by. If no value is provided, nothing is filtered. Needs to be used with filterVal.

filterVal: What value to sort filterField by. Uses a regex to check if value contains this field, so it does not check for exact match, its more relaxed. Must be used with filterField.


Example curl commands

Get components, ten per page, first page

curl "localhost:5000/api/component/pagination"

Get components, three per page, first page

curl "localhost:5000/api/component/pagination?pageNum=0&objectsPerPage=3"

Get components, three per page, second page

curl "localhost:5000/api/component/pagination?pageNum=1&objectsPerPage=3"

Get components, sort by names instead of default value price, get 4 objects per page, get first page.

curl "localhost:5000/api/component/pagination?pageNum=0&objectsPerPage=4?sortBy=name"

Get components, sort by name, sort descending, get 4 objects per page, get second page

curl "localhost:5000/api/component/pagination?pageNum=1&objectsPerPage=4?sortBy=name&isAsc=false"

Get components, filter categories on all category values that contain the string "Lapto" (So it gets all laptops), get 4
objects per page, get first page.

curl "localhost:5000/api/component/pagination?pageNum=0&objectsPerPage=4&filterField=category&filterVal=Lapto"
