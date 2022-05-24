'use strict'
const mongoose = require('mongoose');
const studentModel = require('../model/student');

module.exports = {
    create: (req, res) => {

        const data = new studentModel({
            _id: mongoose.Types.ObjectId(),
            StudentID: req.body.StudentID,
            Image: req.body.Image,
            FullName: req.body.FullName,
            Email: req.body.Email,
            Class: req.body.Class,
            Address: req.body.Address,
        })

        try {
            const dataToSave = data.save();
            res.status(200).json(dataToSave)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    readAll: async (req, res) => {

        try {
            const data = await studentModel.find();
            console.log(data)
            res.status(200).json({ message: "Success", data })
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }

    },
    read: async (req, res) => {

        try {
            const data = await studentModel.findById(req.params.id);
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

            const result = await studentModel.findByIdAndUpdate(
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
            const data = await studentModel.findByIdAndDelete(id)
            res.status(200), json({ message: "Success" })
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }

    }
}