const jwt = require('jsonwebtoken')
const TOKEN_KEY = 'areallylonggoodkey'

// Create a restrict express middleware function
 const restrict = (req, res, next) => {

        // Pull out the JWT from the http request header

        // Use the jsonwebtoken library's verify method to see if the JWT that the client passed in was created with our secret token key
        // if so, verify will return the JWT's contents which we store in a data variable, otherwise it will error out
        // res.locals.user = data

        // Since this is an express middleware function and we have access to express's next method, call it
        try {
          const token = req.headers.authorization.split(' ')[1]
          const data = jwt.verify(token, TOKEN_KEY)
          // res.locals.user = data
          next()
      } catch (error) {
          console.log(error)
          res.status(403).send('Unauthorized')
      }
}

module.exports = restrict