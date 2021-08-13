const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
    url: { type: String, required: true }
}, {
    timestamps: true
});

const moodboardSchema = new Schema({
    moodboardName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Aesthetic', 'Creative', 'Web Design', 'ETC'],
    },
    description: {
        type: String,
        required: true
    },
    photos: [photoSchema],
    user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
    timestamps: true
});


module.exports = mongoose.model('Moodboard', moodboardSchema);