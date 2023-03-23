const router = require('express').Router();
const { Comment } = require(`../../models`);
const auth = require(`../../utils/auth`);

router.post('/', auth, async (req, res) => {
    try {
      Comment.create(req.body);
      res.status(200).json('created');
    } catch (err) {
      return res.status(500).json(err);
    }
  });



module.exports = router;