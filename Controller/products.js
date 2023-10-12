const express= require('express');
const mongoose= require('mongoose');

const Student= require('../Model/products.js');

const router= express.Router();

const getStudents = async (req, res) => {
    try {
        const student= await Student.find();
        
        res.status(200).json(student);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getspecStudent = async (req,res) => {
    const PID = req.params.PID;

    try {
        const stud = await Student.findOne({PID: PID});

        res.status(200).json(stud);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}

const createstudent =  async (req, res) => {
    // console.log(req.body);
    const newstudent = new Student({
        name:req.body.name,
        PID:req.body.PID,
        price:req.body.price,
        image:req.body.image,
        description:req.body.description,
        unit:req.body.unit,
        created_on:req.body.created_on
    })
    try {
        await newstudent.save();

        res.status(201).json(newstudent);

    } catch(error) {
        res.status(400).json({ message : error.message});
    }

}

const updatestudent = async (req, res) => {
    const PID= req.params.PID;
    try{
        await Student.findOneAndUpdate({
            PID: PID,
        },
        {   
            name:req.body.name,
            price:req.body.price,
            description:req.body.description,
            colors:req.body.colors,
            created_on:req.body.created_on
        }
        )
        res.status(202).json({ PID: PID});

    } catch (error) {
        res.status(401).json({message: error.message});
    }
    
}

const deletestudent = async (req, res) => {
    const PID= req.params.PID;
    console.log(PID);
    try {
        await Student.findOneAndRemove({PID: PID});
        res.status(203).json({PID: PID});
    }catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getStudents= getStudents;
module.exports.createstudent= createstudent;
module.exports.getspecStudent= getspecStudent;
module.exports.updatestudent= updatestudent;
module.exports.deletestudent= deletestudent;