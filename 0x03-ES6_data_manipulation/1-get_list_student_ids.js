#!/usr/bin/node

export default function getListStudentIds(arr){
    if (!Array.isArray(arr)){
        return [];
    }

    const ids = arr.map((students) => students.id);
    return ids;
}