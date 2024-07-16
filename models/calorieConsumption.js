//Shani Mirzaye 212355812
//Omer Madhala 207917725

import mongoose from 'mongoose';

//Defines a Mongoose schema and model for a calorie entity in a MongoDB database
const calorieConsumptionSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.Number,
            required: true,
        },

        year: {
            type: mongoose.Schema.Types.Number,
            required: true,
        },

        month: {
            type: mongoose.Schema.Types.Number,
            required: true,
        },

        day: {
            type: mongoose.Schema.Types.Number,
            required: true,
        },

        id: {
            type: mongoose.Schema.Types.String,
            required: true,
            unqiue: true,
        },

        description: {
            type: mongoose.Schema.Types.String,
            required: true,
        },

        category: {
            type: mongoose.Schema.Types.String,
            enum:['breakfast','lunch','dinner','other'],
            required: true,
        },

        amount: {
            type: mongoose.Schema.Types.Number,
            required: true,
        },
    },
    { collection: 'calories' }
);

// Create and export the CalorieConsumption model based on the defined schema
export const CalorieConsumption = mongoose.model('CalorieConsumption', calorieConsumptionSchema);
// Export the CalorieConsumption model as the default export
export default CalorieConsumption;