var mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const config = require('../config');
const connString = config.connString + '/' + config.database;

mongoose.connect(connString, { useNewUrlParser: true });

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    user_id: String,
    tempToken: String,
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

userModel.createUser = async function({ name, lastname, mail, username, password}) {
    const saveUser = new userModel({
        name,
        lastname,
        mail,
        username,
        password,
        validation_status: 'pending',
        tokens: null,        
    });
    const userSaveResult = await saveUser.save();

    const savetoken = new tokenModel({
        user_id:userSaveResult._id,
        tempToken: uuidv4(),        
    });    

    const saveTokenResult = await savetoken.save();

    return {
        userSaveResult,
        saveTokenResult
    };
}

userModel.validateMail = async function({ name, lastname, mail, username, password}) {
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
    await saveme.save();
}

module.exports = {
    tokenModel,
    userModel
};

//login User

//user/register

//user/validateMail

//user/validateToken

