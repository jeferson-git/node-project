/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { Sale } from './entities/sale.entity';

export const salesProviders = [
  {
    provide: 'SALE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Sale),
    inject: ['DATA_SOURCE'],
  },
];