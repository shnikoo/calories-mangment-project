import mongoose from 'mongoose';

// Define the schema for calorie consumption data
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

// Create and export the CalorieConsumption model
export const CalorieConsumption = mongoose.model('CalorieConsumption', calorieConsumptionSchema);
