
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
  try {
    console.log(req.session.user_id)
    const blogPost = await BlogPost.findByPk()


     const comment = await Comments.create({
          ...req.body,
           user_id: req.session.user_id,
     });
     res.json(comment)
    }catch(err){
      console.log(err)
      res.status(500).json(err)
    //   content: req.body.content,
    //  
      
  // });
  // console.log(blogPost)
  // console.log(comment)
  
  //   console.error("Error:", err);
  }
 }


router.post('/comment', commenthandler);
router.post('/makeBlog', postformhandler);
  module.exports = router;
