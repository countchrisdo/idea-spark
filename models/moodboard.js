//model for moodboards
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    photoUrl: String,
    caption: String,
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });

const moodboardSchema = new Schema({
title: {
    type: String,
    required: true
},
photos: [photoSchema]
}, {
timestamps: true
});

module.exports = mongoose.model('Moodboard', moodboardSchema);