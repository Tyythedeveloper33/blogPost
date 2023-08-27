const router= require('express').Router();
const bcrypt= require('bcrypt');
const { hasHook } = require('../../models/comments');
// express.use(router.urlencoded({extended: false}))
 const { User } = require('../../models')
 

// All of these routes are prefixed with '/api/signup'

router.get('/',(req,res) =>{
    res.render('signup');
        
    
    })
    // by fixing some the endpoints
// made is so that we get a object from our post request  and redirects us to login
// using the model to grab object so the database can use it
// --> '/api/signup/'  POST method
// router.post('/',async (req, res) => {
//     console.log("data recieved: ", req.body);
//     try{
//        const hashedPassword =  await bcrypt.hash(req.body.password, 10);
//         console.log("Hash: ", hashedPassword)
    
//        const tempUser = await User.create({
            
//             name: req.body.name,
//             password: hashedPassword,
           
//         })
        
//           console.log('temp user ;', tempUser)

//         res.redirect('/api/login');
//     } catch{
//         res.redirect('/api/signup');
//     }
// }
// )


async function signupHandler(req, res) {
    console.log("data received: ", req.body);
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        console.log("Hash: ", hashedPassword);

        const tempUser = await User.create({
            name: req.body.name,
            password: hashedPassword,
           
            //says user_id value is undefined in integerated terminal

        //     user_id:('?'),
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
        
        if (user && await bcrypt.compare(req.body.password, User.password)) {
            res.redirect('../../index');
        } else {
            res.redirect('../../signup');
        }
    } catch (err) {
        console.error("Error:", err);
        res.redirect('../../signup');
    }
}

router.post('/signup', signupHandler);
router.post('/login', loginFormHandler);




module.exports = router;