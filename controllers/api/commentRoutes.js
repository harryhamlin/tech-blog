const router = require('express').Router();
const { Comment } = require(`../../models`);
const auth = require(`../../utils/auth`);

router.post('/',
  auth,
  async (req, res) => {
    try {
      Comment.create({
        comment_body: req.body.comment_body,
        content_id: req.body.content_id,
        user_id: req.session.user_id
      });
      res.status(200).json('created');
    } catch (err) {
      return res.status(500).json(err);
    }
  });

  router.get('/', async (req, res) => {
    try {
      const allComments = await Comment.findAll()
      res.status(200).json(allComments)
    } catch (err) {
      return res.status(500).json(err)
    }
  })



module.exports = router;