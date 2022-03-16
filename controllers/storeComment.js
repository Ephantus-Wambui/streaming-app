const Comments = require('../models/comments')
const path = require('path')

module.exports = (req, res) => {
    Comments.create(req.body, (error, user) => {
        userid: req.session.userId,
        res.redirect('/')
    })
}
