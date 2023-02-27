const router = require('express').Router();
const { User } = require(`../models`)

router.get('/', async (req, res) => {
    try {
      const allUsers = await User.findAll()
      return res.status(200).json(allUsers)
    } catch (err) {
      return res.status(500).json(err);
    }
  });

router.post('/login', async (req, res) => {
    try {
        console.log(req.body.name)
        console.log(req.body.password)
        const userData = await User.findOne({ where: { name: req.body.name } });
        console.log(userData)
        if (!userData) {
          res
            .status(400)
            .json({ message: 'Incorrect username or password, please try again' });
          return;
        }
    
        const validPassword = await userData.checkPassword(req.body.password);
        console.log(validPassword)
    
        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
    
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
          
          res.json({ user: userData, message: 'You are now logged in!' });
        });
    
      } catch (err) {
        res.status(400).json(err);
      }
})

module.exports = router;