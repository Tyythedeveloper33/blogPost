const router = require('express').Router();
const { Comments } = require('../models');
const withAuth = require('../utils/auth');


router.get('/',(res,req) =>{
    res.render('index');


    })
    