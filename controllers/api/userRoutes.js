
const router= require('express').Router();
const { User} = require('../../models')
 const sess =require('../../server')


// router.get('/',(req,res) =>{
// res.render('login');
    

// })


router.post('/', async (req, res) => {
    try {
     const logUser = req.body.name ;
    // await User.findAll(req.body.name)
    if(logUser){
      console.log(logUser)
    }
    console.log(logUser)
      // const userData = await User.findAll(req.body);
       
      
      // res.status(200).json(userData)


   
   
  }catch (err){
    res.status(400).json(err);
  }
 });
      // if (User === req.body)
      // console.log(userData)
  
      // req.session.create(() => {
      //   req.session.user_id = userData.id;
      //   req.session.logged_in = true;
  
  //       res.status(200).json(userData);
  //     });
  //   } catch (err) {
  //     res.status(400).json(err);
  //   }
  // });


  module.exports = router;
