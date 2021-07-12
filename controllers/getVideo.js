const Youtube =require('../models/Youtube')

module.exports = async(req, res) => {
    const youtube = await Youtube.findById(req.params.id);
    console.log(youtube)
    res.render('viewVideo',{
        youtube
    });
}
