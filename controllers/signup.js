const router= require('express').Router();

router.get('/',(req,res) =>{
    res.render('signup', {
        style:"form.css"
    });
        
    
    })
    

    module.exports =router;