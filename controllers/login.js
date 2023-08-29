const router= require('express').Router();

router.get('/',(req,res) =>{
    res.render('login', {
        style: "form.css"
    });
        
    
    })
    

    module.exports =router;