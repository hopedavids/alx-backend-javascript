#!/usr/bin/node

import ClassRoom from './0-classroom.js';

export default function initializeRooms(){
    const roomSizes = [19, 20, 34];
    const classrooms = roomSizes.map(size => new ClassRoom(size));
    return classrooms;
}