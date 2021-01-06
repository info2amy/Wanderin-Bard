const { Router } = require('express')
const controllers = require('../controllers/instruments')
const restrict = require('../helpers/restrict')

const router = Router()

router.get('/', controllers.getInstruments)
router.get('/:id', controllers.getInstrument)
router.post('/',controllers.createInstrument)
router.put('/:id' , controllers.updateInstrument)
router.delete('/:id', controllers.deleteInstrument)

module.exports = router