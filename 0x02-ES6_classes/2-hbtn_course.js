#!/usr/bin/node

export default class HolbertonCourse {
    constructor(name, length, students){
        if (typeof name != 'string' || typeof length != 'number' || !Array.isArray(students)){
            
            throw new Error('Invalid attributes. Expected name (string), length (number), and students (array of strings).');
        }
        
        this._name = name;
        this._length = length;
        this._students = students;
    }

    get name(){
        return this._name;
    }

    get length(){
        return this._length;
    }

    get students(){
        return this.students;
    }

    set name(newName){
        if (typeof newName != 'string'){
            throw new Error('invalid name. Expected a string.');
        }
        this._name = newName;
    }

    set length(newLength){
        if (typeof newLength != 'number'){
            throw new Error('invalid name. Expected a string.');
        }
        this._length = newLength;
    }

    set students(newStudents){
        if (!Array.isArray(newStudents)){
            throw new Error('invalid name. Expected a string.');
        }
    }
}