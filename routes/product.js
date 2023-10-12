
const express= require('express');

const  student_Act = require("../Controller/products");
const router = express.Router();
    router.all('/*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });

    router.get('/', student_Act.getStudents);
    router.get('/:roll', student_Act.getspecStudent);
    router.post('/', student_Act.createstudent);
    router.patch('/:roll', student_Act.updatestudent);
    router.delete('/:roll', student_Act.deletestudent);
module.exports= router;
