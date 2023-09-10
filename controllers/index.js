const router = require('express').Router();
 const dashRoutes = require('./dashboard')
const apiRoutes = require('../controllers/api');
const homeRoutes = require('./homeroutes');
const loginRoutes = require('./login')
const signupRoutes = require('./signup')
const postRoutes = require('./viewpost')


router.use('/', signupRoutes);
router.use('/homeRoutes', homeRoutes);
router.use('/api', apiRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
 router.use('/dashboard', dashRoutes);
 router.use('/post', postRoutes);



module.exports = router;