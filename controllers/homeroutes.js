const router = require('express').Router();
const {  User,Comments } = require('../models');
const withAuth = require('../utils/auth');
 const userRoutes =require('./api/userRoutes')

router.get('/Login',(req,res) =>{
    res.render('login');

router.use(userRoutes);
    })

    
router.get('/Dashboard',(req,res) =>{
    res.render('Dashboard');


    })
    

    module.exports = router;