const { Router } = require('express')
const controllers = require('../controllers/products')
const restrict = require('../helpers/restrict')

const router = Router()

router.get('/', controllers.getProducts)
router.get('/:id', controllers.getProduct)
router.post('/', restrict, controllers.createProduct)
// define the post express route for a product and make it restricted
// define the put express route for a product and make it restricted
// define the delete express route for a product and make it restricted

module.exports = router