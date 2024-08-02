import data from '../data/students.json' assert { type: 'json' }

const students = data.students

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
