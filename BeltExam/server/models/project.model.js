const mongoose = require('mongoose');
const moment = require('moment')
const ProjectSchema = new mongoose.Schema({
    projectName: { 
        type: String ,
        required: [true , 'Name should be present'],
        minlength:[3 , 'Name must be at least 2 chars'],
        unique:[true , "Name already exist"]
    },
    dueDate: { 
        type: Date,
        required: (true , 'Date should be present'),
        default:Date.now,
        // min: [Date.now,'Due date is earlier than today']
    },
    status: {
        type:String
    }
}, { timestamps: true });
module.exports.Project = mongoose.model('Project', ProjectSchema);
