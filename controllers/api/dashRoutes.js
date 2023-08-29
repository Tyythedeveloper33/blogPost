
const router= require('express').Router();
const {  User , BlogPost} = require('../../models')
 const sess =require('../../server')

 async function postformhandler(req, res) {
  console.log("data received: ", req.body);
  try {
 

    const blogPost = await BlogPost.create({
        title: req.body.title,
        content: req.body.content

        
    });

    console.log('blogpost:', blogPost);
  }catch (err) {
    console.error("Error:", err);
}
 }
//  id: {
//   type: DataTypes.INTEGER,
//   allowNull: false,
//   primaryKey: true,
//   autoIncrement: true,
// },
// title: {
//   type: DataTypes.STRING,
//   allowNull: false,
// },
// content: {
//   type: DataTypes.TEXT,
//   allowNull: false,
// },
// date_created: {
//   type: DataTypes.DATE,
//   allowNull: false,
//   defaultValue: DataTypes.NOW,


router.post('/makeBlog', postformhandler);
  module.exports = router;
