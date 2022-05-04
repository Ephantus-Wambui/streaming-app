const StreamingApp = require('../models/streamingApp')
const path = require('path')

module.exports = async (req, res) => {
  let video = req.files.video;
  video.mv(path.resolve(__dirname, "..", "public/videos", video.name),
    async (error) => {
      await StreamingApp.create({
        ...req.body,
        video: "/videos/" + video.name,
        userid: req.session.userId
      });
      res.redirect("/");
    }
  );
};
