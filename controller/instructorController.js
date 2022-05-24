'use strict'
const mongoose = require('mongoose');
const instructorModel = require('../model/instructor');

module.exports = {
    create: (req, res) => {

        const data = new instructorModel({
            _id: mongoose.Types.ObjectId(),
            InstructorID: req.body.InstructorID,
            FullName: req.body.FullName,
            Phone: req.body.Status,
            Email: req.body.DateTime,
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
            const data = await instructorModel.find();
            console.log(data)
            res.status(200).json({ message: "Success", data })
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }

    },
    read: async (req, res) => {

        try {
            const data = await instructorModel.findById(req.params.id);
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

            const result = await instructorModel.findByIdAndUpdate(
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
            const data = await instructorModel.findByIdAndDelete(id)
            res.status(200), json({ message: "Success" })
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }

    }
}