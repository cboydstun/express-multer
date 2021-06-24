const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
        type: String
    }
}, {collection: 'images', timestamps: true})

module.exports = mongoose.model('User', UserSchema)