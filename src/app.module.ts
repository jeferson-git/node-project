import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import configuration from './config/configuration';

import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './modules/users/register/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { SalesModule } from './modules/sales/sales.module';
import { CurrencyTypesModule } from './modules/currency-types/currency-types.module';
import { AbilityModule } from './modules/ability/ability.module';
import { ScheduleModule } from './modules/users/schedule/schedule.module';
import { AddressModule } from './modules/users/address/address.module';
import { ContactModule } from './modules/users/contact/contact.module';
import { ContractModule } from './modules/users/contract/contract.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    SalesModule,
    CurrencyTypesModule,
    AbilityModule,
    ScheduleModule,
    AddressModule,
    ContactModule,
    ContractModule,
  ],
})
export class AppModule {}
