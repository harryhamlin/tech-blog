const router = require('express').Router();
const { Content, Comment, User } = require(`../models`)

// TODO: Add a comment describing the functionality of the withAuth middleware
router.get('/', async (req, res) => {
  try {
    const allContent = await Content.findAll()
    const contents = allContent.map((content) => content.get({ plain:true }))
    res.render('homepage', {
      contents
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
