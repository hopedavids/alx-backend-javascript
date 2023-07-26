#!/usr/bin/node

import signUpUser from "./4-user-promise";

// Call signUpUser and use .then() to access the resolved value
signUpUser("Bob", "Dylan")
  .then((user) => {
    console.log(user); // This will log the resolved value: { firstName: 'Bob', lastName: 'Dylan' }
  })
  .catch((error) => {
    // Handle any errors if the promise is rejected
    console.error(error);
  });
