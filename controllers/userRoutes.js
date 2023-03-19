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
        const userData = await User.findOne({ where: { email: req.body.email } });
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
          console.log('login')
          req.session.user_id = userData.id;
          req.session.logged_in = true;
          
          res.json({ user: userData, message: 'You are now logged in!' });
        });
    
      } catch (err) {
        console.log('error')
        res.status(400).json(err);
      }
})

router.post('/create', async (req, res) => {
  console.log('click')
    try {
      User.create(req.body)
      .then((user) => {
        res.status(200).json(user)
      })
    } catch (err) {
      res.status(400).json(err)
    }
})

module.exports = router;