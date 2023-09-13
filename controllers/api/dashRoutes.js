const router= require('express').Router();
const { Comments, User , BlogPost} = require('../../models')
 const sess =require('../../server')


 async function postformhandler(req, res) {
  console.log("data received: ", req.body);
  try {
console.log(req.session.user_id)
    const blogPost = await BlogPost.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
       
    });
   
    console.log('blogpost:', blogPost);
    res.redirect('../../dashboard');
  }catch (err) {
    console.error("Error:", err);
}
 }


 async function commenthandler(req, res) {
  console.log("data received: ", req.body);
  console.log("params data: ", req.params);
  try {
    console.log("Session data:", req.session.user_id)
    // Create Comment Instance First
    const comment = await Comments.create({
      // ...req.body,
      content: req.body.content,
      user_id: req.session.user_id,
      blogpost_id: req.params.id,
      // content: req.session.comment,
     
    });
    console.log("Comment: ", comment);
    // Update the Current BlogPost with the NEW Comment.id data
    const blogPost = await BlogPost.update(req.body.id , {
      where: {
        id: req.params.id
      }
    })
    console.log("Blog Post: ", blogPost);
   
     res.json(comment)

    }catch(err){
      console.log(err)
      res.status(500).json(err)
  }
 }

 async function viewPostHandler(req, res) {
  console.log("data received: ", req.body);
  try {
    console.log("user_id:",req.session.user_id);
    const blogPostData = await BlogPost.findByPk(req.body.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comments,
          attributes: ['id', 'content'],
        },
        // Add any other models you want to include
      ],
    });

    // Serialize data so the template can read it
    const blogPost = blogPostData.get({ plain: true });
    
    console.log("BlogPost: ", blogPost);
    
    res.redirect(`/dashboard/viewpost/${blogPost.id}`);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}


router.post('/viewpost/:id/comment', commenthandler);
router.post('/makeBlog', postformhandler);
router.post('/viewpost/:id', viewPostHandler);

  module.exports = router;
  

