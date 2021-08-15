const ProjectController = require('../controllers/project.controller');
module.exports = function(app){

    app.get('/test', ProjectController.index);
    app.get('/allprojects', ProjectController.getAllProjects);
    app.post('/projects/addproject', ProjectController.createProject);
    app.put('/projects/updateproject/:id', ProjectController.updateProject);
    app.delete('/projects/delete/:id', ProjectController.deleteProject);

}
