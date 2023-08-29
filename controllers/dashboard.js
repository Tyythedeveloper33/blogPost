const router = require('express').Router();


router.get('/',(req,res) =>{
    res.render('Dashboard', {
          style: "dashboard.css",

    });
  

    })









module.exports= router;