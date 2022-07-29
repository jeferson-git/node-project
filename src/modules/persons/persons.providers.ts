import { DataSource } from 'typeorm';
import { Person } from './entities/person.entity';

export const personsProviders = [
  {
    provide: 'PERSON_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Person),
    inject: ['DATA_SOURCE'],
  },
];
