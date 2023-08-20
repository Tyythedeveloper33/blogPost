const router = require('express').Router();
const { Comments } = require('../models');
const withAuth = require('../utils/auth');


router.get('/',(req,res) =>{
    res.render('index');


    })
router.get('/Login',(req,res) =>{
    res.render('login');


    })
    

    module.exports = router;