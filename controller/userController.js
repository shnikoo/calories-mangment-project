//Shani Mirzaye 212355812
//Omer Madhala 207917725

import User from '../models/user.js';

// Retrieves a user by their ID.
export const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id }, { _id: 0, __v: 0 });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).send('Server Error');
  }
};
