const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const YoutubeSchema = new Schema({
  title: String,
  datePosted: {
    type: Date,
    default: new Date(),
  },
  video: String,
});

const Youtube = mongoose.model('Youtube',YoutubeSchema)
module.exports = Youtube
