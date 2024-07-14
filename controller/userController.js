import User from '../models/user.js';

//Retrieves a user by their ID.
export const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    res.json(user);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
