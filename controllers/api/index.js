
const router= require('express').Router();

const userRoutes = require('./userRoutes')
const dashRoutes = require('./dashboard')



router.use('/login', userRoutes);
router.use('/dashboard', dashRoutes);

module.exports= router;