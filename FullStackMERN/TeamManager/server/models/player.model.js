const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { 
        type: String ,
        required: [true , 'Name should be present'],
        minlength:[2 , 'Name must be at least 2 chars']
    },
    position: { 
        type: String,
        required: (true , 'Name should be present'),
    }
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);
