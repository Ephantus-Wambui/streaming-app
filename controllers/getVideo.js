const Youtube =require('../models/Youtube')

module.exports = async (req, res) => {
    const youtube = await Youtube.findOne({ slug: req.params.slug })
    console.log(youtube)
    res.render('viewVideo',{
        viewVideo: true,
        youtube
    });
}
