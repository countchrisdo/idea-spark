const uploadFile = require('../../config/upload-file');
const Moodboard = require('../../models/moodboard');

module.exports = {
    createMoodboard,
    index,
    detail,
    deleteOne,
    updateOne
};

async function createMoodboard(req, res) {
    console.log(req);
    req.body.user = req.user._id;
    for (let key in req.body) {
        if (req.body[key] === '') {
            delete req.body[key];
        }
    }
    
    const moodboard = await Moodboard.create(req.body);
    res.json(moodboard);
}
// Index funcitonality for a indv user
// async function index(req, res) {
//     const moodboards = await Moodboard.find({user:req.user._id}).sort('-createdAt').exec();
//     res.json(moodboards);
// }

async function index(req, res) {
    const moodboards = await Moodboard.find({}).sort('-createdAt').populate("user","name").exec();
    res.json(moodboards);
}

async function detail(req, res) {
    const moodboard = await Moodboard.findById(req.params.id);
    res.json(moodboard);
}
async function deleteOne(req, res) {
    const moodboard = await Moodboard.findOneAndDelete( {_id: req.params.id} );
    res.json("Moodboard Deleted");
}
async function updateOne(req, res) {
    const moodboard = await Moodboard.findOneAndUpdate( {_id: req.params.id}, req.body, {new:true} );
    res.json(moodboard);
}