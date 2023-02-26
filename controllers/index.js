const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const contentRoutes = require('./contentRoutes')

router.use('/', homeRoutes);
router.use('/content', contentRoutes)


module.exports = router;
