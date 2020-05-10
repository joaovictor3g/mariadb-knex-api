const express = require('express');

const routes = express.Router();

const studentController = require('./controllers/addStudent');

routes.post('/', studentController.addStudent);
routes.get('/view', studentController.viewAllStudents);

module.exports = routes;