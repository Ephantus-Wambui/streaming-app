const Youtube = require('../models/Youtube')

module.exports = async (req, res) => {
    var inp = document.getElementById("inp").value;
    const youtube = await Youtube.find({inp}, (error, youtube)=>{
        console.log(error, youtube)
    })
}
