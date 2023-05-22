import app from './app.js';
import dotenv from 'dotenv';
import dbConfig from './app/config/dbconfig.js';

dotenv.config({ path: './.env.local' });

const PORT = process.env.PORT || 5500;
const { user, host, database, password, dialect } = dbConfig;


app.listen(PORT, () => {
  console.log(`App is running on port: http://localhost:${PORT}`);
});
