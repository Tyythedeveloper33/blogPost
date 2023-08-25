
const router= require('express').Router();

const userRoutes = require('./userRoutes')
const dashRoutes = require('./dashboard')
const signupRoutes =require('./signupRoutes')

// all of these routes are prefixed with '/api'
router.use('/login', userRoutes);
router.use('/signup', signupRoutes);
router.use('/dashboard', dashRoutes);

module.exports= router;