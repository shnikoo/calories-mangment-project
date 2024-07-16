//Shani Mirzaye 212355812
//Omer Madhala 207917725

import express from "express";
const router = express.Router();
import  {getDevelopers} from '../controller/aboutController.js'

// Route to fetch developrs via GET request
router.get('/about', getDevelopers);

export default router;// Exporting the router instance as the default export