#!/usr/bin/node

"use strict";

// This is script returns a promise using function getResponseFromAPI()

function getResponseFromAPI() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is the response from the API');
        }, 1000);
        
    });
}

export default getResponseFromAPI;

