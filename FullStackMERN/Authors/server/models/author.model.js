const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Title is required"
        ],
        minlength:[
            3, 
            'Title is at least 3 chars'
        ]
    },
}, { timestamps: true });
module.exports.Author = mongoose.model('Person', AuthorSchema);