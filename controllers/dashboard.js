const { BlogPost, User} = require('../models');

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
          ],
        });
    
        // Serialize data so the template can read it
        const blogPost = blogpostData.map((blogPost) => blogPost.get({ plain: true }));
    res.render('Dashboard', {
          blogPost,
          style: "dashboard.css",
          title: blogPost.title,
          content: blogPost.content,
          date: blogPost.date_created,
    });
  console.log(blogPost)
    }catch (err) {
        res.status(500).json(err);
      }

    })









module.exports= router;