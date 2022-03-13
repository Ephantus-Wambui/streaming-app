const Youtube =require('../models/Youtube')

module.exports = async (req, res) => {
    const yoUtube = await Youtube.findOne({ slug: req.params.slug }).populate('userid')
    const youtube = await Youtube.find()
    console.log(youtube)
    res.render('viewVideo',{
        viewVideo: true,
        yoUtube,
        youtube
    });
}
