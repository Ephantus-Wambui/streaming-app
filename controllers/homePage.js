const Youtube = require('../models/Youtube.js');

module.exports = async (req,res)=>{
    const youtube = await Youtube.find().sort({ datePosted: 'desc' })
    res.render('index', {
        youtube
    })
}
