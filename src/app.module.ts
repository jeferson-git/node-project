import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import configuration from './config/configuration';

import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { SalesModule } from './modules/sales/sales.module';
import { CurrencyTypesModule } from './modules/currency-types/currency-types.module';
import { AbilityModule } from './modules/ability/ability.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    SalesModule,
    CurrencyTypesModule,
    AbilityModule,
  ],
})
export class AppModule {}
