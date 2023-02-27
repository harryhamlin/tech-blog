const router = require('express').Router();
const { Comment } = require(`../models`)

router.post('/', async (req, res) => {
    try {
      Comment.create(req.body);
      res.status(200).json('created');
    } catch (err) {
      return res.status(500).json(err);
    }
  });

module.exports = router;