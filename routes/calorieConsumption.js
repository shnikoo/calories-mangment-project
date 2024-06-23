import express from "express"
const router = express.Router();
import { addCalories, getReport } from '../controller/caloriesController.js';

router.post('/addcalories', addCalories);
router.get('/report', getReport);

export default router;  // This is the default export
