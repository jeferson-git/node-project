/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import configuration from 'src/config/configuration';

const host = configuration().database.host;
const port = configuration().database.port;
const username = configuration().database.username;
const password = configuration().database.password;
const database = configuration().database.database;

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: host,
                port: +port,
                username: username,
                password: password,
                database: database,
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
];
