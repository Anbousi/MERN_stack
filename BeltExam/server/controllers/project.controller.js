const { Project } = require('../models/project.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.getAllProjects = (request, response) => {
    Project.find({}).sort({dueDate:1})
        .then(projects => response.json(projects))
        .catch(err => response.json(err))
}

module.exports.createProject = (request, response) => {
    const { projectName, dueDate , status } = request.body;
    Project.create({
        projectName,
        dueDate,
        status
    })
        .then(project => response.json(project))
        .catch(err => response.status(400).json(err));
}

module.exports.deleteProject = (request, response) => {
    Project.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.updateProject = (request, response) => {
    Project.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProject => response.json(updatedProject))
        .catch(err => response.status(400).json(err));
}
