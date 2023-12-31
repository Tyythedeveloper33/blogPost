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
              attributes: ['id', 'content'],
           },
          ],
        });
    
        // Serialize data so the template can read it
        const blogPost = blogpostData.map((blogPost) => blogPost.get({ plain: true }));
        //  const comments = blogPost.comments.map((comments) => blogPost.get({ plain: true }));
        console.log(blogPost)
        
    res.render('Dashboard', {
          blogPost,
          style: "dashboard.css",
         
    });
  
    }catch (err) {
      console.log(err)
        res.status(500).json(err);
      }

    })




    async function viewPostHandler(req, res) {
    
      try {
        // Log the request URL for debugging
        console.log('Request URL:');
        // Retrieve the 'id' from the query parameter
        const postId = req.params.id; // Assuming you're using query parameters
    console.log('post id:', postId)
        // Fetch the corresponding blog post data from your data source
        const blogPost = await BlogPost.findByPk(postId, {
          include: [
            // Include any related models you need
            {
               model: User,
               attributes: ['name'],
        },
       ],
        });
        
        // Check if the blogPost exists
        if (!blogPost) {
          return res.status(404).send('Blog post not found');
        }
    // console.logging to make sure i recieved data for my front end
   console.log("id:", postId)
    console.log('title:',blogPost.title)
    console.log('content:',blogPost.content)
    console.log('createdat:',blogPost.date_created)
    console.log('by:',blogPost.user.name)
    // console.log('comments:', Comments )
    
        // Render the 'post.handlebars' template with the retrieved data
        res.render('post', {
             title: blogPost.title,
             content: blogPost.content,
             createdat: blogPost.date_created,
             by: blogPost.user.name,
             style: "form.css",
             id: postId , 
             });
            
      } catch (err) {
        console.error(err);
        res.status(500).json(err);
      }
    }
    
    
router.get('/viewpost/:id',viewPostHandler)

module.exports= router;