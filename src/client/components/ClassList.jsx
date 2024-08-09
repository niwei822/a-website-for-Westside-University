import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import Header from "./Header";

const ClassList = ({ students }) => {
    //const students = useLoaderData();

    return (
        <div className='main'>
            <Header />
            <div className='box'>
                <h2>Class List:</h2>
                {students.map((student) => (
                    <Link key={student.id} to="/">
                        <h3>{student.first_name} {student.last_name}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ClassList;
