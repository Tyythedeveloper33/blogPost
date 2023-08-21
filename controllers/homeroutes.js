const router = require('express').Router();
const {  User,Comments } = require('../models');
const withAuth = require('../utils/auth');


router.get('/',(req,res) =>{
    res.render('index');


    })
router.get('/Login',(req,res) =>{
    res.render('login');


    })

    router.post('/login', async (req, res) => {
        try {
          const userData = await User.create(req.body);
      
          req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
      
            res.status(200).json(userData);
          });
        } catch (err) {
          res.status(400).json(err);
        }
      });
router.get('/Dashboard',(req,res) =>{
    res.render('Dashboard');


    })
    

    module.exports = router;