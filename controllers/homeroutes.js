const router = require('express').Router();
const {  User,Comments } = require('../models');
const withAuth = require('../utils/auth');
 const userRoutes = require('./api/userRoutes')

 router.get('/',(req,res) =>{
  res.render('index', {
    name: req.session.name,
    title: "What is blogStarzz ??", 
    author:"tyythedeveloper33",
    content: "this is a application for which users can create and connect with other Blogstarzz by posting Blogs, or commenting on other blogs if you have a opinon to share, keeping us connected by being able to reach news within a couple scrolls",
    style: "index.css"
  });


  })


    

    

    module.exports = router;