import app from './app.js';
import dotenv from 'dotenv';
import { DataSourceOptions, DataSource } from 'typeorm';
import { TaskModel } from './app/entities/index.js';

dotenv.config({ path: './.env.local' });

const PORT = process.env.PORT || 5500;

const dbUserName = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

const dbOptions: DataSourceOptions = {
  type: 'postgres',
  host: dbHost,
  port: 5432,
  username: dbUserName,
  password: dbPassword,
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [TaskModel],
};

export const AppDataSource = new DataSource(dbOptions);

AppDataSource.initialize().then(() => {
  console.log('Database connected');
}).catch((err) => {
  console.log('Database connection failed');
  console.log(err);
});

app.listen(PORT, () => {
  console.log(`App is running on port: http://localhost:${PORT}`);
});
