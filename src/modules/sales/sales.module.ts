/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { DatabaseModule } from '../../database/database.module';
import { salesProviders } from './sales.providers';
import { CurrencyTypesModule } from '../currency-types/currency-types.module';
import { AbilityModule } from '../ability/ability.module';
@Module({
  imports: [DatabaseModule, CurrencyTypesModule, AbilityModule],
  controllers: [SalesController],
  exports: [SalesService],
  providers: [...salesProviders, SalesService]
})
export class SalesModule {}
