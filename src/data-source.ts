
import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Ticket } from './tickets/entities/ticket.entity';

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT ?? 5432),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Ticket],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
