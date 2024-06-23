import mongoose from 'mongoose';

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


export const CalorieConsumption = mongoose.model('CalorieConsumption', calorieConsumptionSchema);
