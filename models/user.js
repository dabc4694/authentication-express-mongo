var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    name: {
        type: String,
        trim: true,
        required: true
    },
    favoriteBook: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

var User = new mongoose.model('User', UserSchema);

module.exports = User;