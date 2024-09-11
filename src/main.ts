import 'reflect-metadata'; // must at the top, always

import { AppDataSource, env } from '@config';
import { logger } from '@utils';
import { networkInterfaces } from 'os';
import { app } from './app';

async function boot() {
  // load environment variables
  const { host, port } = env();

  // pre-boot operations

  // connect to the database
  // await connectMongoDb();
  // TypeORM: PostgreSQL database connection
  await AppDataSource.initialize()
    .then(() => {
      logger.info('🔌 Connected to Postgres!');
    })
    .catch((err) => {
      logger.error(`❌ Error connecting to Postgres: \n${err}`);
    });

  // Start the server
  app.listen(port, host, () => {
    // discover the ip address of this machine
    const ips = networkInterfaces() as Record<string, any>;
    const ipInterfaces = Object.values(ips)
      .flat()
      .filter((ip) => ip.family === 'IPv4')
      .map((ip) => ip.address);

    logger.info(`✅ Server is ready!`);

    let ipv4List = '';
    ipInterfaces.slice(0, 2).map((ip) => {
      ipv4List += `\thttp://${ip}:${port}\n`;
    });

    logger.info(`🚀 Server is running on:\n${ipv4List}`);
    logger.info(`✔ Swagger docs available at: /docs`);
  });
}

await boot();
