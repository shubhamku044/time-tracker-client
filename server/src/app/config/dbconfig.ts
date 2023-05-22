import { Dialect } from 'sequelize';

interface IDbConfig {
  user: string;
  host: string;
  database: string;
  password: string;
  port: number;
  dialect: Dialect
}
const dbConfig: IDbConfig = {
  user: 'shubham',
  host: 'database',
  database: 'tracker',
  password: 'helloworld',
  port: 5432,
  dialect: 'postgres'
};

export default dbConfig;
