// import { env } from '@config';
// import { logger } from '@utils';
// import { connect } from 'mongoose';
import { Todo } from '@app/todo/todo.entity';
import { DataSource } from 'typeorm';

// export async function connectMongoDb() {
//   console.log('::ENV:: ', env.mongoUri);
//   await connect(env.mongoUri)
//     .then(() => {
//       logger.info('::> Connected to MongoDB!');
//     })
//     .catch((err) => {
//       logger.error('::> Error connecting to MongoDB:', err);
//     });
// }

/*
|============================================================================
| NOTE: 
| - Entities are classes that map to database tables.
| - We must provide entity classes to the `entities` 
    array in the `DataSource`. Becasue, TypeORM uses
    these classes to create tables in the database.
    And, regex like string didn't work for me. So,
    I have to provide the entity classes here directly.
|============================================================================
*/

// Postgres
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'txjsapp',
  entities: [Todo], // Add your entities here
  synchronize: true, // Set to false in production
  poolSize: 3, // Set to 10 in production
});
