const Youtube = require('../models/Youtube.js')
const path = require('path')

module.exports = async (req, res) => {
  let video = req.files.video;
  video.mv(path.resolve(__dirname, "..", "public/videos", video.name),
    async (error) => {
      await Youtube.create({
        ...req.body,
        video: "/videos/" + video.name,
        userid: req.session.userId
      });
      res.redirect("/");
    }
  );
};
