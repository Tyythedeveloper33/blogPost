const Comments = require('./comments');
const BlogPost = require('./blogPost');
const User = require('./users');



Comments.hasOne(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comments, {
  foreignKey: 'user_id'
});
BlogPost.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(BlogPost, {
  foreignKey: 'user_id'
});


Comments.belongsTo(BlogPost,{
foreignKey:'blogpost_id'
});


module.exports = { User, BlogPost, Comments };
