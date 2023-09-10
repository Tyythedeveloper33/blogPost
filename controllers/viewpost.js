const router= require('express').Router();

router.get('/',(req,res) =>{
    console.log(req.body.id)
    res.render('post', {
        style: "form.css"

    });
        
    
    })
    

    module.exports =router;