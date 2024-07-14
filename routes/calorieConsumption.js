//Shani Mirzaye 212355812
//Omer Madhala 207917725

import express from "express";
const router = express.Router();
import { addCalories, getReport } from '../controller/caloriesController.js';

// Route to add calories data via POST request
router.post('/addcalories', addCalories);

// Route to fetch calorie reports via GET request
router.get('/report', getReport);

export default router;  // Exporting the router instance as the default export
