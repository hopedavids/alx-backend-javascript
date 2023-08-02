#!/usr/bin/node

export default function createInt8TypedArray(length, position, value){
    if (position >= length) {
        throw new Error('Position outside range');
    }

    const buffer = new ArrayBuffer(length);

    // Use a DataView to set the Int8 value at the specified position
    const dataView = new DataView(buffer);
    dataView.setInt8(position, value);

    return dataView;
}