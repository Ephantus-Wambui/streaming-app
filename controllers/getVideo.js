const StreamingApp = require('../models/StreamingApp')

module.exports = async (req, res) => {
    const streamingapp = await StreamingApp.findOne({ slug: req.params.slug }).populate('userid')
    const streamingApp = await StreamingApp.find().sort({ datePosted: -1 })
    res.render('viewVideo',{
        viewVideo: true,
        streamingapp,
        streamingApp
    });
}
