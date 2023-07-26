#!/usr/bin/node

// testing the promise api

"use strict";

import getFullResponseFromAPI from './1-promise.js';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));