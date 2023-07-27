#!/usr/bin/node

export default class Currency{
    constructor(code, name){
        if (typeof name != 'string' || typeof code != 'string'){
            throw new Error('Invalid input format');
        }
        this._code = code;
        this._name = name;
    }

    get code(){
        return this._code;
    }

    get name(){
        return this._name;
    }

    set code(newCode){
        if (typeof newCode != 'string'){
            throw new Error('Invalid input format');
        }
        this._code = newCode;
    }

    set name(newName){
        if (typeof newCode != 'string'){
            throw new Error('Invalid input format');
        }
        this._name = newName;
    }

    displayFullCurrency(){
        return (`${this.name} (${this.code})`);
    }
}