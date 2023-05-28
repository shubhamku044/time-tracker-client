import app from './app.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: './.env.local' });

const PORT = process.env.PORT || 5500;

const dbUrlTemplate = process.env.DB_URL;
const dbUserName = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

const dbUrl = dbUrlTemplate.replace('<USERNAME>', dbUserName).replace('<PASSWORD>', dbPassword);

(async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log('Database connected successfully');
  } catch (err) {
    console.log(`Error while connecting to database: ${err}`);
  }
})();

app.listen(PORT, () => {
  console.log(`App is running on port: http://localhost:${PORT}`);
});
