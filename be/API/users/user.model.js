var mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const config = require('../config');
const connString = config.connString + '/' + config.database;

mongoose.connect(connString, { useNewUrlParser: true });

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId:String,
    name: String,
    lastName: String,
    mail: String,
    username: String,
    password: String,
    validation_status: { type: String, 
                          enum:['pending','ready','banned'],
                        },
    tokens: [{ type: Schema.Types.ObjectId, ref:'token' }],                        
});

const tokenSchema = new Schema({
    userId: String,
    token: String,
    expiresOn: Date,
});

const userModel = mongoose.model('user', userSchema);
const tokenModel = mongoose.model('token', tokenSchema);

tokenModel.validateToken = function(userId, token) {
    return tokenModel.find({ userId, token, expiresOn: { $gte: new Date() } }).exec();
}

userModel.login = function(userName, password) {
    return userModel.find({ userName, password }).populate('tokens users').exec();
}

userModel.createUser = function({ name, lastname, mail, username, password}) {
    const saveme = new userModel({
        userId:uuidv4(),
        name,
        lastname,
        mail,
        username,
        password,
        validation_status: 'pending',
        tokens: null,        
    });
    return saveme.save();
}

module.exports = {
    tokenModel,
    userModel
};

//login User

//user/register

//user/validateMail

//user/validateToken

