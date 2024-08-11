import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import Header from "./Header";

const ClassList = () => {
    const students = useLoaderData()
  
    const mappedStudents = students.map((student) => (
      <Link to="/" key={student.id}>
        <h3>
          {student.first_name} {student.last_name}
        </h3>
      </Link>
    ))
  
    return (
      <div className='main'>
        <Header />
        <div className='box'>
          <h2>Class List:</h2>
          {mappedStudents}
        </div>
      </div>
    )
  }
  
  export default ClassList
  