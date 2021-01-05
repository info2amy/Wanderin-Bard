const { Router } = require('express')
const controllers = require('../controllers/instruments')
const restrict = require('../helpers/restrict')

const router = Router()

router.get('/', controllers.getInstruments)
router.get('/:id', controllers.getInstrument)
router.post('/', restrict, controllers.createInstrument)
router.put('/:id', restrict, controllers.updateInstrument)
router.delete('/:id', restrict, controllers.deleteInstrument)

module.exports = router