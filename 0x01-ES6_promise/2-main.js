#!/usr/bin/node

import handleResponseFromAPI from "./2-then.js";

const promise = Promise.resolve(); // You can replace this with your actual promise.
handleResponseFromAPI(promise);