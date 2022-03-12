const mongoose = require('mongoose')
const slugify = require('slugify')
const Schema = mongoose.Schema;

const YoutubeSchema = new Schema({
  title: String,
  datePosted: {
    type: Date,
    default: new Date(),
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  video: String,
  slug: {
    type: String,
    required: true,
    unique: true
  }
});

YoutubeSchema.pre('validate', function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true })
  }
  
  next()
})

const Youtube = mongoose.model('Youtube',YoutubeSchema)

module.exports = Youtube
