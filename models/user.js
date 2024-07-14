//Shani Mirzaye 212355812
//Omer Madhala 207917725

import mongoose from 'mongoose';

//Defines a Mongoose schema and model for a user entity in a MongoDB database
const userSchema = new mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.Number,
            required: true,
            unique: true,
        },
        first_name: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        last_name: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        birthday: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
    },
    { collection: 'users' }
);

const User = mongoose.model('User', userSchema);

export default User;