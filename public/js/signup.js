const router = require('express').Router();
const bcrypt= require('bcrypt')
router.use(express.urlencoded({extended: false}))

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

module.exports= router;