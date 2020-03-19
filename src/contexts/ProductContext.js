//**STEP 2 */ • In src, create a new folder named contexts, this folder is going to be used to hold all of context objects we create.
// • Inside that folder create a new file named ProductContext.js
// In this file, import the createContext function from the react library and create our ProductContext.

import React, { createContext, useContext } from 'react';

export const ProductContext = createContext();