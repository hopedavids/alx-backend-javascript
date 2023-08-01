#!/usr/bin/node

export default function getStudentsByLocation(students, city){
    
    const listStudents = students.filter((student) => students.location === city);

    return listStudents;
}