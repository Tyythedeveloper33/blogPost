const router = require('express').Router();
 const dashRoutes = require('./api/dashboard')
const apiRoutes = require('../controllers/api');
const homeRoutes = require('./homeroutes');
const loginRoutes = require('./login')
const signupRoutes = require('./signup')



router.use('/', signupRoutes);
router.use('/homeRoutes', homeRoutes);
router.use('/api', apiRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
 router.use('/dashboard', dashRoutes);



module.exports = router;