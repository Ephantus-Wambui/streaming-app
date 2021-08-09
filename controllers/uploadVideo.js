module.exports = (req, res) => {
    if(req.session.userId) {
            res.render('uploadVideo',{
            uploadVideo: true,
        })
    }
    res.redirect('/login')
}
