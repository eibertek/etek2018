var mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const config = require('../config');
const connString = config.connString + '/' + config.database;

mongoose.connect(connString, { useNewUrlParser: true });

const Schema = mongoose.Schema;
  
const BlogPost = new Schema({
  user_id: String,
  blog_id: String,
  name: String,
  title: String,
  body: String,
  date_created: Date,
  date_updated: Date,  
});

var BlogModel = mongoose.model('blog', BlogPost);

BlogPost.getBlogs = function(filters) {
  return BlogModel.find(filters).exec();
}

BlogPost.doSave = ( data ) => {
  const { name, title, body} = data;
  const saveData = {
    name,
    title,
    body,
    user_id: uuidv4(),
    blog_id: uuidv4(),
    date_created: new Date(),
    date_updated: new Date(),
  }
  console.log('Saving Doc Blog');
  var saveObject = new BlogModel(saveData);
  saveObject.save((err, status) => err ? console.log('eerrrrr22', err) : console.log('ok', status));
}
 
module.exports = BlogPost;  

/*
Blog entity
  blog_id
  name
  title
  body
  date_created
  date_updated

Comments entity
comment_id
blod_id
user_id
likes
dislikes
hate
love
funny
reply_to
*/

