#!/usr/bin/node

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Hope",
    lastName: "Davids",
    age: 100,
    location: "USA"

};

const student2: Student = {
    firstName: "Patience",
    lastName: "Etornam",
    age: 40,
    location: "Ghana"
};


const studentsList:Student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = table.insertRow();
const headerCell1 = headerRow.insertCell();
const headerCell2 = headerRow.insertCell();
headerCell1.innerText = "First Name";
headerCell2.innerText = "Location";

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  cell1.innerText = student.firstName;
  cell2.innerText = student.location;
});

document.body.appendChild(table);