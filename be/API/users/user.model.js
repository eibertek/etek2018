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
    user_id: [{ type: Schema.Types.ObjectId, ref:'user' }],
    tempToken: String,
    token: String,
    expiresOn: Date,
});

const userModel = mongoose.model('user', userSchema);
const tokenModel = mongoose.model('token', tokenSchema);

tokenModel.validateToken = function(userId, token) {
    return tokenModel.find({ userId, token, expiresOn: { $gte: new Date() } }).exec();
}

userModel.login = async function(username, password) {
    const user = await userModel.findOne({ username, password }).populate('tokens users').exec();
    if(user) {
        if(!user.tokens || user.tokens.length === 0 ) {
            const savetoken = new tokenModel({
                user_id:user._id,
                token: uuidv4(),        
            });        
            const saveTokenResult = await savetoken.save();
            const userPopulated = await userModel.findOneAndUpdate({ username, password }, {tokens: saveTokenResult._id}).populate('tokens users').exec();
            return userPopulated;        
        }
        return user;
    }else{
        return {
            error:'wrong username or password',
        }
    }
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

userModel.validateMail = async function(tokenId) {
    const tokenData = await tokenModel.findOne({tempToken: tokenId}).exec();
    if(!tokenData) return {
        error:'Token doesnt exist',        
    }; 
    const userData = await userModel.findOneAndUpdate({_id: tokenData.user_id },{ validation_status:"ready"}).exec();
    const removeToken = await tokenModel.findOneAndRemove({tempToken: tokenId}).exec();
    return userData;
}

module.exports = {
    tokenModel,
    userModel
};

//login User

//user/register

//user/validateMail

//user/validateToken

