#!/usr/bin/node

export default class ClassRoom {
    constructor(maxStudentsSize){
        this._maxStudentsSize = maxStudentsSize;
    }

    maxStudentsSize(){
        return this._maxStudentsSize;
    }
}