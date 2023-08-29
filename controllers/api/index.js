
const router= require('express').Router();
const allUserRoutes =require('./allUserRoutes')
const dashRoutes =require('./dashRoutes')




// all of these routes are prefixed with '/api'

router.use('/allUserRoutes', allUserRoutes);
router.use('/dashboard', dashRoutes)

module.exports= router;