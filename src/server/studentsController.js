import fs from 'fs';
import path from 'path';

// Path to the JSON file
const studentsFilePath = path.resolve('src/data/students.json');

// Read and parse the JSON file
const students = JSON.parse(fs.readFileSync(studentsFilePath, 'utf8'));

const ctrlFns = {
  getAllStudents: (req, res) => {
    const { name } = req.params
    const filteredStudents = students.filter(
      (stu) => stu.class === name.toUpperCase()
    )
    res.status(200).send(filteredStudents)
  },
  getStudentById: (req, res) => {
    const { id } = req.params
    const index = students.findIndex((stu) => +stu.id === +id)
    res.status(200).send(students[index])
  },
  updateStudentGrade: (req, res) => {
    const { id } = req.params
    const { grade } = req.body
    const index = students.findIndex((stu) => +stu.id === +id)
    students[index].grade = grade
    res.status(200).send(students[index])
  },
}

export default ctrlFns
