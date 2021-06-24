const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
        type: String
    }
}, {
    collection: 'images'
})

module.exports = mongoose.model('User', UserSchema)