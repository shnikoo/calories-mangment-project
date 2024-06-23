import User from '../models/user.js';

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    res.json(user);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
