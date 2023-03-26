const router = require('express').Router();
const { Content, Comment, User } = require(`../models`)
const auth = require('../utils/auth')

router.get('/', async (req, res) => {
  try {
    const allContent = await Content.findAll()
    const contents = allContent.map((content) => content.get({ plain: true }))
    res.render('homepage', {
      logged_in: req.session.logged_in,
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

router.get('/content/:id', async (req, res) => {
  try {
    const content = await Content.findByPk(req.params.id);
    if (!content) { return res.status(404).json('no content found') };
    const contents = content.get({ plain: true });
    const userDataRaw = await User.findByPk(contents.id);
    const userData = userDataRaw.get({ plain: true });
    const comment = await Comment.findAll({
      where: { content_id: req.params.id }
    })
    let comments = comment.map((comment) => comment.get({ plain: true }));
    const commentUserDataRaw = comments.map((comment) => comment.user_id);
    const commentUserNames = await Promise.all(commentUserDataRaw.map(async (comment) => await User.findByPk(comment)));
    let commentArray = [];
   for (let i = 0; i < comments.length; i++) {
      let currentComment = comments[i]
      const currentUser = commentUserNames[i].name
      currentComment.user_name = currentUser
      commentArray.push(currentComment)
    }
    comments = commentArray
    // res.json(commentArray)
    res.render('content', {
      logged_in: req.session.logged_in,
      contents, comments, userData
    });
  } catch (err) {
    return res.status(500).json(err)
  }
})

router.get('/dashboard', auth, async (req, res) => {
  try {
    // pull user id from the cookie here
    const content = await Content.findAll({
      where: { user_id: 1 }
    })
    if (!content) { return res.status(404).json('no content found') }
    const contents = content.map((content) => content.get({ plain: true }))
    res.render('dashboard', {
      logged_in: req.session.logged_in,
      contents
    });
  } catch (err) {
    return res.status(500).json(err)
  }
})

module.exports = router;
