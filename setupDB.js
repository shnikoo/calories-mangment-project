
const insertInitialData = async () => {
    const initialUser = new User({
      id: '11111',
      first_name: 'bdika',
      last_name: 'bdika',
      birthday: new Date('1990-01-10'),
    });
  
    try {
      await initialUser.save();
      console.log('Initial user data inserted...');
    } catch (err) {
      console.error('Error inserting initial data:', err.message);
    }
  };
  
  const setup = async () => {
    await connectDB();
    await insertInitialData();
    mongoose.connection.close();
  };
  
  setup();
  