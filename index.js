//Shani Mirzaye 212355812
//Omer Madhala 207917725

import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import calrieConsumption from './routes/calorieConsumption.js';
import user from './routes/user.js';
import about from './routes/about.js'


const app = express();  // Creating an Express application instance
dotenv.config();  // Loading environment variables from a .env file

const PORT = process.env.PORT || 7000;  // Setting the port from environment variables or defaulting to 7000
const MONGOURL = process.env.MONGO_URL;  // Retrieving MongoDB connection URL from environment variables

// Middleware to parse JSON request bodies
app.use(express.json());

// Connecting to MongoDB
mongoose.connect(MONGOURL).then(() => {
    console.log("Database connected successfully.");
    // Starting the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => console.log(error));

// Mounting routes for calorie consumption and user management
app.use('/', calrieConsumption);
app.use('/', user);
app.use('/',about);
