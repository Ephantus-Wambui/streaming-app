const mongoose = require("mongoose")

const Schema = mongoose.Schema

const CommentsSchema = new Schema ({
    comment: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    dateCommented: {
        type: Date,
        default: new Date()
    }
})

const Comments = mongoose.model('Comments', CommentsSchema)

module.exports = Comments
