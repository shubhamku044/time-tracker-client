import app from './app.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: './.env.local' });

const PORT = process.env.PORT || 5500;

(async () => {
  try {
    mongoose.connect('mongodb://mongo:27017/tracker');
    console.log('Database connected successfully');
  } catch (err) {
    console.log(`Error while connecting to database: ${err}`);
  }
})();

app.listen(PORT, () => {
  console.log(`App is running on port: http://localhost:${PORT}`);
});
