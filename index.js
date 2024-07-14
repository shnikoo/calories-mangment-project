//Shani Mirzaye 212355812
//Omer Madhala 207917725

import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import calrieConsumption from './routes/calorieConsumption.js';
import user from './routes/user.js';


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


// Route to display information about developers
app.get('/about', (req, res) => {
    // Array of objects describing developers
    const developers = [
        { "firstname": "Shani", "lastname": "Mirzaye", "id": 212355812, "email": "shanimir2001@gmail.com" },
        { "firstname": "Omer", "lastname": "Madhala", "id": 207917725, "email": "omermadhala181@gmail.com" }
    ];
    res.json(developers);
});
