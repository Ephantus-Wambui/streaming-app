const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    email: String,
    pwd: String
});

UserSchema.pre('save', function(next) {
    const user = this

    bcrypt.hash(user.pwd, 10, (error, hash) => {
        user.pwd = hash
        next()
    })
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
