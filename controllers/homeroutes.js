const router = require('express').Router();
const {  User,Comments } = require('../models');
const withAuth = require('../utils/auth');
 const userRoutes = require('./api/userRoutes')

 router.get('/',(req,res) =>{
  res.render('index');


  })
//  router.get('/dashboard',(req,res) =>{
//   res.render('Dashboard');


//   })


    

    

    module.exports = router;