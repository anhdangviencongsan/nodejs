'use strict'
const mongoose = require('mongoose');
const timetableModel = require('../model/timetable');

module.exports = {
    create: (req, res) => {

        const data = new timetableModel({
            _id: mongoose.Types.ObjectId(),
            Date: req.body.Date,
            Slot: req.body.Slot,
            Class: req.body.Class,
            InstructorID: req.body.InstructorID,

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
            const data = await timetableModel.find();
            console.log(data)
            res.status(200).json({ message: "Success", data })
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }

    },
    read: async (req, res) => {

        try {
            const data = await timetableModel.findById(req.params.id);
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

            const result = await timetableModel.findByIdAndUpdate(
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
            const data = await timetableModel.findByIdAndDelete(id)
            res.status(200), json({ message: "Success" })
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }

    }
}