const express = require('express');

const routes = express.Router();

const studentController = require('./controllers/addStudent');
const profesorController = require('./controllers/addProfesor')

routes.get('/', (req, res) => {
    return res.send('Hello World');
});
routes.post('/add-new-student', studentController.addStudent);
routes.get('/view-students', studentController.viewAllStudents);
routes.post('/add-new-professor', profesorController.addNewProfessor);
routes.get('/view-profesors', profesorController.viewAllProfessor);


module.exports = routes;