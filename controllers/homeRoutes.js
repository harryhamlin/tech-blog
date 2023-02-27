const router = require('express').Router();
const { Content, Comment, User } = require(`../models`)
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
  try {
    const allContent = await Content.findAll()
    const contents = allContent.map((content) => content.get({ plain: true }))
    res.render('homepage', {
      contents
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    res.render('login')
  } catch (err) {
    res.status(500).json(err)
  }
})

// router.get('/dashboard', async (req, res) => {
//   try {
//     res.render('dashboard')
//   } catch (err) {
//     res.status(500).json(err)
//   }
// })

router.get('/content/:id', async (req, res) => {
  try {
    const content = await Content.findByPk(req.params.id)
    if (!content) { return res.status(404).json('no content found') }
    const contents = content.get({ plain: true })
    const comment = await Comment.findAll({
      where: { content_id: req.params.id }
    })
    const comments = comment.map((comment) => comment.get({ plain: true }))
    res.render('content', {
      contents, comments
    });
  } catch (err) {
    return res.status(500).json(err)
  }
})

router.get('/dashboard', async (req, res) => {
  try {
    // pull user id from the cookie here
    const content = await Content.findAll({
      where: { user_id: 1 }
    })
    if (!content) { return res.status(404).json('no content found') }
    const contents = content.map((content) => content.get({ plain: true }))
    res.render('dashboard', {
      contents
    });
  } catch (err) {
    return res.status(500).json(err)
  }
})

module.exports = router;
