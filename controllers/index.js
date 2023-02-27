const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const contentRoutes = require('./contentRoutes');
const commentRoutes = require('./commentRoutes')
const userRoutes = require('./userRoutes');

router.use('/', homeRoutes);
router.use('/api/content', contentRoutes);
router.use('/api/user', userRoutes);
router.use('/api/comment', commentRoutes)


module.exports = router;
