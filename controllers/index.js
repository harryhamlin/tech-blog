const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const contentRoutes = require('./api/contentRoutes');
const commentRoutes = require('./api/commentRoutes')
const userRoutes = require('./api/userRoutes');

router.use('/', homeRoutes);
router.use('/api/content', contentRoutes);
router.use('/api/user', userRoutes);
router.use('/api/comment', commentRoutes)

module.exports = router;
