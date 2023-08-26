import app from './app.js';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

dotenv.config({ path: './.env.local' });

const PORT = process.env.PORT || 5500;

(async () => {
  try {
    await prisma.$connect();
    console.log('Connected to database');
  } catch (err) {
    console.error(err);
  }
})();

app.listen(PORT, () => {
  console.log(`App is running on port: http://localhost:${PORT}`);
});
