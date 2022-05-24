'use strict'
const mongoose = require('mongoose');
const attendanceModel = require('../model/attendance');

module.exports = {
    create: (req, res) => {

        const data = new attendanceModel({
            _id: mongoose.Types.ObjectId(),
            StudentID: req.body.StudentID,
            TimetableID: req.body.TimetableID,
            Status: req.body.Status,
            Datetime: req.body.DateTime,
        })

        try {
            const dataToSave = data.save();
            res.status(200).json({ dataToSave })
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    readAll: async (req, res) => {

        try {
            const data = await attendanceModel.find();
            console.log(data)
            res.status(200).json({ message: "Success", data })
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }

    },


    read: async (req, res) => {

        try {
            const data = await attendanceModel.findById(req.params.id);
            console.log(data)
            res.status(200).json({ message: "Success", data })
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }

    },

    update: async (req, res) => {

        try {
            const id = req.params.id;
            const updatedData = req.body;
            const options = { new: true };

            const result = await attendanceModel.findByIdAndUpdate(
                id, updatedData, options
            )

            res.status(200), json({ message: "Success" })
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    delete: async (req, res) => {

        try {
            const id = req.params.id;
            const data = await attendanceModel.findByIdAndDelete(id)
            res.status(200), json({ message: "Success" })
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }

    }
}