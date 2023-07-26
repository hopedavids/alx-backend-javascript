#!/usr/bin/node

'use strict';

import {uploadPhoto, createUser} from 'utils.js'

async function handleProfileSignup() {
    try {
      const [photoResponse, userResponse] = await Promise.all([
        uploadPhoto(),
        createUser(),
      ]);
  
      console.log(`photo: ${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    } catch (error) {
      console.log("Signup system offline");
    }
  }
  

export default handleProfileSignup;