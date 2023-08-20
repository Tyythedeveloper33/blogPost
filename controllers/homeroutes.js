const router = require('express').Router();
const { Comments } = require('../models');
const withAuth = require('../utils/auth');


router.get('/',(req,res) =>{
    res.render('index');


    })
    