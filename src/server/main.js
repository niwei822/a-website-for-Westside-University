import express from 'express'
import ViteExpress from 'vite-express'
import ctrlFns from './studentsController.js'

const app = express()

app.use(express.json())

app.get('/classlist/:name', ctrlFns.getAllStudents)
app.get('/students/:id', ctrlFns.getStudentById)
app.patch('/students/:id', ctrlFns.updateStudentGrade)

ViteExpress.listen(app, 3000, () =>
  console.log('Server is listening on port 3000...')
)
