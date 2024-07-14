//Shani Mirzaye 212355812
//Omer Madhala 207917725

import express from "express"
const router = express.Router();
import { getUser } from '../controller/userController.js';  // Importing the getUser function from the userController

// Route to fetch user data by ID via GET request
router.get('/user/:id', getUser);

export default router;  // Exporting the router instance as the default export