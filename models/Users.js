const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slugify = require('slugify');

const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
      },
    fullname: {
        type: String,
        required: true,
        unique: true
      },
    gender: {
      type: String,
      required: true
    },
    pwd: {
        type: String,
        required: true,
        unique: true
      },
      slug: {
        type: String,
        required: true,
        unique: true
      },
    dateJoined: {
        type: Date,
        default: new Date()
    }
});

UserSchema.pre('save', function(next) {
    const user = this

    bcrypt.hash(user.pwd, 10, (error, hash) => {
        user.pwd = hash
        next()
    })
})

UserSchema.pre('validate', function (next) {
  if (this.fullname) {
    this.slug = slugify(this.fullname, { lower: true, strict: true })
  }
  
  next()
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
