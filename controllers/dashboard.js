const { BlogPost, User, Comments} = require('../models');

const router = require('express').Router();


router.get('/', async (req,res) =>{
    try {
        // Get all projects and JOIN with user data
       
        const blogpostData = await BlogPost.findAll({
        
          include: [
            {
              model: User,
              attributes: ['name'],
            },
            {
              model: Comments,
              attributes: ['content'],
            },
          ],
        });
    
        // Serialize data so the template can read it
        const blogPost = blogpostData.map((blogPost) => blogPost.get({ plain: true }));
        // const comments = blogPost.comments.map((comment) => blogPost.get({ plain: true }));
        console.log(blogPost)
        // console.log(comments)
    res.render('Dashboard', {
          blogPost,
          // comments,
          style: "dashboard.css",
         
    });
  
    }catch (err) {
      console.log(err)
        res.status(500).json(err);
      }

    })









module.exports= router;