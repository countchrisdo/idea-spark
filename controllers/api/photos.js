const uploadFile = require('../../config/upload-file');
const Moodboard = require('../../models/moodboard');

module.exports = {
  index,
  upload
};

async function index(req, res) {
  const photos = await Photo.find({}).sort('-createdAt').exec();
  res.json(photos);
}

async function upload(req, res) {
  try {
    if (req.file) {
      // TODO: Remove the console.log after you've verified the output
      console.log(req.file);
      // The uploadFile function will return the uploaded file's S3 endpoint
      const photoURL = await uploadFile(req.file);
      const moodboardDoc = await Moodboard.findById(req.params.boardId);
      moodboardDoc.photos.unshift({url: photoURL});
      await moodboardDoc.save();
      res.json(moodboardDoc);
    } else {
      throw new Error('Must select a file');
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
}