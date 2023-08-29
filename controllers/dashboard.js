const router = require('express').Router();


router.get('/',(req,res) =>{
    res.render('Dashboard', {
          style: "index.css",
          
    });
  

    })









module.exports= router;