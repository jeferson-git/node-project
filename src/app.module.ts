import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import configuration from './config/configuration';

import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { SalesModule } from './modules/sales/sales.module';
import { CurrencyTypesModule } from './modules/currency-types/currency-types.module';
import { AbilityModule } from './modules/ability/ability.module';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { AddressModule } from './modules/address/address.module';
import { ContactModule } from './modules/contact/contact.module';
import { ContractModule } from './modules/contract/contract.module';
import { ProductsModule } from './modules/products/products.module';
import { CategoryModule } from './modules/category/category.module';
import { ProvidersModule } from './modules/providers/providers.module';
import { PersonsModule } from './modules/persons/persons.module';
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
    ProductsModule,
    CategoryModule,
    ProvidersModule,
    PersonsModule,
  ],
})
export class AppModule {}
