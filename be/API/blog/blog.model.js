var mongoose = require('mongoose');
var connString = 'mongodb://etek001:Agosto2018@etek01-shard-00-00-ryd3a.mongodb.net:27017,etek01-shard-00-01-ryd3a.mongodb.net:27017,etek01-shard-00-02-ryd3a.mongodb.net:27017/test?ssl=true&replicaSet=etek01-shard-0&authSource=admin&retryWrites=true'
var conn = mongoose.connect(encodeURI(connString, { useNewUrlParser: true }));

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

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});
console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
var BlogModel = mongoose.model('blog', BlogPost);
var results = BlogModel.findOne(function(err, docs) {
  console.log('ready');
  return console.log('aaaaa', err, docs);
});
/* 
var small = new BlogModel({ title: 'small' });
small.save(err => console.log('eerrrrr', err));
*/
module.exports = BlogPost;