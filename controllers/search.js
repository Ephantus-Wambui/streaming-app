const StreamingApp = require('../models/streamingApp')

module.exports = async (req, res) => {
    var inp = document.getElementById("inp").value;
    const StreamingApp = await StreamingApp.find({inp}, (error, streamingApp)=>{
        console.log(error, streamingApp)
    })
}
