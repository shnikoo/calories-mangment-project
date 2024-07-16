//Shani Mirzaye 212355812
//Omer Madhala 207917725

import mongoose from 'mongoose';
import { CalorieConsumption } from "../models/calorieConsumption.js";

// Add new calorie consumption item
const addCalories = async (req, res) => {
  try {
    const { user_id, year, month, day, description, category, amount } = req.body;
    const customId = new mongoose.Types.ObjectId().toString(); // Generate a custom ID
    const newCalorie = new CalorieConsumption({
      user_id,
      year,
      month,
      day,
      id: customId, // Assign the custom ID
      description,
      category,
      amount,
    });
    await newCalorie.save();
    res.status(201).json(newCalorie);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Generate report for specific user, year, and month
const getReport = async (req, res) => {
  try {
    const { user_id, year, month } = req.query;
    const report = {
      breakfast: [],
      lunch: [],
      dinner: [],
      other: [],
    };

    const calories = await CalorieConsumption.find({ user_id, year, month });
    calories.forEach((CalorieConsumption) => {
      report[CalorieConsumption.category].push({
        day: CalorieConsumption.day,
        description: CalorieConsumption.description,
        amount: CalorieConsumption.amount,
      });
    });

    res.json(report);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Export the functions
export { addCalories, getReport };
