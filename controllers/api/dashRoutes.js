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
    const blogPost = await BlogPost.findByPk(req.body.id)
    console.log("Blog Post: ", blogPost);
   
    const comment = await Comments.create({
      // ...req.body,
      content: req.body.content,
      user_id: req.session.user_id,
      blogpost_id: blogPost.id,
      // content: req.session.comment,
     
    });
    console.log("Comment: ", comment);
     res.json(comment)
//     //  res.render('Dashboard', {
//     comment: req.body.content  
     
// });
    }catch(err){
      console.log(err)
      res.status(500).json(err)
  }
 }

 async function viewPosthandler(req, res){
  console.log("data received: ", req.body);
 }


router.post('/comment', commenthandler);
router.post('/makeBlog', postformhandler);
router.post('/post/:id', viewPosthandler);
  module.exports = router;
