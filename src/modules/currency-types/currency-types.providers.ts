/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { CurrencyType } from './entities/currency-type.entity';

export const currencyTypeProviders = [
  {
    provide: 'CURRENCY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CurrencyType),
    inject: ['DATA_SOURCE'],
  },
];