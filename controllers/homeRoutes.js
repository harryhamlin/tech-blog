const router = require('express').Router();

// TODO: Add a comment describing the functionality of the withAuth middleware
router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
