import { DataSource } from 'typeorm';
import { Provider } from './entities/provider.entity';

export const providerProviders = [
  {
    provide: 'PROVIDER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Provider),
    inject: ['DATA_SOURCE'],
  },
];
