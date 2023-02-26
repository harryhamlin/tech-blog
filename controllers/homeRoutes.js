const router = require('express').Router();
const { Content, Comment, User } = require(`../models`)

// TODO: Add a comment describing the functionality of the withAuth middleware
router.get('/', async (req, res) => {
  try {
    const allContent = await Content.findAll();
    res.render('homepage');
    return res.status(200).json(allContent)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
