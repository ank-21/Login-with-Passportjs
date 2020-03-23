const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../../config/auth');

router.get('/',(req,res)=>{
    res.render('welcome');
})

router.get('/dashboard',ensureAuthenticated,(req,res)=>{
    res.render('dashboard',{
        user:req.user
    });
})


module.exports = router;

//on logging in and then redirecting to the dashboard we will get user details in the req.user this is provided by the passport