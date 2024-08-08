import fs from 'fs';
import path from 'path';

// Path to the JSON file
const studentsFilePath = path.resolve('src/data/students.json');

// Read and parse the JSON file
let students = [];
try {
  const data = JSON.parse(fs.readFileSync(studentsFilePath, 'utf8'));
  students = data.students;  // Access the 'students' array
  if (!Array.isArray(students)) {
    throw new Error('Parsed data is not an array');
  }
} catch (err) {
  console.error('Error reading or parsing students data:', err);
}

const ctrlFns = {
  getAllStudents: (req, res) => {
    const { name } = req.params;
    const filteredStudents = students.filter(
      (stu) => stu.class === name.toUpperCase()
    );
    res.status(200).send(filteredStudents);
  },
  getStudentById: (req, res) => {
    const { id } = req.params;
    const student = students.find((stu) => +stu.id === +id);
    if (!student) {
      return res.status(404).send('Student not found');
    }
    res.status(200).send(student);
  },
  updateStudentGrade: (req, res) => {
    const { id } = req.params;
    const { grade } = req.body;
    const student = students.find((stu) => +stu.id === +id);
    if (!student) {
      return res.status(404).send('Student not found');
    }
    student.grade = grade;
    res.status(200).send(student);
  },
};

export default ctrlFns;
