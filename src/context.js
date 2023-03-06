// creating a context api here:

import { createContext } from "react";

export const AppContext = createContext();

/*
In the above example, createContext method will help us create a Context instance, 
which will help us send data to the various components. So we export in order to be
able to import and use it in those components.
*/