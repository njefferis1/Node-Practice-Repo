const { request, response } = require('express')
// imports
const express = require('express')
const products = require('./products.js')

// app
const app = express()
const port = 3000

// telling my app to be able to read json
app.use(express.json())

// GET
// path, (optionally middleware), callback function
app.get('/', (request, response) => {
  response.send(console.log('made it bb! ;)'))
})

app.get('/products/:id', (request, response) => {
  response.json(
    products.find((product) => {
      return Number(request.params.id) === product.id
    })
  )
})

// POST
//  path, (optionally middleware), callback function
app.post('/add', (request, response) => {
  console.log(request.body)
  response.sendStatus(200)
})

// listener
app.listen(port, () => console.log(`listening on port ${port}`))

/*
    NOTES
    - require is going to look for a module.exports item
    - you declare content type in the http.rest file for posts. 
    Here, we must tell our app to undserstand that using the 
    app.use (express.json())
    - all http verb routers have a path, middleware, callback 
    and the callback always has request and response
    - you need the listener because it'll listen for requests 
    on the given port (the callback function is basically 
    just run once when you run it to make sure its working)
*/
