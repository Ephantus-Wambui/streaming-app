const StreamingApp = require('../models/streamingApp');

module.exports = async (req,res)=>{
    const streamingApp = await StreamingApp.find().sort({ datePosted: -1 })
    res.render('index', {
        streamingApp
    })
}
