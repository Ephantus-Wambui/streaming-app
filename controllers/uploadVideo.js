module.exports = (req, res) => {
    if(req.session.userId){
        return res.render('uploadVideo',{uploadVideo: true})
    }
    res.redirect('/auth/login')
}
