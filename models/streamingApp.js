const mongoose = require('mongoose')
const slugify = require('slugify')
const Schema = mongoose.Schema;

const StreamingAppSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  datePosted: {
    type: Date,
    default: new Date(),
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  video: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  }
});

StreamingAppSchema.pre('validate', function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true })
  }
  
  next()
})

const StreamingApp = mongoose.model('StreamingApp', StreamingAppSchema)

module.exports = StreamingApp
