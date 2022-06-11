/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

export const usersProviders = [
  {
    provide: 'PHOTO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];
