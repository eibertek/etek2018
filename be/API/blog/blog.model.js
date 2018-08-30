var mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const config = require('../config');
const connString = config.connString + '/' + config.database;

mongoose.connect(connString, { useNewUrlParser: true });

const Schema = mongoose.Schema;
  
const BlogSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref:'user' },
  name: String,
  title: String,
  body: String,
  date_created: Date,
  date_updated: Date,  
});

const CommentSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref:'user' },
  blog_id: { type: Schema.Types.ObjectId, ref:'blog' },
  likes: Number,
  dislikes: Number,
  hate: Number,
  love: Number,
  funny: Number,
  reply_to: { type: Schema.Types.ObjectId, ref:'comment' },
  date_created: Date,
  date_updated: Date,  
});


var BlogModel = mongoose.model('blog', BlogSchema);
var CommentModel = mongoose.model('comment', CommentSchema);

BlogModel.getBlogs = function(filters) {
  return this.find(filters).exec();
}

BlogModel.doSave = ( data ) => {
  const { name, title, body, user_id } = data;
  const saveData = {
    name,
    title,
    body,
    user_id,
    date_created: new Date(),
    date_updated: new Date(),
  }
  console.log('Saving Doc Blog');
  var saveObject = new BlogModel(saveData);
  saveObject.save((err, status) => err ? console.log('eerrrrr22', err) : console.log('ok', status));
}

CommentModel.getComments = ( filters ) => {
  return this.find(filters).exec();
};

CommentModel.saveComment = ( data ) => {
  const { user_id,
    blog_id,
    likes,
    dislikes,
    hate,
    love,
    funny,
    reply_id } = data;
  const saveData = {
    user_id,
    blog_id,
    likes,
    dislikes,
    hate,
    love,
    funny,
    reply_to: reply_id,
    date_created: new Date(),
  }
  var saveObject = new CommentModel(saveData);
  saveObject.save((err, status) => err ? console.log('it was an error on save comment', err) : console.log('ok', status));
};

module.exports = BlogModel;  
