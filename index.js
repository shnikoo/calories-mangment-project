import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import calrieConsumption from './routes/calorieConsumption.js';
import user from './routes/user.js';


const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;
// Middleware to parse JSON request bodies
app.use(express.json());


mongoose.connect(MONGOURL).then(() => {
    console.log("Database is connected successfully.");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);

    });
}).catch((error)=>console.log(error));

app.use('/', calrieConsumption);
app.use('/', user);


const userSchema = new mongoose.Schema({
    id : Number,
    first_name : String,
    last_name : String,
    birthday : String
});

const UsersModel = mongoose.model("users", userSchema)

app.get("/getUsers", async(req,res) => {
    try {
        const userData = await UsersModel.find({}, { _id: 0, __v: 0 }); // Exclude _id and __v fields
        res.json(userData);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// About route to display developers' information
app.get('/about', (req, res) => {1
    // Array of objects describing developers
    const developers = [
        { "firstname": "Shani", "lastname": "Mirzaye", "id": 212355812, "email": "shanimir2001@gmail.com" },
        { "firstname": "Omer", "lastname": "Madhala", "id": 207917725, "email": "omermadhala181@gmail.com" }
    ];
    res.json(developers);
});
