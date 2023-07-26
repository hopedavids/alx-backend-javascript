#!/usr/bin/node

// const getResponseFromAPI = require("./0-promise.js");

import getResponseFromAPI from "./0-promise.js";

// This script serves as the test script to run the program 

"use strict";

const response = getResponseFromAPI();
console.log(response instanceof Promise);
