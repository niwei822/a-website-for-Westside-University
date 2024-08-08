import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import Header from "./Header";

const ClassList = ({ data }) => {
    const students = data;

    return (
        <div className='main'>
            <Header />
            <div className='box'>
                <h2>Class List:</h2>
                {students && students.map((student) => (
                    <Link to="/" key={student.id} className='student-link'>
                        <h3>{student.name}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ClassList;
