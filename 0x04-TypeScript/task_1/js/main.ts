#!/usr/bin/node


interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    readonly fullTimeEmployee: boolean;
    readonly yearsOfExperience: number;
    readonly location: string;
    [key: string]: any;
}
  
interface Directors extends Teacher{
    numberOfReports: string;
}

// Step 2: Create a Teacher and Director object

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,  
};
  
console.log(director1);

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
  
console.log(teacher3);


function printTeacher(firstName: string, lastName: string): string {
    const firstLetter = firstName.charAt(0).toUpperCase();
    return `${firstLetter}. ${lastName}`;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const teacherName = printTeacher("John", "Doe");
console.log(teacherName);


// setup the constructor for StudentClass
interface StudentConstructor {
    firstName: string;
    lastName: string;
}
  
// Step 2: Define the interface for the StudentClass
interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

class Student implements StudentClass {
    private firstName: string;
    private lastName: string;
  
    constructor({ firstName, lastName }: StudentConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
}
  
const student1 = new Student({ firstName: "John", lastName: "Doe" });
console.log(student1.workOnHomework()); 
console.log(student1.displayName());