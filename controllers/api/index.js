
const router= require('express').Router();
const allUserRoutes =require('./allUserRoutes')





// all of these routes are prefixed with '/api'

router.use('/allUserRoutes', allUserRoutes);


module.exports= router;