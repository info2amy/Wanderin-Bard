const { Router } = require('express')
const instrumentsRouter = require('./instruments');
const usersRouter = require('./users');

const router = Router();

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', usersRouter);
router.use('/instruments', instrumentsRouter);

module.exports = router