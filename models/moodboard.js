const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
    content: String,
    url: { type: String, required: true }
}, {
    timestamps: true
});

const moodboardSchema = new Schema({
    moodboardName: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Expert'],
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


module.exports = mongoose.model('Location', moodboardSchema);