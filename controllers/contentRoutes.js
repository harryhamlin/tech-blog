const router = require('express').Router();
const { Content  } = require(`../models`)

router.get('/', async (req, res) => {
    try {
      const allContent = await Content.findAll()
      return res.status(200).json(allContent)
    } catch (err) {
      return res.status(500).json(err);
    }
  });

router.post('/', async (req, res) => {
  try {
    Content.create(req.body)
    res.status(200).json('created');
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
