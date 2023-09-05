const Comments = require('./comments');
const BlogPost = require('./blogPost');
const User = require('./users');



Comments.belongsTo(User, {
  foreignKey: 'user_id',
  
});

User.hasMany(Comments, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
BlogPost.belongsTo(User, {
  foreignKey: 'user_id',
 
});

User.hasMany(BlogPost, {
  foreignKey: 'user_id',
   onDelete: 'CASCADE'
});


Comments.belongsTo(BlogPost,{
foreignKey:'blogpost_id'
});
 
BlogPost.hasMany(Comments,{
  foreignKey: 'blogpost_id'
})

module.exports = { User, BlogPost, Comments };
