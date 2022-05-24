'use strict';
module.exports = function (app) {
    let attendanceController = require('./controller/attendanceController');
    let instructorController = require('./controller/instructorController');
    let studentController = require('./controller/studentController');
    let timeController = require('./controller/timetableController');
    // todoList Routes
    app.route('/attendance/create')
        .post(attendanceController.create);
    app.route('/attendance/readAll')
        .get(attendanceController.readAll);
    app.route('/attendance/read/:id')
        .get(attendanceController.read);
    app.route('/attendance/update/:id')
        .patch(attendanceController.update);
    app.route('/attendance/delete/:id')
        .delete(attendanceController.delete);


    //Instructors Routes
    app.route('/instructor/create')
        .post(instructorController.create);
    app.route('/instructor/readAll')
        .get(instructorController.readAll);
    app.route('/instructor/read/:id')
        .get(instructorController.read);
    app.route('/instructor/update/:id')
        .patch(instructorController.update);
    app.route('/instructor/delete/:id')
        .delete(instructorController.delete);

    //Student Routes
    app.route('/student/create')
        .post(studentController.create);
    app.route('/student/readAll')
        .get(studentController.readAll);
    app.route('/student/read/id')
        .get(studentController.read);
    app.route('/student/update/:id')
        .patch(studentController.update);
    app.route('/student/delete/:id')
        .delete(studentController.delete);


    //Timetable Routes
    app.route('/timetable/create')
        .post(timeController.create);
    app.route('/timetable/readAll')
        .get(timeController.readAll);
    app.route('/timetable/read/:id')
        .get(timeController.read);
    app.route('/timetable/update/:id')
        .patch(timeController.update);
    app.route('/timetable/delete/:id')
        .delete(timeController.delete);



};