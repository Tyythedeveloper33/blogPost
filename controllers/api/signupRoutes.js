const router= require('express').Router();
const bcrypt= require('bcrypt');
// express.use(router.urlencoded({extended: false}))

router.get('/',(req,res) =>{
    res.render('signup');
        
    
    })

router.post('/',async (req, res) => {
    try{
const hashedPassword =  await bcrypt.hash(req.body.password, 10)
 Users.push({
    id: Date.now().toString(),
    name: req.body.name,
    password: hashedPassword
 })
 res.redirect('/login')
    } catch{
res.redirect('/signup')
    }
console.log(Users)
}
)







module.exports = router;