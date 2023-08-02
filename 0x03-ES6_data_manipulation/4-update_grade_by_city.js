#!usr/bin/node

export default function updateStudentGradeByCity(students, city, newGrades){

    const studentsInCity = students.filter((student) => student.location === city);

  // Use map to update their grades from the newGrades array
    const updatedStudents = studentsInCity.map((student) => {
    const matchingGrade = newGrades.find((gradeObj) => gradeObj.studentId === student.id);
    if (matchingGrade) {
        return { ...student, grade: matchingGrade.grade };
    } else {
        return { ...student, grade: 'N/A' };
    }
    });

  return updatedStudents;
}
