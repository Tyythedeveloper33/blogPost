const router= require('express').Router();
const bcrypt= require('bcrypt');
const { hasHook } = require('../../models/comments');
// express.use(router.urlencoded({extended: false}))
 const { User } = require('../../models')
 

// All of these routes are prefixed with '/api/signup'

// router.get('/',(req,res) =>{
//     res.render('signup');
        
    
//     })
    



function logOutHandler(req, res) {
     if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
        res.redirect('../../homeRoutes');
      });
    } else {
      res.status(404).end();
    }
  };
    

async function signupHandler(req, res) {
    console.log("data received: ", req.body);
    try {
 

        const tempUser = await User.create({
            name: req.body.name,
            password: req.body.password

            
        });

        console.log('temp user:', tempUser);

        res.redirect('../../login');
    } catch (err) {
        console.error("Error:", err);
        res.redirect('../../signup');
    }
}

async function loginFormHandler(req, res) {
    console.log("data received: ", req.body);
    try {
        const user = await User.findOne({ where: { name: req.body.name } });
        
        if (!user) {
            return res.status(400).json({ message: 'Incorrect email or password, please try again' });
        }
        
        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if (!validPassword) {
            return res.status(400).json({ message: 'Incorrect email or password, please try again' });
        }
        if(user && validPassword){
            console.log('successful mate')
          
        }

        req.session.save(() => {
            req.session.user_id = user.id;
            req.session.logged_in = true;

             res.redirect('../../homeRoutes');
             console.log({user: user, message: 'You are now logged in'})
        });
    } catch (err) {
        console.error("Error:", err);
        res.status(400).json(err);
            
        
    }
}

router.post('/signup', signupHandler);
router.post('/login', loginFormHandler);
 router.post('/logout', logOutHandler);




module.exports = router;