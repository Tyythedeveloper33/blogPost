const router= require('express').Router();
const bcrypt= require('bcrypt');
const { hasHook } = require('../../models/comments');
// express.use(router.urlencoded({extended: false}))
 const {User} = require('../../models')

// All of these routes are prefixed with '/api/signup'

router.get('/',(req,res) =>{
    res.render('signup');
        
    
    })
    // by fixing some the endpoints
// made is so that we get a object from our post request  and redirects us to login
// using the model to grab object so the database can use it
// --> '/api/signup/'  POST method
router.post('/',async (req, res) => {
    console.log("data recieved: ", req.body);
    try{
       const hashedPassword =  await bcrypt.hash(req.body.password, 10);
        console.log("Hash: ", hashedPassword)
    
       const tempUser = await User.create({
            
            name: req.body.name,
            password: hashedPassword,
           
        })
        
      
        //const newUser = await User.create(req.body);
        //  const newUser = await User.create(tempUser);
          console.log('temp user ;', tempUser)

        res.redirect('/api/login');
    } catch{
        res.redirect('/api/signup');
    }
}
)







module.exports = router;