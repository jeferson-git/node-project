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
  ],
})
export class AppModule {}
